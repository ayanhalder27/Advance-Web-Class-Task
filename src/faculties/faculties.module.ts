import { Module } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { FacultiesController } from './faculties.controller.js';
import { Faculties } from './entity/faculties.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Faculties])],
  controllers: [FacultiesController],
  providers: [FacultiesService],
})
export class FacultiesModule {}
