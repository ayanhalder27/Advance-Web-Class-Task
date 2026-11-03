import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculties } from './entity/faculties.js';
import { Repository } from 'typeorm';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
    constructor(@InjectRepository(Faculties) private facultyRepo: Repository<Faculties>){}

    async create(createFacultyDto: CreateFacultyDto): Promise<any>{
        try{
            const faculty = await this.facultyRepo.save(await this.facultyRepo.create(createFacultyDto));
            return {
                message: "Faculty created successfully",
                data: faculty
            };
        }
        catch{
            throw new BadRequestException("Database error. Failed to create faculty.");
        }
    }
}
