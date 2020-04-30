import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksService } from './books.service';
import { HomeBooksController, ApiBooksController } from './books.controller';
import { Book } from './books.entity';

/**
 * export all dependencies from books module to root module
 *
 * @export
 * @class BooksModule
 */
@Module({
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
  controllers: [HomeBooksController, ApiBooksController]
})
export class BooksModule {}
