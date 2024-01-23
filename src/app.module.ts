import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FrameworkModule } from './modules/framework.module';
import { LanguageModule } from './modules/language.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ExperienceModule } from './modules/experience.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FrameworkModule,
    LanguageModule,
    ExperienceModule,
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', '../angular'),
        renderPath: '/angular',
        serveRoot: '/angular/',
      },
      {
        rootPath: join(__dirname, '..', '../assets'),
        serveRoot: '/assets/',
      },
      {
        rootPath: join(__dirname, '..', '../react'),
        renderPath: '/react',
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
