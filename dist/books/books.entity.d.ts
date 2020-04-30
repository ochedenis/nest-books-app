import { ObjectID } from 'typeorm';
declare class PublishedInfo {
    publisher: string;
    year: number;
}
export declare class Book {
    _id: ObjectID;
    blogpost: number;
    title: string;
    author: string;
    published: PublishedInfo;
}
export interface BookDto {
    blogpost: number;
    title: string;
    author: string;
    published: {
        publisher: string;
        year: number;
    };
}
export {};
