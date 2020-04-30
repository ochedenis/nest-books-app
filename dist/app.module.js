"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_module_1 = require("./users/users.module");
const books_module_1 = require("./books/books.module");
const books_entity_1 = require("./books/books.entity");
const users_entity_1 = require("./users/users.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            users_module_1.UsersModule,
            books_module_1.BooksModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mongodb',
                url: 'mongodb+srv://test_user_3000:XWw4h3Nvd6QR1ffn@testcluster-xa3oi.gcp.mongodb.net/test?retryWrites=true&w=majority',
                database: 'TestDB',
                logging: true,
                synchronize: true,
                useNewUrlParser: true,
                useUnifiedTopology: true,
                entities: [books_entity_1.Book, users_entity_1.User],
            })
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map