import {Category} from "../../utilities/enums/category.enums";
import {IsEnum, IsNotEmpty, IsNumber, IsString} from "class-validator";

export class CreateBookDto {

    @IsNotEmpty({message:"Title is Required"})
    @IsString()
    readonly title: string;

    @IsNotEmpty({message:"Description is Required"})
    @IsString()
    readonly description: string;

    @IsNotEmpty({message:"Author is Required"})
    @IsString()
    readonly author: string;

    @IsNotEmpty({message:"Price is Required"})
    @IsNumber()
    readonly price: number;

    @IsNotEmpty({message:"Category is Required"})
    @IsEnum(Category)
    readonly category: Category;
}