import {
  Controller,
  Get,
  HttpException,
  NotFoundException,
  Param,
  ParseBoolPipe,
  Query,
} from '@nestjs/common';
import { Bullet, Position } from 'types';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResumeExperience, UnhandledException } from 'types/entities';
import { BaseController } from './base.controller';
import { ExperienceService } from 'src/services/experience.service';
import { IsBooleanDto } from 'src/dto';

@Controller()
export class ExperienceController extends BaseController {
  constructor(private readonly service: ExperienceService) {
    super();
  }

  @ApiTags('experience')
  @ApiOperation({
    summary: 'Get a property of all positions as a list',
  })
  @ApiQuery({
    name: 'showId',
    description: 'Return the id of the position',
    required: false,
    example: true,
  })
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: String,
    isArray: true,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request',
    schema: {
      example: {
        statusCode: 400,
        message: 'Bad request',
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
  @Get('/experience/list/:type')
  getJobList(
    @Param('type') property: string,
    @Query() { showId }: IsBooleanDto,
  ): Array<
    string | number | { [key: string]: string | number | Array<Bullet> }
  > {
    const { data, error } = this.service.getExperienceList(property, showId);
    if (error) throw new HttpException(error, 400);
    if (!data.length) throw new NotFoundException('Experience not found');
    return data;
  }

  @ApiTags('experience')
  @ApiOperation({
    summary: 'Get a position by id',
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
  @Get('/experience/:id')
  getJob(@Param('id') id: string): Position {
    const data = this.service.getExperience(+id);
    if (!data)
      throw new NotFoundException(`Experience with id ${id} was not found`);
    return data;
  }

  @ApiTags('experience')
  @ApiQuery({
    name: 'end',
    description: 'The start date of the job',
    required: false,
    example: '2001-10-25',
  })
  @ApiQuery({
    name: 'start',
    description: 'The start date of the job',
    required: false,
    example: '2001-10-25',
  })
  @ApiQuery({
    name: 'companyName',
    description: 'The name of the company',
    required: false,
    example: 'Amazon',
  })
  @ApiOperation({
    summary: 'Get all experience',
    parameters: [
      {
        name: 'start',
        in: 'query',
        description: 'The start date of the job',
        required: false,
        example: '2001-10-25',
      },
      {
        name: 'end',
        in: 'query',
        description: 'The end date of the job',
        required: false,
        example: '2005-07-16',
      },
      {
        name: 'companyName',
        in: 'query',
        description: 'The name of the company',
        required: false,
        example: 'Amazon',
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
  @Get('/experience')
  getJobs(): Array<Position> {
    const experience = this.service.getExperiences();
    if (!experience.length)
      throw new NotFoundException('Work experience not found');
    return experience;
  }
}
