import { BooksService } from './books.service';
import { Book, BookDto } from './books.entity';
export declare class HomeBooksController {
    private booksService;
    constructor(booksService: BooksService);
    findAll(): Promise<Book[]>;
}
export declare class ApiBooksController {
    private booksService;
    constructor(booksService: BooksService);
    create(book: BookDto): Promise<Book>;
}
