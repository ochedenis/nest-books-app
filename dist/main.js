"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_middleware_1 = require("./middleware/app.middleware");
const PORT = process.env.PORT || 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    new app_middleware_1.Middleware(app).init();
    await app.listen(PORT);
    console.log(`Listening on ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map