import { NestFactory } from '@nestjs/core';
import { prisma } from '@repo/db';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const user = await prisma.user.findFirst();
  console.log('🚀 ~ bootstrap ~ user:', user);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
