import * as path from 'path';
import fetch from 'node-fetch';
import { ExperienceResponse } from 'types';

export const getExperience = async (): Promise<ExperienceResponse> => {
  const response = await fetch(path.join(__dirname, './skills.json'));
  return (await response.json()) as Promise<ExperienceResponse>;
};
