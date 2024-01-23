import { Bullet, Position } from 'types';
import { BaseController } from './base.controller';
import { ExperienceService } from 'src/services/experience.service';
import { IsBooleanDto } from 'src/dto';
export declare class ExperienceController extends BaseController {
    private readonly service;
    constructor(service: ExperienceService);
    getJobList(property: string, { showId }: IsBooleanDto): Array<string | number | {
        [key: string]: string | number | Array<Bullet>;
    }>;
    getJob(id: string): Position;
    getJobs(): Array<Position>;
}
