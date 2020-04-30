import { ObjectID } from 'typeorm';
export declare class User {
    _id: ObjectID;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    verified: boolean;
}
export interface UserDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    verified: boolean;
}
