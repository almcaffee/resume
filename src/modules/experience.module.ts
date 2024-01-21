import { Module } from '@nestjs/common';
import { ExperienceController } from 'src/controllers/experience.controller';
import { ExperienceService } from 'src/services/experience.service';

@Module({
  imports: [],
  controllers: [ExperienceController],
  providers: [ExperienceService],
  exports: [ExperienceService],
})
export class ExperienceModule {}
