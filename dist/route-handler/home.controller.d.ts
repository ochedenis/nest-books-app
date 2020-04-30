import { UsersService } from '../users/users.service';
export declare class HomeController {
    private usersService;
    constructor(usersService: UsersService);
    getBooks(): string;
    getUsers(): Promise<import("../users/users.entity").User[]>;
}
