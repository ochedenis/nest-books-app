import { MongoRepository } from 'typeorm';
import { User, UserDto } from './users.entity';
export declare class UsersService {
    private repository;
    constructor(repository: MongoRepository<User>);
    findAll(): Promise<User[]>;
    create(user: UserDto): Promise<User>;
}
