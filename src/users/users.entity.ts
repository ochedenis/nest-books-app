import { Entity, ObjectID, ObjectIdColumn, Column } from 'typeorm';

/**
 * typeorm entity(scheme) for db
 *
 * @export
 * @class User
 */
@Entity()
export class User {
    @ObjectIdColumn()
    _id:ObjectID;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    isAdmin: boolean;

    @Column()
    verified: boolean;
}

/**
 * dto for user object at post method
 *
 * @export
 * @interface UserDto
 */
export interface UserDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    isAdmin: boolean;
    verified: boolean;
}
