import {Category} from "../../utilities/enums/category.enums";
import {IsEnum, IsNumber, IsOptional, IsString} from "class-validator";

export class UpdateBookDto {

    @IsOptional()
    @IsString()
    readonly title: string;

    @IsOptional()
    @IsString()
    readonly description: string;

    @IsOptional()
    @IsString()
    readonly author: string;

    @IsOptional()
    @IsNumber()
    readonly price: number;

    @IsOptional()
    @IsEnum(Category, {message:'Please Enter Correct Category'})
    readonly category: Category;
}