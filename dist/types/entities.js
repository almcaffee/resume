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
exports.UnhandledException = exports.HandledException = exports.BaseException = exports.ResumeExperience = exports.ResumeSkill = exports.BaseDetail = void 0;
const swagger_1 = require("@nestjs/swagger");
class BaseDetail {
}
exports.BaseDetail = BaseDetail;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BaseDetail.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BaseDetail.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BaseDetail.prototype, "description", void 0);
class ResumeSkill extends BaseDetail {
}
exports.ResumeSkill = ResumeSkill;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ResumeSkill.prototype, "yearsOfExperience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'Back to the drawing board',
            'Its been a while',
            'I use it occasionally',
            'Previous position',
            'Current position',
            'This application',
        ],
    }),
    __metadata("design:type", String)
], ResumeSkill.prototype, "usageFrequency", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ResumeSkill.prototype, "usedAt", void 0);
class ResumeExperience extends ResumeSkill {
}
exports.ResumeExperience = ResumeExperience;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResumeExperience.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResumeExperience.prototype, "lastUsedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], ResumeExperience.prototype, "lastUsedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: [
            'None',
            'Did the tutorial',
            'Beginner',
            'Intermediate',
            'Advanced',
            'Expert',
        ],
    }),
    __metadata("design:type", String)
], ResumeExperience.prototype, "level", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ResumeExperience.prototype, "firstExperience", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ResumeExperience.prototype, "relatedSkills", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ResumeExperience.prototype, "positionsUsed", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], ResumeExperience.prototype, "positions", void 0);
class BaseException {
}
exports.BaseException = BaseException;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], BaseException.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], BaseException.prototype, "message", void 0);
class HandledException extends BaseException {
}
exports.HandledException = HandledException;
class UnhandledException extends BaseException {
}
exports.UnhandledException = UnhandledException;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], UnhandledException.prototype, "error", void 0);
//# sourceMappingURL=entities.js.map