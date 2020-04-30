import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book, BookDto } from './books.entity';
import { JoiValidationPipe } from 'src/validation/validation.pipe';
import { bookSchema } from 'src/validation/books.schema';

@Controller()
export class HomeBooksController {
    constructor(
        private booksService: BooksService
    ) {}

    /**
     * /books get - returns list of all books
     *
     * @returns {Promise<Book[]>}
     * @memberof HomeBooksController
     */
    @Get('books')
    findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }
}

@Controller('api')
export class ApiBooksController {
    constructor(
        private booksService: BooksService
    ) {}

    /**
     * /api/books post - add a new book to db
     *
     * @param {BookDto} book
     * @returns {Promise<Book>}
     * @memberof ApiBooksController
     */
    @Post('books')
    @UsePipes(new JoiValidationPipe(bookSchema)) // adds validation logic to current method
    async create(@Body() book: BookDto): Promise<Book> {
        return await this.booksService.create(book);
    }
}
