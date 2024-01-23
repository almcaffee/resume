import { CompetencyLevel, UsageFrequency } from 'types';
export declare class BaseDetail {
    id: number;
    name: string;
    description?: string;
}
export declare class ResumeSkill extends BaseDetail {
    yearsOfExperience: number;
    usageFrequency?: UsageFrequency;
    usedAt?: Array<string>;
}
export declare class ResumeExperience extends ResumeSkill {
    category?: string;
    lastUsedAt: string;
    lastUsedDate?: Date;
    level?: CompetencyLevel;
    firstExperience?: string;
    relatedSkills?: Array<string>;
    positionsUsed?: Array<string>;
    positions?: Array<string>;
}
export declare class BaseException {
    statusCode: number;
    message: string;
}
export declare class HandledException extends BaseException {
}
export declare class UnhandledException extends BaseException {
    error: string;
}
