import { NestFactory } from '@nestjs/core';
import { prisma } from '@repo/db';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const user = await prisma.account.findFirst();
  console.log('🚀 ~ bootstrap ~ user:', user);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((error: unknown) => {
  if (error instanceof Error) {
    console.error('Failed to start application:', error.message);
  } else {
    console.error('Failed to start application:', error);
  }
  process.exit(1);
});
