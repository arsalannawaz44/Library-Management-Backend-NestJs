import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Category} from "../../utilities/enums/category.enums";
import {Document, ObjectId} from "mongoose";
export type BookDocument = Book & Document

@Schema({
    timestamps: true,
})

export class Book {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;

}

export const BookSchema = SchemaFactory.createForClass(Book)