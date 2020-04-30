import { Controller, Get, Post, Body, UsePipes } from '@nestjs/common';
import { UsersService } from './users.service';
import { User, UserDto } from './users.entity';
import { JoiValidationPipe } from 'src/validation/validation.pipe';
import { userSchema } from 'src/validation/users.schema';

@Controller()
export class HomeUsersController {
    constructor(
        private usersService: UsersService
    ) {}

    /**
     * /users get - returns list of all users
     * 
     * @returns {Promise<User[]>}
     * @memberof HomeUsersController
     */
    @Get('users')
    getUsers(): Promise<User[]> {
        return this.usersService.findAll();
    }
}

@Controller('api')
export class ApiUsersController {
    constructor(
        private usersService: UsersService
    ) {}

    /**
     * /api/users post - create a new user
     *
     * @param {UserDto} body
     * @returns {Promise<User>}
     * @memberof ApiUsersController
     */
    @Post('users')
    @UsePipes(new JoiValidationPipe(userSchema)) // adds validation logic to current method
    async createUser(@Body() body: UserDto): Promise<User> {
        return await this.usersService.create(body);
    }
}
