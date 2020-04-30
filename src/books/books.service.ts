import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Book, BookDto } from './books.entity';

/**
 * adds simple logic to current module,
 * interacts with db
 *
 * @export
 * @class BooksService
 */
@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private repository: MongoRepository<Book>
    ) {}

    findAll(): Promise<Book[]> {
        return this.repository.find();
    }

    create(user: BookDto): Promise<Book> {
        return this.repository.save(user);
    }
}
