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
exports.FrameworkController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../../types/entities");
const framework_service_1 = require("../services/framework.service");
const base_controller_1 = require("./base.controller");
let FrameworkController = class FrameworkController extends base_controller_1.BaseController {
    constructor(service) {
        super();
        this.service = service;
    }
    resetFrameworkList() {
        return this.service.resetFrameworks();
    }
    getFrameworkList() {
        const data = this.service.getFrameworkNames();
        if (!data.length)
            throw new common_1.NotFoundException('Frameworks not found');
        return data;
    }
    getFramework(id) {
        const data = this.service.getFramework(+id);
        if (!data?.length)
            throw new common_1.NotFoundException(`Framework with id ${id} was not found`);
        return data;
    }
    getFrameworks() {
        const frameworks = this.service.getFrameworks();
        if (!frameworks.length)
            throw new common_1.NotFoundException('Frameworks not found');
        return frameworks;
    }
    addFramework(experience) {
        const { data, error } = this.service.addFramework(experience);
        if (error)
            throw new common_1.HttpException(error, 400);
        return data;
    }
    updateFramework(experience) {
        const { data, error } = this.service.addFramework(experience);
        if (error)
            throw new common_1.HttpException(error, 400);
        return data;
    }
    deleteFramework(id) {
        const { data, error, refuse } = this.service.removeFramework(id);
        if (error)
            throw new common_1.HttpException(error, 404);
        if (refuse)
            throw new common_1.HttpException(error, 403);
        return data;
    }
};
exports.FrameworkController = FrameworkController;
__decorate([
    (0, swagger_1.ApiTags)('frameworks'),
    (0, swagger_1.ApiOperation)({
        summary: 'Set frameworks to the default state',
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
    (0, common_1.Post)('/frameworks/reset'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], FrameworkController.prototype, "resetFrameworkList", null);
__decorate([
    (0, swagger_1.ApiTags)('frameworks'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a list of framework names',
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
    (0, common_1.Get)('/frameworks/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], FrameworkController.prototype, "getFrameworkList", null);
__decorate([
    (0, swagger_1.ApiTags)('frameworks'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a framework by id',
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
    (0, common_1.Get)('/frameworks/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], FrameworkController.prototype, "getFramework", null);
__decorate([
    (0, swagger_1.ApiTags)('frameworks'),
    (0, swagger_1.ApiQuery)({
        name: 'level',
        description: 'The competency level of the framework',
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
        description: 'The frequency of use of the framework',
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
        description: 'The name of the framework',
        required: false,
        example: 'TypeScript',
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all frameworks',
        parameters: [
            {
                name: 'level',
                in: 'query',
                description: 'The competency level of the framework',
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
                description: 'The frequency of use of the framework',
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
                description: 'The name of the framework',
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
    (0, common_1.Get)('/frameworks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], FrameworkController.prototype, "getFrameworks", null);
__decorate([
    (0, swagger_1.ApiTags)('frameworks'),
    (0, swagger_1.ApiOperation)({
        summary: 'Add a framework',
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
    (0, common_1.Post)('/frameworks'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FrameworkController.prototype, "addFramework", null);
__decorate([
    (0, swagger_1.ApiTags)('frameworks'),
    (0, swagger_1.ApiOperation)({
        summary: 'Update a framework',
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
    (0, common_1.Put)('/frameworks'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], FrameworkController.prototype, "updateFramework", null);
__decorate([
    (0, swagger_1.ApiTags)('frameworks'),
    (0, swagger_1.ApiOperation)({
        summary: 'Delete a framework',
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
    (0, common_1.Delete)('/frameworks/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", String)
], FrameworkController.prototype, "deleteFramework", null);
exports.FrameworkController = FrameworkController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [framework_service_1.FrameworkService])
], FrameworkController);
//# sourceMappingURL=framework.controller.js.map