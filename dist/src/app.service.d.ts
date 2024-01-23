import { Skill } from 'types';
export declare class AppService {
    private readonly languages;
    private readonly apis;
    private readonly testing;
    private readonly development;
    private readonly agile;
    private readonly devops;
    private readonly versionControl;
    getHello(): string;
    getTesting(): Array<Skill>;
    getDevelopment(): Array<Skill>;
    getAgile(): Array<Skill>;
    getDevops(): Array<Skill>;
    getVersionControl(): Array<Skill>;
    getApis(): Array<Skill>;
}
