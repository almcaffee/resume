import { CompetencyLevel, Experience, ServiceResponse, UsageFrequency } from 'types';
export declare class LanguageService {
    private languageList;
    private languageMap;
    private get languages();
    private set languages(value);
    constructor();
    addLanguage(language: Experience): ServiceResponse<Experience>;
    findLanguage(id: number): Experience | void;
    getLanguage(id: number): Experience;
    getLanguages(params?: {
        level?: CompetencyLevel;
        frequency?: UsageFrequency;
        name?: string;
    }): Array<Experience>;
    getLanguageNames(): Array<string>;
    filterLanguages(params: {
        level?: CompetencyLevel;
        frequency?: UsageFrequency;
        name?: string;
    }): Array<Experience>;
    removeLanguage(id: number): ServiceResponse<string>;
    resetLanguages(): Array<Experience>;
    updateLanguage(id: number, language: Experience): ServiceResponse<Experience>;
    updateLanguageMap(): void;
    validateLanguageExists(id: number): Experience | undefined;
    validateLanguage(language: Experience): void | string;
}
