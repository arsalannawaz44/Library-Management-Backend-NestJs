import {Controller, Get, Param, Post} from '@nestjs/common';
import {ArsalanService} from "./arsalan.service";

@Controller('arsalan')
export class ArsalanController {

    constructor(private readonly ArsalanService:ArsalanService) {
    }
    @Get("/arsalan")
    async arsalan(){
        return await this.ArsalanService.functionArsalan();
    }
    @Post("/arsalanPost")
    async arsalanPost(){
        return await this.ArsalanService.postArsalan();
    }
    @Get("/video/:id/:name")
    async getVideo(@Param('id') param: number,@Param('name') param2: string){
        return await this.ArsalanService.getVideos(param,param2);
    }
}
