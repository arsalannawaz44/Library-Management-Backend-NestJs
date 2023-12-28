import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt'
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {MongooseModule} from "@nestjs/mongoose";
import {User, UserSchema} from "./schemas/user.schema";
import {PassportModule} from "@nestjs/passport";
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [
        PassportModule.register({defaultStrategy: 'jwt'}),
        MongooseModule.forFeature([{name: 'User', schema: UserSchema}], 'default'),
        JwtModule.registerAsync({
            inject: [ConfigService],
            useFactory: (config: ConfigService) => {
                return {
                    secret: config.get<string>('JWT_SECRET'),
                    signOptions: {
                        expiresIn: config.get<string>('JWT_EXPIRES'),
                    }
                }
            }
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {
}
