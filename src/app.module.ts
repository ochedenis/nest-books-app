import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { Book } from './books/books.entity';
import { User } from './users/users.entity';

const DB_URL = process.env.MONGODB_URI || 'mongodb://heroku_kz1q1qhs:ih7m2pjsoj9raj0kfcl17q7ita@ds041367.mlab.com:41367/heroku_kz1q1qhs';

@Module({
  imports: [
    UsersModule,
    BooksModule,
    TypeOrmModule.forRoot({ // TypeOrm connection config
      type: 'mongodb',
      url: DB_URL,
      database: 'heroku_kz1q1qhs',
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
