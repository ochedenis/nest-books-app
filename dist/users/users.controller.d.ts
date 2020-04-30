import { UsersService } from './users.service';
import { User, UserDto } from './users.entity';
export declare class HomeUsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(): Promise<User[]>;
}
export declare class ApiUsersController {
    private usersService;
    constructor(usersService: UsersService);
    createUser(body: UserDto): Promise<User>;
}
