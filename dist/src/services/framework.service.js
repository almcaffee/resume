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
exports.FrameworkService = void 0;
const common_1 = require("@nestjs/common");
const experience_1 = require("../../db/data/experience");
let FrameworkService = class FrameworkService {
    get frameworks() {
        return this.frameworkList;
    }
    set frameworks(frameworks) {
        this.frameworkList = frameworks;
        this.frameworkMap = new Map();
        this.updateFrameworkMap();
    }
    constructor() {
        this.frameworkList = experience_1.frameworks;
    }
    addFramework(framework) {
        const error = this.validateFramework(framework);
        if (error)
            return { error, data: null };
        const newFramework = { ...framework, id: this.frameworkList.length };
        this.frameworkList.push(newFramework);
        this.updateFrameworkMap();
        return { error: null, data: newFramework };
    }
    findFramework(id) {
        const item = this.validateFrameworkExists(id);
        if (!item)
            return;
        return item;
    }
    getFramework(id) {
        return this.frameworkMap.get(id);
    }
    getFrameworks(params) {
        return this.filterFrameworks(params);
    }
    getFrameworkNames() {
        return Array.from(new Set(this.frameworks.map((fw) => fw.name)));
    }
    filterFrameworks(params) {
        if (!params)
            return this.frameworks;
        const { level, frequency, name } = params;
        return this.frameworks.filter((framework) => {
            if (level && framework.level !== level)
                return false;
            if (frequency && framework.usageFrequency !== frequency)
                return false;
            if (name && !framework.name.includes(name))
                return false;
            return true;
        });
    }
    removeFramework(id) {
        const item = this.validateFrameworkExists(id);
        if (!item)
            return { error: `Framework with id ${id} not found`, data: null };
        if (this.frameworks.length === 1)
            return {
                error: 'Cannot remove the last framework',
                data: null,
                refuse: true,
            };
        const [deletedFramework] = this.frameworkList.splice(this.frameworks.indexOf(item), 1);
        this.updateFrameworkMap();
        return {
            error: null,
            data: `${deletedFramework.name} successfully deleted`,
        };
    }
    resetFrameworks() {
        this.frameworks = experience_1.frameworks;
        this.updateFrameworkMap();
        return this.frameworks;
    }
    updateFramework(id, framework) {
        let item = this.validateFrameworkExists(id);
        if (!item)
            return { error: 'Framework not found', data: null };
        item = {
            ...item,
            ...framework,
            id,
        };
        this.updateFrameworkMap();
        return { error: null, data: item };
    }
    updateFrameworkMap() {
        this.frameworkMap.clear();
        this.frameworks.forEach((framework) => {
            this.frameworkMap.set(framework.id, framework);
        });
    }
    validateFrameworkExists(id) {
        return this.frameworkMap.get(id) ?? undefined;
    }
    validateFramework(framework) {
        const { id, name, description, lastUsedAt } = framework;
        if (!name)
            return 'Framework name is required';
        if (!description)
            return 'Framework description is required';
        if (!id)
            return 'Framework id is required';
        if (!lastUsedAt?.length)
            return 'Framework last used at is required';
        return;
    }
};
exports.FrameworkService = FrameworkService;
exports.FrameworkService = FrameworkService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], FrameworkService);
//# sourceMappingURL=framework.service.js.map