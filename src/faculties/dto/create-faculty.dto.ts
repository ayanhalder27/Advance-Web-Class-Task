import { IsNotEmpty, IsNumber, IsPositive, IsString, Min } from "class-validator";

export class CreateFacultyDto{
    @IsNotEmpty()
    @IsString()
    id: string;
    @IsNotEmpty()
    @IsString()
    name: string;
    @IsNotEmpty()
    @IsString()
    expertise: string;
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    @Min(0)
    noOfPubliccation: number;
}