import { Injectable } from '@nestjs/common';
import { languages } from 'db/data/experience';
import {
  CompetencyLevel,
  Experience,
  ServiceResponse,
  UsageFrequency,
} from 'types';

@Injectable()
export class LanguageService {
  private languageList: Array<Experience>;
  private languageMap: Map<number, Experience>;

  private get languages(): Array<Experience> {
    return this.languageList;
  }

  private set languages(languages: Array<Experience>) {
    this.languageList = languages;
    this.languageMap = new Map<number, Experience>();
    this.updateLanguageMap();
  }

  constructor() {
    this.languageList = languages;
  }

  /**
   * Add a new language to the list
   *
   * @param {Experience} language
   * @return {*}  {ServiceResponse<Experience>}
   * @memberof LanguageService
   */
  addLanguage(language: Experience): ServiceResponse<Experience> {
    const error = this.validateLanguage(language);
    if (error) return { error, data: null };
    const newLanguage = { ...language, id: this.languageList.length };
    this.languageList.push(newLanguage);
    this.updateLanguageMap();
    return { error: null, data: newLanguage };
  }

  /**
   * Find the language with the given id
   *
   * @param {number} id
   * @return {*}  {(Experience | void)}
   * @memberof LanguageService
   */
  findLanguage(id: number): Experience | void {
    const item = this.validateLanguageExists(id);
    if (!item) return;
    return item;
  }

  /**
   * Get the language with the given id
   *
   * @param {number} id
   * @return {*}  {Experience}
   * @memberof LanguageService
   */
  getLanguage(id: number): Experience {
    return this.languageMap.get(id);
  }

  /**
   * Get the list of languages based on the given params
   *
   * @param {{
   *     level?: CompetencyLevel;
   *     frequency?: UsageFrequency;
   *     name?: string;
   *   }} [params]
   * @return {*}  {Array<Experience>}
   * @memberof LanguageService
   */
  getLanguages(params?: {
    level?: CompetencyLevel;
    frequency?: UsageFrequency;
    name?: string;
  }): Array<Experience> {
    return this.filterLanguages(params);
  }

  /**
   * Get the list of language names
   *
   * @return {*}  {Array<string>}
   * @memberof LanguageService
   */
  getLanguageNames(): Array<string> {
    return Array.from(new Set(this.languages.map((fw) => fw.name)));
  }

  /**
   * Filter the languages based on the given params
   *
   * @param {{
   *     level?: CompetencyLevel;
   *     frequency?: UsageFrequency;
   *     name?: string;
   *   }} params
   * @return {*}  {Array<Experience>}
   * @memberof LanguageService
   */
  filterLanguages(params: {
    level?: CompetencyLevel;
    frequency?: UsageFrequency;
    name?: string;
  }): Array<Experience> {
    if (!params) return this.languages;
    const { level, frequency, name } = params;
    return this.languages.filter((language) => {
      if (level && language.level !== level) return false;
      if (frequency && language.usageFrequency !== frequency) return false;
      if (name && !language.name.includes(name)) return false;
      return true;
    });
  }

  /**
   * Remove the language with the given id
   *
   * @param {number} id
   * @return {*}  {ServiceResponse<string>}
   * @memberof LanguageService
   */
  removeLanguage(id: number): ServiceResponse<string> {
    const item = this.validateLanguageExists(id);
    if (!item) return { error: `Language with id ${id} not found`, data: null };
    if (this.languages.length === 1)
      return {
        error: 'Cannot remove the last language',
        data: null,
        refuse: true,
      };
    const [deletedLanguage] = this.languageList.splice(
      this.languages.indexOf(item),
      1,
    );
    this.updateLanguageMap();
    return {
      error: null,
      data: `${deletedLanguage.name} successfully deleted`,
    };
  }

  /**
   * Reset the languages to the default languages
   *
   * @return {*}  {Array<Experience>}
   * @memberof LanguageService
   */
  resetLanguages(): Array<Experience> {
    this.languages = languages;
    this.updateLanguageMap();
    return this.languages;
  }

  /**
   * Update the language with the given id and updated language object
   *
   * @param {number} id
   * @param {Experience} language
   * @return {*}  {ServiceResponse<Experience>}
   * @memberof LanguageService
   */
  updateLanguage(
    id: number,
    language: Experience,
  ): ServiceResponse<Experience> {
    let item = this.validateLanguageExists(id);
    if (!item) return { error: 'Language not found', data: null };
    item = {
      ...item,
      ...language,
      id,
    };
    this.updateLanguageMap();
    return { error: null, data: item };
  }

  /**
   * Update the map with the latest languages
   *
   * @memberof LanguageService
   */
  updateLanguageMap(): void {
    this.languageMap.clear();
    this.languages.forEach((language) => {
      this.languageMap.set(language.id, language);
    });
  }

  /**
   * Check if the language exists in the map
   *
   * @param {number} id
   * @return {*}  {(Experience | undefined)}
   * @memberof LanguageService
   */
  validateLanguageExists(id: number): Experience | undefined {
    return this.languageMap.get(id) ?? undefined;
  }

  /**
   * Check if the required properties of the interface are present
   * in the object
   *
   * @param {Experience} language
   * @return {*}  {(void | string)}
   * @memberof LanguageService
   */
  validateLanguage(language: Experience): void | string {
    const { id, name, description, lastUsedAt } = language;
    if (!name) return 'Language name is required';
    if (!description) return 'Language description is required';
    if (!id) return 'Language id is required';
    if (!lastUsedAt?.length) return 'Language last used at is required';
    return;
  }
}
