import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.setGlobalPrefix('api/v1', {
    exclude: [{ path: 'sasas', method: RequestMethod.GET }],
  });

  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true,
      disableErrorMessages: true,
      transform: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
