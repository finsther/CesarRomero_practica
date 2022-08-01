import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepoModule } from './modules/repos/repo.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "cockroachdb",
      url: process.env.DATABASE_URL,
      ssl: true,
      extra: {
        options: "--cluster=redleg-dragon-3491"
      },
      autoLoadEntities: true,
      synchronize: false,
      logging: true,
    }),
    RepoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
