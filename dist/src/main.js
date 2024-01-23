"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
        logger: ['error', 'warn'],
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Resume API')
        .setDescription('Api docs for the resume api. Look and feel inspired by VS Code, my IDE of choice.')
        .setVersion('0.0.1')
        .build();
    const options = {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    };
    const document = swagger_1.SwaggerModule.createDocument(app, config, options);
    const customSwaggerOptions = {
        customSiteTitle: 'Resume REST API',
        customCssUrl: '/assets/swagger-custom.css',
        customJs: '/assets/swagger-custom.js',
    };
    swagger_1.SwaggerModule.setup('api-docs', app, document, customSwaggerOptions);
    app.enableCors({
        origin: true,
        allowedHeaders: [
            'Content-Type',
            'Origin',
            'X-Requested-With',
            'Accept',
            'Authorization',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    });
    await app.listen(3100);
}
bootstrap();
//# sourceMappingURL=main.js.map