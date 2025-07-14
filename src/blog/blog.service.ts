import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBlogDto) {
    return this.prisma.blog.create({
      data,
    });
  }

  findAll() {
    return this.prisma.blog.findMany();
  }

  findOne(id: string) {
    return this.prisma.blog.findUnique({
      where: { id },
    });
  }

  update(id: string, updateBlogDto: UpdateBlogDto) {
    return this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
  }

  remove(id: string) {
    return this.prisma.blog.delete({
      where: { id },
    });
  }
}
