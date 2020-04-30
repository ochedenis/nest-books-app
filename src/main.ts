import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Middleware } from './middleware/app.middleware';
const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // create app with root module dependencies
  new Middleware(app).init(); // initialize app middleware

  await app.listen(PORT);
  console.log(`Listening on ${ PORT }`);
}

bootstrap();
