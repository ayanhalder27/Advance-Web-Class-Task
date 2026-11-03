import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post()
  async create(@Body() createFacultyDto: CreateFacultyDto): Promise<any>{
    return await this.facultiesService.create(createFacultyDto);
  }
}
