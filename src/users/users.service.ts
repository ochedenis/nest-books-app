import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User, UserDto } from './users.entity';

/**
 * adds simple logic to current module,
 * interacts with db
 *
 * @export
 * @class UsersService
 */
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private repository: MongoRepository<User>
    ) {}

    findAll(): Promise<User[]> {
        return this.repository.find();
    }

    create(user: UserDto): Promise<User> {
        return this.repository.save(user);
    }
}
