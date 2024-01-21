import { Module } from '@nestjs/common';
import { FrameworkController } from 'src/controllers/framework.controller';
import { FrameworkService } from 'src/services/framework.service';

@Module({
  imports: [],
  controllers: [FrameworkController],
  providers: [FrameworkService],
  exports: [FrameworkService],
})
export class FrameworkModule {}
