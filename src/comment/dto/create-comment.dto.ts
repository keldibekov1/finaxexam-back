import { IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';
export class CreateCommentDto {

    @ApiProperty()
    @IsString()
    message: string;

    @ApiProperty()
    @IsString()
    blogId: string;
}


