import { Module } from '@nestjs/common';
import { LanguageController } from 'src/controllers/language.controller';
import { LanguageService } from 'src/services/language.service';

@Module({
  imports: [],
  controllers: [LanguageController],
  providers: [LanguageService],
  exports: [LanguageService],
})
export class LanguageModule {}
