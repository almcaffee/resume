import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

export const corsConfig: CorsOptions = {
  origin: true,
  allowedHeaders: [
    'Content-Type',
    'Origin',
    'X-Requested-With',
    'Accept',
    'Authorization',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
};

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Resume API')
  .setDescription(
    'Api docs for the resume api. Look and feel inspired by VS Code, my IDE of choice.',
  )
  .setVersion('0.0.1')
  .build();

export const swaggerDocumentOptions: SwaggerDocumentOptions = {
  operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
};

export const customSwaggerOptions: SwaggerCustomOptions = {
  customSiteTitle: 'Resume REST API',
  customCssUrl: '/assets/swagger-custom.css',
  customJs: '/assets/swagger-custom.js',
};
