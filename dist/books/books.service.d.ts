import { MongoRepository } from 'typeorm';
import { Book, BookDto } from './books.entity';
export declare class BooksService {
    private repository;
    constructor(repository: MongoRepository<Book>);
    findAll(): Promise<Book[]>;
    create(user: BookDto): Promise<Book>;
}
