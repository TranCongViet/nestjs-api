import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();
async function bootstrap() {
const app = await NestFactory.create(AppModule);

app.enableCors({
  origin: ['http://localhost:5173', 'https://trancongviet.github.io'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
});
  await app.listen(3000);
}
bootstrap();
