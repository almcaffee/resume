"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customSwaggerOptions = exports.swaggerDocumentOptions = exports.swaggerConfig = exports.corsConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.corsConfig = {
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
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle('Resume API')
    .setDescription('Api docs for the resume api. Look and feel inspired by VS Code, my IDE of choice.')
    .setVersion('0.0.1')
    .build();
exports.swaggerDocumentOptions = {
    operationIdFactory: (controllerKey, methodKey) => methodKey,
};
exports.customSwaggerOptions = {
    customSiteTitle: 'Resume REST API',
    customCssUrl: '/assets/swagger-custom.css',
    customJs: '/assets/swagger-custom.js',
};
//# sourceMappingURL=static.js.map