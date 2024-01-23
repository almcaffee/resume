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
exports.ExperienceService = void 0;
const common_1 = require("@nestjs/common");
const experience_1 = require("../../db/data/experience");
let ExperienceService = class ExperienceService {
    get jobs() {
        return this.jobList;
    }
    set jobs(jobs) {
        this.jobList = jobs;
    }
    constructor() {
        this.jobMap = new Map();
        this.jobList = experience_1.jobs;
        this.updateExperienceMap();
    }
    findExperience(id) {
        const item = this.jobMap.get(id);
        if (!item)
            return;
        return item;
    }
    getExperience(id) {
        return this.jobMap.get(id);
    }
    getExperiences(params) {
        return this.filterExperiences(params);
    }
    getExperienceList(property, showId) {
        if (!Object.keys(this.jobs[0]).includes(property)) {
            return {
                error: `Property ${property} does not exist on typeof experience`,
                data: null,
            };
        }
        const key = property ?? 'title';
        const data = showId
            ? this.jobs.map((fw) => ({ id: fw.id, [key]: fw[key] }))
            : this.jobs.map((fw) => fw[key]);
        return {
            error: null,
            data,
        };
    }
    filterExperiences(params) {
        if (!params)
            return this.jobs;
        const { start, end, company } = params;
        return this.jobs.filter((job) => {
            if (start && end) {
                if (job.start > end || job.ended < start)
                    return false;
            }
            if (start)
                return job.ended < start;
            if (end)
                return job.start > end;
            if (company &&
                !job.companyName.toLowerCase().includes(company.toLowerCase()))
                return false;
            return true;
        });
    }
    updateExperienceMap() {
        this.jobMap?.clear?.();
        this.jobs.forEach((job) => {
            this.jobMap.set(job.id, job);
        });
    }
};
exports.ExperienceService = ExperienceService;
exports.ExperienceService = ExperienceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ExperienceService);
//# sourceMappingURL=experience.service.js.map