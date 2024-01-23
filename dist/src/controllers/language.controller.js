"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../../types/entities");
const language_service_1 = require("../services/language.service");
const base_controller_1 = require("./base.controller");
let LanguageController = class LanguageController extends base_controller_1.BaseController {
    constructor(service) {
        super();
        this.service = service;
    }
    resetLanguageList() {
        return this.service.resetLanguages();
    }
    getLanguageList() {
        const data = this.service.getLanguageNames();
        if (!data.length)
            throw new common_1.NotFoundException('Languages not found');
        return data;
    }
    getLanguage(id) {
        const data = this.service.getLanguage(+id);
        if (!data?.length)
            throw new common_1.NotFoundException(`Language with id ${id} was not found`);
        return data;
    }
    getLanguages() {
        const languages = this.service.getLanguages();
        if (!languages.length)
            throw new common_1.NotFoundException('Languages not found');
        return languages;
    }
    addLanguage(experience) {
        const { data, error } = this.service.addLanguage(experience);
        if (error)
            throw new common_1.HttpException(error, 400);
        return data;
    }
    updateLanguage(experience) {
        const { data, error } = this.service.addLanguage(experience);
        if (error)
            throw new common_1.HttpException(error, 400);
        return data;
    }
    deleteLanguage(id) {
        const { data, error, refuse } = this.service.removeLanguage(id);
        if (error)
            throw new common_1.HttpException(error, 404);
        if (refuse)
            throw new common_1.HttpException(error, 403);
        return data;
    }
};
exports.LanguageController = LanguageController;
__decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, swagger_1.ApiOperation)({
        summary: 'Set languages to the default state',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: String,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                statusCode: 401,
                message: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: entities_1.UnhandledException,
    }),
    (0, common_1.Post)('/languages/reset'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LanguageController.prototype, "resetLanguageList", null);
__decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a list of language names',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: String,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                statusCode: 401,
                message: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: entities_1.UnhandledException,
    }),
    (0, common_1.Get)('/languages/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LanguageController.prototype, "getLanguageList", null);
__decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a language by id',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeExperience,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                statusCode: 401,
                message: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        schema: {
            example: {
                statusCode: 401,
                message: 'Not found',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: entities_1.UnhandledException,
    }),
    (0, common_1.Get)('/languages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], LanguageController.prototype, "getLanguage", null);
__decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, swagger_1.ApiQuery)({
        name: 'level',
        description: 'The competency level of the language',
        required: false,
        schema: {
            enum: [
                'None',
                'Followed examples in the docs',
                'Beginner',
                'Intermediate',
                'Advanced',
                'Expert',
            ],
        },
        example: 'Expert',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'frequency',
        description: 'The frequency of use of the language',
        required: false,
        schema: {
            enum: [
                'Back to the drawing board',
                'Its been a while',
                'I use it occasionally',
                'Previous position',
                'Current position',
                'This application',
            ],
        },
        example: 'Current position',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'name',
        description: 'The name of the language',
        required: false,
        example: 'TypeScript',
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all languages',
        parameters: [
            {
                name: 'level',
                in: 'query',
                description: 'The competency level of the language',
                required: false,
                schema: {
                    enum: [
                        'None',
                        'Followed examples in the docs',
                        'Beginner',
                        'Intermediate',
                        'Advanced',
                        'Expert',
                    ],
                },
                example: 'Expert',
            },
            {
                name: 'frequency',
                in: 'query',
                description: 'The frequency of use of the language',
                required: false,
                schema: {
                    enum: [
                        'Back to the drawing board',
                        'Its been a while',
                        'I use it occasionally',
                        'Previous position',
                        'Current position',
                        'This application',
                    ],
                },
                example: 'Current position',
            },
            {
                name: 'name',
                in: 'query',
                description: 'The name of the language',
                required: false,
                example: 'TypeScript',
            },
        ],
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeExperience,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                statusCode: 401,
                message: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        schema: {
            example: {
                statusCode: 401,
                message: 'Not found',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: entities_1.UnhandledException,
    }),
    (0, common_1.Get)('/languages'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], LanguageController.prototype, "getLanguages", null);
__decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add a language',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeExperience,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
        schema: {
            example: {
                statusCode: 400,
                message: 'The request is invalid',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                statusCode: 401,
                message: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: entities_1.UnhandledException,
    }),
    (0, common_1.Post)('/languages'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LanguageController.prototype, "addLanguage", null);
__decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a language',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeExperience,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
        schema: {
            example: {
                statusCode: 400,
                message: 'The request is invalid',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                statusCode: 401,
                message: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: entities_1.UnhandledException,
    }),
    (0, common_1.Put)('/languages'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], LanguageController.prototype, "updateLanguage", null);
__decorate([
    (0, swagger_1.ApiTags)('languages'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a language',
    }),
    (0, swagger_1.ApiResponse)({
        status: 204,
        description: 'Successful operation',
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        schema: {
            example: {
                statusCode: 401,
                message: 'Unauthorized',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'Refused request',
        schema: {
            example: {
                statusCode: 403,
                message: 'The requested action is denied',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: entities_1.UnhandledException,
    }),
    (0, common_1.Delete)('/languages/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], LanguageController.prototype, "deleteLanguage", null);
exports.LanguageController = LanguageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageController);
//# sourceMappingURL=language.controller.js.map