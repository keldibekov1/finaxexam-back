import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCommentDto) {
    const blogId = await this.prisma.blog.findFirst({
      where: { id: data.blogId },
    });
    if (!blogId) {
      throw new NotFoundException('blog topilmadi');
    }
    return this.prisma.comment.create({
      data: data,
    });
  }

  async findAll(blogId?: string) {
    return this.prisma.comment.findMany({
      where: blogId ? { blogId } : undefined,
      include: {
        blog: {
          select: { title: true },
        },
      },
      orderBy: { id: 'desc' },
    });
  }

  findOne(id: string) {
    return this.prisma.comment.findUnique({
      where: { id },
    });
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });
  }

  remove(id: string) {
    return this.prisma.comment.delete({
      where: { id },
    });
  }
}
