import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { SwaggerCustomOptions, SwaggerDocumentOptions } from '@nestjs/swagger';
export declare const corsConfig: CorsOptions;
export declare const swaggerConfig: Omit<import("@nestjs/swagger").OpenAPIObject, "paths">;
export declare const swaggerDocumentOptions: SwaggerDocumentOptions;
export declare const customSwaggerOptions: SwaggerCustomOptions;
