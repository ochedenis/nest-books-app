import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { HomeUsersController, ApiUsersController } from './users.controller';

/**
 * export all dependencies from users module to root module
 *
 * @export
 * @class UsersModule
 */
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [HomeUsersController, ApiUsersController]
})
export class UsersModule {}
