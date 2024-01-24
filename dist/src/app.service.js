"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const experience_1 = require("../db/data/experience");
let AppService = class AppService {
    constructor() {
        this.apis = experience_1.api;
        this.testing = experience_1.test;
        this.development = experience_1.development;
        this.agile = experience_1.agile;
        this.devops = experience_1.devops;
        this.versionControl = experience_1.versionControl;
    }
    getHello() {
        return 'Hello World!';
    }
    getTesting() {
        return this.testing;
    }
    getDevelopment() {
        return this.development;
    }
    getAgile() {
        return this.agile;
    }
    getDevops() {
        return this.devops;
    }
    getVersionControl() {
        return this.versionControl;
    }
    getApis() {
        return this.apis;
    }
    getAll() {
        return [
            ...this.testing,
            ...this.development,
            ...this.agile,
            ...this.devops,
            ...this.versionControl,
            ...this.apis,
        ];
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map