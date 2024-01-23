import { CompetencyLevel, Experience, ServiceResponse, UsageFrequency } from 'types';
export declare class FrameworkService {
    private frameworkList;
    private frameworkMap;
    private get frameworks();
    private set frameworks(value);
    constructor();
    addFramework(framework: Experience): ServiceResponse<Experience>;
    findFramework(id: number): Experience | void;
    getFramework(id: number): Experience;
    getFrameworks(params?: {
        level?: CompetencyLevel;
        frequency?: UsageFrequency;
        name?: string;
    }): Array<Experience>;
    getFrameworkNames(): Array<string>;
    filterFrameworks(params: {
        level?: CompetencyLevel;
        frequency?: UsageFrequency;
        name?: string;
    }): Array<Experience>;
    removeFramework(id: number): ServiceResponse<string>;
    resetFrameworks(): Array<Experience>;
    updateFramework(id: number, framework: Experience): ServiceResponse<Experience>;
    updateFrameworkMap(): void;
    validateFrameworkExists(id: number): Experience | undefined;
    validateFramework(framework: Experience): void | string;
}
