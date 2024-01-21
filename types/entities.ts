import { ApiProperty } from '@nestjs/swagger';
import { CompetencyLevel, UsageFrequency } from 'types';

export class BaseDetail {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  description?: string;
}

export class ResumeSkill extends BaseDetail {
  @ApiProperty()
  yearsOfExperience: number;

  @ApiProperty({
    enum: [
      'Back to the drawing board',
      'Its been a while',
      'I use it occasionally',
      'Previous position',
      'Current position',
      'This application',
    ],
  })
  usageFrequency?: UsageFrequency;

  @ApiProperty()
  usedAt?: Array<string>;
}

export class ResumeExperience extends ResumeSkill {
  @ApiProperty()
  category?: string;

  @ApiProperty()
  lastUsedAt: string;

  @ApiProperty()
  lastUsedDate?: Date;

  @ApiProperty({
    enum: [
      'None',
      'Did the tutorial',
      'Beginner',
      'Intermediate',
      'Advanced',
      'Expert',
    ],
  })
  level?: CompetencyLevel;

  @ApiProperty()
  firstExperience?: string;

  @ApiProperty()
  relatedSkills?: Array<string>;

  @ApiProperty()
  positionsUsed?: Array<string>;

  @ApiProperty()
  positions?: Array<string>;
}

export class BaseException {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;
}

export class HandledException extends BaseException {}

export class UnhandledException extends BaseException {
  @ApiProperty()
  error: string;
}
