import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../db';
import { Hospital } from '../entities/Hospital';

@Injectable()
export class HospitalsService {
  async createHospital(data: Partial<Hospital>): Promise<Hospital> {
    const hospitalRepository = AppDataSource.getRepository(Hospital);
    const hospital = hospitalRepository.create(data);

    try {
      return await hospitalRepository.save(hospital);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'hôpital :', error);
      throw new Error('Erreur interne du serveur');
    }
  }
}