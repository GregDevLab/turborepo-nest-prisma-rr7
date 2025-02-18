import { NestFactory } from '@nestjs/core';
import { PrismaClient } from '@prisma/client';
import { AppModule } from './app.module';

const prisma = new PrismaClient();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const user = await prisma.user.findFirst();
  console.log('🚀 ~ bootstrap ~ user:', user);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
