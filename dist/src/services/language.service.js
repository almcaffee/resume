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
exports.LanguageService = void 0;
const common_1 = require("@nestjs/common");
const experience_1 = require("../../db/data/experience");
let LanguageService = class LanguageService {
    get languages() {
        return this.languageList;
    }
    set languages(languages) {
        this.languageList = languages;
        this.languageMap = new Map();
        this.updateLanguageMap();
    }
    constructor() {
        this.languageList = experience_1.languages;
    }
    addLanguage(language) {
        const error = this.validateLanguage(language);
        if (error)
            return { error, data: null };
        const newLanguage = { ...language, id: this.languageList.length };
        this.languageList.push(newLanguage);
        this.updateLanguageMap();
        return { error: null, data: newLanguage };
    }
    findLanguage(id) {
        const item = this.validateLanguageExists(id);
        if (!item)
            return;
        return item;
    }
    getLanguage(id) {
        return this.languageMap.get(id);
    }
    getLanguages(params) {
        return this.filterLanguages(params);
    }
    getLanguageNames() {
        return Array.from(new Set(this.languages.map((fw) => fw.name)));
    }
    filterLanguages(params) {
        if (!params)
            return this.languages;
        const { level, frequency, name } = params;
        return this.languages.filter((language) => {
            if (level && language.level !== level)
                return false;
            if (frequency && language.usageFrequency !== frequency)
                return false;
            if (name && !language.name.includes(name))
                return false;
            return true;
        });
    }
    removeLanguage(id) {
        const item = this.validateLanguageExists(id);
        if (!item)
            return { error: `Language with id ${id} not found`, data: null };
        if (this.languages.length === 1)
            return {
                error: 'Cannot remove the last language',
                data: null,
                refuse: true,
            };
        const [deletedLanguage] = this.languageList.splice(this.languages.indexOf(item), 1);
        this.updateLanguageMap();
        return {
            error: null,
            data: `${deletedLanguage.name} successfully deleted`,
        };
    }
    resetLanguages() {
        this.languages = experience_1.languages;
        this.updateLanguageMap();
        return this.languages;
    }
    updateLanguage(id, language) {
        let item = this.validateLanguageExists(id);
        if (!item)
            return { error: 'Language not found', data: null };
        item = {
            ...item,
            ...language,
            id,
        };
        this.updateLanguageMap();
        return { error: null, data: item };
    }
    updateLanguageMap() {
        this.languageMap.clear();
        this.languages.forEach((language) => {
            this.languageMap.set(language.id, language);
        });
    }
    validateLanguageExists(id) {
        return this.languageMap.get(id) ?? undefined;
    }
    validateLanguage(language) {
        const { id, name, description, lastUsedAt } = language;
        if (!name)
            return 'Language name is required';
        if (!description)
            return 'Language description is required';
        if (!id)
            return 'Language id is required';
        if (!lastUsedAt?.length)
            return 'Language last used at is required';
        return;
    }
};
exports.LanguageService = LanguageService;
exports.LanguageService = LanguageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], LanguageService);
//# sourceMappingURL=language.service.js.map