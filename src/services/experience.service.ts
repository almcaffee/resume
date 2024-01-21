import { Injectable } from '@nestjs/common';
import { jobs } from 'db/data/experience';
import { Bullet, Position, ServiceResponse } from 'types';

@Injectable()
export class ExperienceService {
  private jobList: Array<Position>;
  private jobMap: Map<number, Position>;

  private get jobs(): Array<Position> {
    return this.jobList;
  }

  private set jobs(jobs: Array<Position>) {
    this.jobList = jobs;
  }

  constructor() {
    this.jobMap = new Map<number, Position>();
    this.jobList = jobs;
    this.updateExperienceMap();
  }

  /**
   * Find the job with the given id
   *
   * @param {number} id
   * @return {*}  {(Position | void)}
   * @memberof ExperienceService
   */
  findExperience(id: number): Position | void {
    const item = this.jobMap.get(id);
    if (!item) return;
    return item;
  }

  /**
   * Get the job with the given id
   *
   * @param {number} id
   * @return {*}  {Position}
   * @memberof ExperienceService
   */
  getExperience(id: number): Position {
    return this.jobMap.get(id);
  }

  /**
   * Get the list of jobs based on the given params
   *
   * @param {{
   *     level?: CompetencyLevel;
   *     frequency?: UsageFrequency;
   *     name?: string;
   *   }} [params]
   * @return {*}  {Array<Position>}
   * @memberof ExperienceService
   */
  getExperiences(params?: {
    start?: Date;
    end?: Date;
    company?: string;
  }): Array<Position> {
    return this.filterExperiences(params);
  }

  /**
   * Get the list of job names
   *
   * @return {*}  {Array<string>}
   * @memberof ExperienceService
   */
  getExperienceList(
    property?: string,
    showId?: boolean,
  ): ServiceResponse<
    Array<string> | Array<{ [key: string]: string | number | Array<Bullet> }>
  > {
    if (!Object.keys(this.jobs[0]).includes(property)) {
      return {
        error: `Property ${property} does not exist on typeof experience`,
        data: null,
      };
    }
    const key = property ?? 'title';
    const data = showId
      ? this.jobs.map((fw) => ({ id: fw.id, [key]: fw[key] }))
      : this.jobs.map((fw) => fw[key]);
    return {
      error: null,
      data,
    };
  }

  /**
   * Filter the jobs based on the given params
   *
   * @param {{
   *     start?: Date;
   *     end?: Date;
   *     company?: string;
   *   }} params
   * @return {*}  {Array<Position>}
   * @memberof ExperienceService
   */
  filterExperiences(params: {
    start?: Date;
    end?: Date;
    company?: string;
  }): Array<Position> {
    if (!params) return this.jobs;
    const { start, end, company } = params;
    return this.jobs.filter((job) => {
      if (start && end) {
        if (job.start > end || job.ended < start) return false;
      }
      if (start) return job.ended < start;
      if (end) return job.start > end;
      if (
        company &&
        !job.companyName.toLowerCase().includes(company.toLowerCase())
      )
        return false;
      return true;
    });
  }

  /**
   * Update the map with the latest frameworks
   *
   * @memberof ExperienceService
   */
  updateExperienceMap(): void {
    this.jobMap?.clear?.();
    this.jobs.forEach((job) => {
      this.jobMap.set(job.id, job);
    });
    console.log(this.jobMap);
  }
}
