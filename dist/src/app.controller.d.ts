import { Skill } from 'types';
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getTesting(): Array<Skill>;
    getDevelopment(): Array<Skill>;
    getAgile(): Array<Skill>;
    getDevops(): Array<Skill>;
    getVersionControl(): Array<Skill>;
    getApis(): Array<Skill>;
}
