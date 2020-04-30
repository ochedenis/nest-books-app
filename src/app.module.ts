import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/books.entity';
import { User } from './users/users.entity';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    TypeOrmModule.forRoot({ // TypeOrm connection config
      type: 'mongodb',
      url: 'mongodb+srv://test_user_3000:XWw4h3Nvd6QR1ffn@testcluster-xa3oi.gcp.mongodb.net/test?retryWrites=true&w=majority',
      database: 'TestDB',
      logging: true,
      synchronize: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [Book, User],
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
