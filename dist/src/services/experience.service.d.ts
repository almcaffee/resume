import { Bullet, Position, ServiceResponse } from 'types';
export declare class ExperienceService {
    private jobList;
    private jobMap;
    private get jobs();
    private set jobs(value);
    constructor();
    findExperience(id: number): Position | void;
    getExperience(id: number): Position;
    getExperiences(params?: {
        start?: Date;
        end?: Date;
        company?: string;
    }): Array<Position>;
    getExperienceList(property?: string, showId?: boolean): ServiceResponse<Array<string> | Array<{
        [key: string]: string | number | Array<Bullet>;
    }>>;
    filterExperiences(params: {
        start?: Date;
        end?: Date;
        company?: string;
    }): Array<Position>;
    updateExperienceMap(): void;
}
