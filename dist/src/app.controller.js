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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const entities_1 = require("../types/entities");
const app_service_1 = require("./app.service");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getTesting() {
        return this.appService.getTesting();
    }
    getDevelopment() {
        return this.appService.getDevelopment();
    }
    getAgile() {
        return this.appService.getAgile();
    }
    getDevops() {
        return this.appService.getDevops();
    }
    getVersionControl() {
        return this.appService.getVersionControl();
    }
    getApis() {
        return this.appService.getApis();
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiTags)('testing'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeSkill,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: String,
    }),
    (0, common_1.Get)('/testing'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getTesting", null);
__decorate([
    (0, swagger_1.ApiTags)('development'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeSkill,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: String,
    }),
    (0, common_1.Get)('/development'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getDevelopment", null);
__decorate([
    (0, swagger_1.ApiTags)('agile'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeSkill,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: String,
    }),
    (0, common_1.Get)('/agile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getAgile", null);
__decorate([
    (0, swagger_1.ApiTags)('devops'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeSkill,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: String,
    }),
    (0, common_1.Get)('/devops'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getDevops", null);
__decorate([
    (0, swagger_1.ApiTags)('version-control'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeSkill,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: String,
    }),
    (0, common_1.Get)('/version-control'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getVersionControl", null);
__decorate([
    (0, swagger_1.ApiTags)('apis'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Successful operation',
        type: entities_1.ResumeSkill,
        isArray: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 401,
        description: 'Unauthorized',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'Not found',
        type: String,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Server error',
        type: String,
    }),
    (0, common_1.Get)('/apis'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], AppController.prototype, "getApis", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map