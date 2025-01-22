import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hospital } from '../entities/Hospital';

@Injectable()
export class HospitalsService {
  constructor(
    @InjectRepository(Hospital)
    private readonly hospitalRepository: Repository<Hospital>,
  ) {}

  async createHospital(data: Partial<Hospital>): Promise<Hospital> {
    try {
      const hospital = this.hospitalRepository.create(data);
      return await this.hospitalRepository.save(hospital);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'hôpital :', error);
      throw new Error('Erreur interne du serveur');
    }
  }

  async getAllHospitals(): Promise<Hospital[]> {
    return this.hospitalRepository.find();
  }
}