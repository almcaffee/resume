import { Experience } from 'types';
import { LanguageService } from 'src/services/language.service';
import { BaseController } from './base.controller';
export declare class LanguageController extends BaseController {
    private readonly service;
    constructor(service: LanguageService);
    resetLanguageList(): Array<Experience>;
    getLanguageList(): Array<string>;
    getLanguage(id: string): Experience;
    getLanguages(): Array<Experience>;
    addLanguage(experience: Experience): Experience;
    updateLanguage(experience: Experience): Experience;
    deleteLanguage(id: number): string;
}
