import { Experience } from 'types';
import { FrameworkService } from 'src/services/framework.service';
import { BaseController } from './base.controller';
export declare class FrameworkController extends BaseController {
    private readonly service;
    constructor(service: FrameworkService);
    resetFrameworkList(): Array<Experience>;
    getFrameworkList(): Array<string>;
    getFramework(id: string): Experience;
    getFrameworks(): Array<Experience>;
    addFramework(experience: Experience): Experience;
    updateFramework(experience: Experience): Experience;
    deleteFramework(id: number): string;
}
