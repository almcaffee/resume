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
} from '@nestjs/common';
import { Experience } from 'types';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResumeExperience, UnhandledException } from 'types/entities';
import { FrameworkService } from 'src/services/framework.service';
import { BaseController } from './base.controller';

@Controller()
export class FrameworkController extends BaseController {
  constructor(private readonly service: FrameworkService) {
    super();
  }

  @ApiTags('frameworks')
  @ApiOperation({
    summary: 'Set frameworks to the default state',
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
  @Post('/frameworks/reset')
  resetFrameworkList(): Array<Experience> {
    return this.service.resetFrameworks();
  }

  @ApiTags('frameworks')
  @ApiOperation({
    summary: 'Get a list of framework names',
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
  @Get('/frameworks/list')
  getFrameworkList(): Array<string> {
    const data = this.service.getFrameworkNames();
    if (!data.length) throw new NotFoundException('Frameworks not found');
    return data;
  }

  @ApiTags('frameworks')
  @ApiOperation({
    summary: 'Get a framework by id',
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
  @Get('/frameworks/:id')
  getFramework(@Param('id') id: string): Experience {
    const data = this.service.getFramework(+id);
    if (!data?.length)
      throw new NotFoundException(`Framework with id ${id} was not found`);
    return data;
  }

  @ApiTags('frameworks')
  @ApiQuery({
    name: 'level',
    description: 'The competency level of the framework',
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
    description: 'The frequency of use of the framework',
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
    description: 'The name of the framework',
    required: false,
    example: 'TypeScript',
  })
  @ApiOperation({
    summary: 'Get all frameworks',
    parameters: [
      {
        name: 'level',
        in: 'query',
        description: 'The competency level of the framework',
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
        description: 'The frequency of use of the framework',
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
        description: 'The name of the framework',
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
  @Get('/frameworks')
  getFrameworks(): Array<Experience> {
    const frameworks = this.service.getFrameworks();
    if (!frameworks.length) throw new NotFoundException('Frameworks not found');
    return frameworks;
  }

  @ApiTags('frameworks')
  @ApiOperation({
    summary: 'Add a framework',
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
  @Post('/frameworks')
  addFramework(@Body() experience: Experience): Experience {
    const { data, error } = this.service.addFramework(experience);
    if (error) throw new HttpException(error, 400);
    return data;
  }

  @ApiTags('frameworks')
  @ApiOperation({
    summary: 'Update a framework',
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
  @Put('/frameworks')
  updateFramework(@Body() experience: Experience): Experience {
    const { data, error } = this.service.addFramework(experience);
    if (error) throw new HttpException(error, 400);
    return data;
  }

  @ApiTags('frameworks')
  @ApiOperation({
    summary: 'Delete a framework',
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
  @Delete('/frameworks/:id')
  deleteFramework(@Param('id') id: number): string {
    const { data, error, refuse } = this.service.removeFramework(id);
    if (error) throw new HttpException(error, 404);
    if (refuse) throw new HttpException(error, 403);
    return data;
  }
}
