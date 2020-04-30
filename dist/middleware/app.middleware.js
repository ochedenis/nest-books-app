"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const compression = require("compression");
const cors = require("cors");
const helmet = require("helmet");
class Middleware {
    constructor(app) {
        this.app = app;
    }
    init() {
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use((_, res, next) => {
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS ');
            res.header('Access-Control-Allow-Credentials', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,'
                + ' Content-Type, Accept,'
                + ' Authorization,'
                + ' Access-Control-Allow-Credentials');
            next();
        });
    }
}
exports.Middleware = Middleware;
//# sourceMappingURL=app.middleware.js.map