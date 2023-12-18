import {Injectable, Param} from '@nestjs/common';

@Injectable()
export class ArsalanService {

    async functionArsalan(){
        return {status: true, message: "Arsalan First Nest App"}
    }

    async postArsalan(){
        return {message:"Arsalan Post Message"}
    }

    async getVideos(param,param2){
        console.log(param,param2);
        return 'Success';
    }
}
