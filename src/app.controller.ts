import {
  Controller,
  Get,
  HttpException,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { Experience, Skill } from 'types';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ResumeExperience, ResumeSkill } from 'types/entities';
import { AppService } from './app.service';

/* 
  I do realize these paths would likely be in separate services, but for the sake of simplicity, 
  I'm keeping them in the same service unless somehow I need to scale my resume 
*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('testing')
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeSkill,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: String,
  })
  @Get('/testing')
  getTesting(): Array<Skill> {
    return this.appService.getTesting();
  }

  @ApiTags('development')
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeSkill,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: String,
  })
  @Get('/development')
  getDevelopment(): Array<Skill> {
    return this.appService.getDevelopment();
  }

  @ApiTags('agile')
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeSkill,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: String,
  })
  @Get('/agile')
  getAgile(): Array<Skill> {
    return this.appService.getAgile();
  }

  @ApiTags('devops')
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeSkill,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: String,
  })
  @Get('/devops')
  getDevops(): Array<Skill> {
    return this.appService.getDevops();
  }

  @ApiTags('version-control')
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeSkill,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: String,
  })
  @Get('/version-control')
  getVersionControl(): Array<Skill> {
    return this.appService.getVersionControl();
  }

  @ApiTags('apis')
  @ApiResponse({
    status: 200,
    description: 'Successful operation',
    type: ResumeSkill,
    isArray: true,
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized',
    type: String,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    type: String,
  })
  @ApiResponse({
    status: 500,
    description: 'Server error',
    type: String,
  })
  @Get('/apis')
  getApis(): Array<Skill> {
    return this.appService.getApis();
  }
}
