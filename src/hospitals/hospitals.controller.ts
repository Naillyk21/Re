import { Controller, Post, Body, HttpException, HttpStatus, Get } from '@nestjs/common';
import { HospitalsService } from './hospitals.service';
import { Hospital } from '../entities/Hospital';

@Controller('hospitals')
export class HospitalsController {
  constructor(private readonly hospitalsService: HospitalsService) {}

  @Post()
  async createHospital(@Body() createHospitalDto: Partial<Hospital>): Promise<Hospital> {
    const {
      official_name,
      full_address,
      department_number,
      postal_code,
      facility_type,
      latitude,
      longitude,
      finess,
      occupancy_rate,
    } = createHospitalDto;

    if (!official_name || !full_address || !department_number || !postal_code || !facility_type || !latitude || !longitude) {
      throw new HttpException('Tous les champs obligatoires doivent être remplis.', HttpStatus.BAD_REQUEST);
    }

    return this.hospitalsService.createHospital(createHospitalDto);
  }

  @Get()
  async getAllHospitals(): Promise<Hospital[]> {
    return this.hospitalsService.getAllHospitals();
  }
}
