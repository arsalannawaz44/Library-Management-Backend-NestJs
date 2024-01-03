import {IsEmail, IsNotEmpty, IsString, MinLength} from "class-validator";

export class LoginDto {

    @IsNotEmpty({message:"Email is Required"})
    @IsEmail({},{message:'Please Enter Correct Email'})
    readonly email: string;

    @IsNotEmpty({message:"Password is Required"})
    @IsString()
    @MinLength(8)
    readonly password: string;
}