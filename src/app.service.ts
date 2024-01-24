import { Injectable } from '@nestjs/common';
import {
  agile,
  api,
  development,
  devops,
  languages,
  test,
  versionControl,
} from 'db/data/experience';
import { Experience, Skill } from 'types';

@Injectable()
export class AppService {
  private readonly apis: Array<Skill> = api;
  private readonly testing: Array<Skill> = test;
  private readonly development: Array<Skill> = development;
  private readonly agile: Array<Skill> = agile;
  private readonly devops: Array<Skill> = devops;
  private readonly versionControl: Array<Skill> = versionControl;

  getHello(): string {
    return 'Hello World!';
  }

  getTesting(): Array<Skill> {
    return this.testing;
  }

  getDevelopment(): Array<Skill> {
    return this.development;
  }

  getAgile(): Array<Skill> {
    return this.agile;
  }

  getDevops(): Array<Skill> {
    return this.devops;
  }

  getVersionControl(): Array<Skill> {
    return this.versionControl;
  }

  getApis(): Array<Skill> {
    return this.apis;
  }

  getAll(): Array<Skill> {
    return [
      ...this.testing,
      ...this.development,
      ...this.agile,
      ...this.devops,
      ...this.versionControl,
      ...this.apis,
    ];
  }
}
