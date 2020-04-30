import { INestApplication } from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as helmet from 'helmet';

export class Middleware {

    constructor(private app: INestApplication) {}

    public init(): void {
        // returns the compression middleware
        this.app.use(compression());
        // helps you secure your Express apps by setting various HTTP headers
        this.app.use(helmet());
        // providing a Connect/Express middleware that
        // can be used to enable CORS with various options
        this.app.use(cors());
        //cors
        this.app.use((_: Request, res: Response, next: NextFunction): void => {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
            res.header('Access-Control-Allow-Credentials', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With,'
                + ' Content-Type, Accept,'
                + ' Authorization,'
                + ' Access-Control-Allow-Credentials',
            );
            next();
        });
    }
}
