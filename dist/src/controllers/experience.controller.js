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
exports.ExperienceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../../types/entities");
const base_controller_1 = require("./base.controller");
const experience_service_1 = require("../services/experience.service");
const dto_1 = require("../dto");
let ExperienceController = class ExperienceController extends base_controller_1.BaseController {
    constructor(service) {
        super();
        this.service = service;
    }
    getJobList(property, { showId }) {
        const { data, error } = this.service.getExperienceList(property, showId);
        if (error)
            throw new common_1.HttpException(error, 400);
        if (!data.length)
            throw new common_1.NotFoundException('Experience not found');
        return data;
    }
    getJob(id) {
        const data = this.service.getExperience(+id);
        if (!data)
            throw new common_1.NotFoundException(`Experience with id ${id} was not found`);
        return data;
    }
    getJobs() {
        const experience = this.service.getExperiences();
        if (!experience.length)
            throw new common_1.NotFoundException('Work experience not found');
        return experience;
    }
};
exports.ExperienceController = ExperienceController;
__decorate([
    (0, swagger_1.ApiTags)('experience'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a property of all positions as a list',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'showId',
        description: 'Return the id of the position',
        required: false,
        example: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: String,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 400,
        description: 'Bad request',
        schema: {
            example: {
                statusCode: 400,
                message: 'Bad request',
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
    (0, common_1.Get)('/experience/list/:type'),
    __param(0, (0, common_1.Param)('type')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.IsBooleanDto]),
    __metadata("design:returntype", Array)
], ExperienceController.prototype, "getJobList", null);
__decorate([
    (0, swagger_1.ApiTags)('experience'),
    (0, swagger_1.ApiOperation)({
        summary: 'Get a position by id',
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
    (0, common_1.Get)('/experience/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ExperienceController.prototype, "getJob", null);
__decorate([
    (0, swagger_1.ApiTags)('experience'),
    (0, swagger_1.ApiQuery)({
        name: 'end',
        description: 'The start date of the job',
        required: false,
        example: '2001-10-25',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'start',
        description: 'The start date of the job',
        required: false,
        example: '2001-10-25',
    }),
    (0, swagger_1.ApiQuery)({
        name: 'companyName',
        description: 'The name of the company',
        required: false,
        example: 'Amazon',
    }),
    (0, swagger_1.ApiOperation)({
        summary: 'Get all experience',
        parameters: [
            {
                name: 'start',
                in: 'query',
                description: 'The start date of the job',
                required: false,
                example: '2001-10-25',
            },
            {
                name: 'end',
                in: 'query',
                description: 'The end date of the job',
                required: false,
                example: '2005-07-16',
            },
            {
                name: 'companyName',
                in: 'query',
                description: 'The name of the company',
                required: false,
                example: 'Amazon',
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
    (0, common_1.Get)('/experience'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ExperienceController.prototype, "getJobs", null);
exports.ExperienceController = ExperienceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [experience_service_1.ExperienceService])
], ExperienceController);
//# sourceMappingURL=experience.controller.js.map