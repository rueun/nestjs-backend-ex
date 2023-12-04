import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('My Project')
    .setDescription('My Project API')
    .setVersion('0.0.1') // 이거 실제 플젝에서는 `package.json` 에서 가져올거임
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
