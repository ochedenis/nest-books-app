"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const validation_pipe_1 = require("../validation/validation.pipe");
const books_schema_1 = require("../validation/books.schema");
let HomeBooksController = class HomeBooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    findAll() {
        return this.booksService.findAll();
    }
};
__decorate([
    common_1.Get('books'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], HomeBooksController.prototype, "findAll", null);
HomeBooksController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], HomeBooksController);
exports.HomeBooksController = HomeBooksController;
let ApiBooksController = class ApiBooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    async create(book) {
        return await this.booksService.create(book);
    }
};
__decorate([
    common_1.Post('books'),
    common_1.UsePipes(new validation_pipe_1.JoiValidationPipe(books_schema_1.bookSchema)),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApiBooksController.prototype, "create", null);
ApiBooksController = __decorate([
    common_1.Controller('api'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], ApiBooksController);
exports.ApiBooksController = ApiBooksController;
//# sourceMappingURL=books.controller.js.map