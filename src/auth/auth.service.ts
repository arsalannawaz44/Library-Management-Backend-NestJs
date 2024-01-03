import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from "./schemas/user.schema";
import * as bcrypt from 'bcryptjs'
import {JwtService} from '@nestjs/jwt'
import {Model} from "mongoose";
import {SignUpDto} from "./dto/signup.dto";

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name, "default") private readonly userModel: Model<UserDocument>,
        private jwtService: JwtService
    ) {
    }

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
        const {name, email, password} = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await this.userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = this.jwtService.sign({id: user._id})

        return {token}
    }
}
