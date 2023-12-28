import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type UserDocument = User & Document
@Schema({
    timestamps: true
})

export class User {
    @Prop()
    name: string;

    @Prop({unique:[true, 'Duplicate email Entered']})
    email: string;

    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)