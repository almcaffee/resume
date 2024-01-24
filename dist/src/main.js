"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe());
    const document = swagger_1.SwaggerModule.createDocument(app, config_1.swaggerConfig, config_1.swaggerDocumentOptions);
    swagger_1.SwaggerModule.setup('api-docs', app, document, config_1.customSwaggerOptions);
    app.enableCors(config_1.corsConfig);
    await app.listen(3100);
}
bootstrap();
//# sourceMappingURL=main.js.map