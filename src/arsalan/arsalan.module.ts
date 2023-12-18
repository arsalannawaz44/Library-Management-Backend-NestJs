import { Module } from '@nestjs/common';
import {ArsalanController} from "./arsalan.controller";
import {ArsalanService} from "./arsalan.service";

@Module({
    imports:[],
    controllers:[ArsalanController],
    providers:[ArsalanService],
})
export class ArsalanModule {}
