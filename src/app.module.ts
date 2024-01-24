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
        rootPath: join(__dirname, '..', '../.well-known/acme-challenge/'),
        serveRoot: '/.well-known/acme-challenge/',
      },
      {
        rootPath: join(__dirname, '..', '../swagger/'),
        serveRoot: '/swagger/',
      },
      {
        rootPath: join(__dirname, '..', '../angular/browser'),
        renderPath: '/',
        serveRoot: '/',
      },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
