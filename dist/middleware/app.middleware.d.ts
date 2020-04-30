import { INestApplication } from '@nestjs/common';
export declare class Middleware {
    private app;
    constructor(app: INestApplication);
    init(): void;
}
