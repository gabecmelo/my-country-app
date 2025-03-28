import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('APP RUNNING ON PORT:', process.env.PUBLIC_BACKEND_PORT ?? 3000);
  await app.listen(process.env.PUBLIC_BACKEND_PORT ?? 3000);
}
bootstrap();
