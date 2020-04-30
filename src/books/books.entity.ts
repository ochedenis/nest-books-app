import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

/**
 * inner class object for book entity
 *
 * @class PublishedInfo
 */
class PublishedInfo {
    @Column()
    publisher: string;

    @Column()
    year: number;
}

/**
 * typeorm entity(scheme) for db
 *
 * @export
 * @class Book
 */
@Entity()
export class Book {
    @ObjectIdColumn()
    _id:ObjectID;
    
    @Column()
    blogpost: number;

    @Column()
    title: string;

    @Column()
    author: string;

    @Column(type => PublishedInfo)
    published: PublishedInfo;
}

/**
 * dto for book object at post method
 *
 * @export
 * @interface BookDto
 */
export interface BookDto {
    blogpost: number;
    title: string;
    author: string;
    published: {
        publisher: string;
        year: number;
    }
}