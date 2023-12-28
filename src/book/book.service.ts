import {BadRequestException, Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import {Book} from "./schemas/book.schema";
import {NotFoundError} from "rxjs";
import {Query, Schema, Types} from "mongoose";
import {ObjectId} from "mongoose";

import {Query as ExpressQuery} from 'express-serve-static-core'

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>,
    ) {}

    async findAll(query: ExpressQuery): Promise<Book[]> {
        const resultPage = 2;
        const currentPage = Number(query.page) || 1;
        const skip = resultPage * (currentPage-1);

        const keyword = query.keyword ? {
            title: {
                $regex: query.keyword,
                $options: 'i'
            }
        } : {}

        const books = await this.bookModel
            .find({...keyword})
            .limit(resultPage)
            .skip(skip);
        if (!books){
            throw new BadRequestException('This Page is not Found')
        }
        return books;
    }

    async create(book: Book): Promise<Book>{
        return await this.bookModel.create(book);
    }

    async findById(id: string): Promise<Book>{

        const isValid = mongoose.isValidObjectId(id)

        if (!isValid){
            throw new BadRequestException('Please Enter Correct ID')
        }
        const book = await this.bookModel.findById(id);
        if (!book){
            throw new NotFoundException('Book Not Found');
        }
        return book;
    }

    async updateById(id:string, book: Book): Promise<Book>{
        return await this.bookModel.findByIdAndUpdate(id,book,{
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id:any):Promise<{status:boolean, message:string}>{
        await this.bookModel.findByIdAndDelete(id)
        return {status:true, message:"Book Deleted Successfully"}

    }

}
