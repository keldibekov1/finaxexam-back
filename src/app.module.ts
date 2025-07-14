import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CommentModule } from './comment/comment.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [PrismaModule, CommentModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
