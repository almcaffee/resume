import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CompetencyLevel, Experience, UsageFrequency } from 'types';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResumeExperience, UnhandledException } from 'types/entities';
import { LanguageService } from 'src/services/language.service';
import { BaseController } from './base.controller';

@Controller()
export class LanguageController extends BaseController {
  constructor(private readonly service: LanguageService) {
    super();
  }

  @ApiTags('languages')
  @ApiOperation({
    summary: 'Set languages to the default state',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: String,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: UnhandledException,
  })
  @Post('/languages/reset')
  resetLanguageList(): Array<Experience> {
    return this.service.resetLanguages();
  }

  @ApiTags('languages')
  @ApiOperation({
    summary: 'Get a list of language names',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: String,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: UnhandledException,
  })
  @Get('/languages/list')
  getLanguageList(): Array<string> {
    const data = this.service.getLanguageNames();
    if (!data.length) throw new NotFoundException('Languages not found');
    return data;
  }

  @ApiTags('languages')
  @ApiOperation({
    summary: 'Get a language by id',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeExperience,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    schema: {
      example: {
        statusCode: 401,
        message: 'Not found',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: UnhandledException,
  })
  @Get('/languages/:id')
  getLanguage(@Param('id') id: string): Experience {
    const data = this.service.getLanguage(+id);
    if (!data?.length)
      throw new NotFoundException(`Language with id ${id} was not found`);
    return data;
  }

  @ApiTags('languages')
  @ApiQuery({
    name: 'level',
    description: 'The competency level of the language',
    required: false,
    schema: {
      enum: [
        'None',
        'Followed examples in the docs',
        'Beginner',
        'Intermediate',
        'Advanced',
        'Expert',
      ],
    },
    example: 'Expert',
  })
  @ApiQuery({
    name: 'frequency',
    description: 'The frequency of use of the language',
    required: false,
    schema: {
      enum: [
        'Back to the drawing board',
        'Its been a while',
        'I use it occasionally',
        'Previous position',
        'Current position',
        'This application',
      ],
    },
    example: 'Current position',
  })
  @ApiQuery({
    name: 'name',
    description: 'The name of the language',
    required: false,
    example: 'TypeScript',
  })
  @ApiOperation({
    summary: 'Get all languages',
    parameters: [
      {
        name: 'level',
        in: 'query',
        description: 'The competency level of the language',
        required: false,
        schema: {
          enum: [
            'None',
            'Followed examples in the docs',
            'Beginner',
            'Intermediate',
            'Advanced',
            'Expert',
          ],
        },
        example: 'Expert',
      },
      {
        name: 'frequency',
        in: 'query',
        description: 'The frequency of use of the language',
        required: false,
        schema: {
          enum: [
            'Back to the drawing board',
            'Its been a while',
            'I use it occasionally',
            'Previous position',
            'Current position',
            'This application',
          ],
        },
        example: 'Current position',
      },
      {
        name: 'name',
        in: 'query',
        description: 'The name of the language',
        required: false,
        example: 'TypeScript',
      },
    ],
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeExperience,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    schema: {
      example: {
        statusCode: 401,
        message: 'Not found',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: UnhandledException,
  })
  @Get('/languages')
  getLanguages(): Array<Experience> {
    const languages = this.service.getLanguages();
    if (!languages.length) throw new NotFoundException('Languages not found');
    return languages;
  }

  @ApiTags('languages')
  @ApiOperation({
    summary: 'Add a language',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeExperience,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    schema: {
      example: {
        statusCode: 400,
        message: 'The request is invalid',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: UnhandledException,
  })
  @Post('/languages')
  addLanguage(@Body() experience: Experience): Experience {
    const { data, error } = this.service.addLanguage(experience);
    if (error) throw new HttpException(error, 400);
    return data;
  }

  @ApiTags('languages')
  @ApiOperation({
    summary: 'Update a language',
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeExperience,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    schema: {
      example: {
        statusCode: 400,
        message: 'The request is invalid',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: UnhandledException,
  })
  @Put('/languages')
  updateLanguage(@Body() experience: Experience): Experience {
    const { data, error } = this.service.addLanguage(experience);
    if (error) throw new HttpException(error, 400);
    return data;
  }

  @ApiTags('languages')
  @ApiOperation({
    summary: 'Delete a language',
  })
  @ApiResponse({
    status: 204,
    description: 'Successful operation',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    schema: {
      example: {
        statusCode: 401,
        message: 'Unauthorized',
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Refused request',
    schema: {
      example: {
        statusCode: 403,
        message: 'The requested action is denied',
      },
    },
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: UnhandledException,
  })
  @Delete('/languages/:id')
  deleteLanguage(@Param('id') id: number): string {
    const { data, error, refuse } = this.service.removeLanguage(id);
    if (error) throw new HttpException(error, 404);
    if (refuse) throw new HttpException(error, 403);
    return data;
  }
}
