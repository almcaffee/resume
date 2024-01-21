import { Injectable } from '@nestjs/common';
import { frameworks } from 'db/data/experience';
import {
  CompetencyLevel,
  Experience,
  ServiceResponse,
  UsageFrequency,
} from 'types';

@Injectable()
export class FrameworkService {
  private frameworkList: Array<Experience>;
  private frameworkMap: Map<number, Experience>;

  private get frameworks(): Array<Experience> {
    return this.frameworkList;
  }

  private set frameworks(frameworks: Array<Experience>) {
    this.frameworkList = frameworks;
    this.frameworkMap = new Map<number, Experience>();
    this.updateFrameworkMap();
  }

  constructor() {
    this.frameworkList = frameworks;
  }

  /**
   * Add a new framework to the list
   *
   * @param {Experience} framework
   * @return {*}  {ServiceResponse<Experience>}
   * @memberof FrameworkService
   */
  addFramework(framework: Experience): ServiceResponse<Experience> {
    const error = this.validateFramework(framework);
    if (error) return { error, data: null };
    const newFramework = { ...framework, id: this.frameworkList.length };
    this.frameworkList.push(newFramework);
    this.updateFrameworkMap();
    return { error: null, data: newFramework };
  }

  /**
   * Find the framework with the given id
   *
   * @param {number} id
   * @return {*}  {(Experience | void)}
   * @memberof FrameworkService
   */
  findFramework(id: number): Experience | void {
    const item = this.validateFrameworkExists(id);
    if (!item) return;
    return item;
  }

  /**
   * Get the framework with the given id
   *
   * @param {number} id
   * @return {*}  {Experience}
   * @memberof FrameworkService
   */
  getFramework(id: number): Experience {
    return this.frameworkMap.get(id);
  }

  /**
   * Get the list of frameworks based on the given params
   *
   * @param {{
   *     level?: CompetencyLevel;
   *     frequency?: UsageFrequency;
   *     name?: string;
   *   }} [params]
   * @return {*}  {Array<Experience>}
   * @memberof FrameworkService
   */
  getFrameworks(params?: {
    level?: CompetencyLevel;
    frequency?: UsageFrequency;
    name?: string;
  }): Array<Experience> {
    return this.filterFrameworks(params);
  }

  /**
   * Get the list of framework names
   *
   * @return {*}  {Array<string>}
   * @memberof FrameworkService
   */
  getFrameworkNames(): Array<string> {
    return Array.from(new Set(this.frameworks.map((fw) => fw.name)));
  }

  /**
   * Filter the frameworks based on the given params
   *
   * @param {{
   *     level?: CompetencyLevel;
   *     frequency?: UsageFrequency;
   *     name?: string;
   *   }} params
   * @return {*}  {Array<Experience>}
   * @memberof FrameworkService
   */
  filterFrameworks(params: {
    level?: CompetencyLevel;
    frequency?: UsageFrequency;
    name?: string;
  }): Array<Experience> {
    if (!params) return this.frameworks;
    const { level, frequency, name } = params;
    return this.frameworks.filter((framework) => {
      if (level && framework.level !== level) return false;
      if (frequency && framework.usageFrequency !== frequency) return false;
      if (name && !framework.name.includes(name)) return false;
      return true;
    });
  }

  /**
   * Remove the framework with the given id
   *
   * @param {number} id
   * @return {*}  {ServiceResponse<string>}
   * @memberof FrameworkService
   */
  removeFramework(id: number): ServiceResponse<string> {
    const item = this.validateFrameworkExists(id);
    if (!item)
      return { error: `Framework with id ${id} not found`, data: null };
    if (this.frameworks.length === 1)
      return {
        error: 'Cannot remove the last framework',
        data: null,
        refuse: true,
      };
    const [deletedFramework] = this.frameworkList.splice(
      this.frameworks.indexOf(item),
      1,
    );
    this.updateFrameworkMap();
    return {
      error: null,
      data: `${deletedFramework.name} successfully deleted`,
    };
  }

  /**
   * Reset the frameworks to the default frameworks
   *
   * @return {*}  {Array<Experience>}
   * @memberof FrameworkService
   */
  resetFrameworks(): Array<Experience> {
    this.frameworks = frameworks;
    this.updateFrameworkMap();
    return this.frameworks;
  }

  /**
   * Update the framework with the given id and updated framework object
   *
   * @param {number} id
   * @param {Experience} framework
   * @return {*}  {ServiceResponse<Experience>}
   * @memberof FrameworkService
   */
  updateFramework(
    id: number,
    framework: Experience,
  ): ServiceResponse<Experience> {
    let item = this.validateFrameworkExists(id);
    if (!item) return { error: 'Framework not found', data: null };
    item = {
      ...item,
      ...framework,
      id,
    };
    this.updateFrameworkMap();
    return { error: null, data: item };
  }

  /**
   * Update the map with the latest frameworks
   *
   * @memberof FrameworkService
   */
  updateFrameworkMap(): void {
    this.frameworkMap.clear();
    this.frameworks.forEach((framework) => {
      this.frameworkMap.set(framework.id, framework);
    });
  }

  /**
   * Check if the framework exists in the map
   *
   * @param {number} id
   * @return {*}  {(Experience | undefined)}
   * @memberof FrameworkService
   */
  validateFrameworkExists(id: number): Experience | undefined {
    return this.frameworkMap.get(id) ?? undefined;
  }

  /**
   * Check if the required properties of the interface are present
   * in the object
   *
   * @param {Experience} framework
   * @return {*}  {(void | string)}
   * @memberof FrameworkService
   */
  validateFramework(framework: Experience): void | string {
    const { id, name, description, lastUsedAt } = framework;
    if (!name) return 'Framework name is required';
    if (!description) return 'Framework description is required';
    if (!id) return 'Framework id is required';
    if (!lastUsedAt?.length) return 'Framework last used at is required';
    return;
  }
}
