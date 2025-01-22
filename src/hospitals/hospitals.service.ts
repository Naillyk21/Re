import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../db';
import { Hospital } from '../entities/Hospital';

@Injectable()
export class HospitalsService {
  async createHospital(data: Partial<Hospital>): Promise<Hospital> {
    try {
      // Vérification si l'entité est correctement enregistrée
      const hospitalRepository = AppDataSource.getRepository(Hospital);
      console.log('Entité Hospital accessible :', hospitalRepository.metadata);

      // Création d'un nouvel hôpital
      const hospital = hospitalRepository.create(data);
      console.log('Données pour la création de l\'hôpital :', data);

      // Sauvegarde dans la base de données
      const savedHospital = await hospitalRepository.save(hospital);
      console.log('Hôpital sauvegardé avec succès :', savedHospital);

      return savedHospital;
    } catch (error) {
      // Vérification et typage explicite de l'erreur
      if (error instanceof Error) {
        console.error('Erreur lors de l\'ajout de l\'hôpital :', error.message);
        console.error('Stack trace :', error.stack);
      } else {
        console.error('Erreur inconnue lors de l\'ajout de l\'hôpital :', error);
      }
      throw new Error('Erreur interne du serveur');
    }
  }

  async getAllHospitals(): Promise<Hospital[]> {
    const hospitalRepository = AppDataSource.getRepository(Hospital);

    try {
      return await hospitalRepository.find();
    } catch (error) {
      console.error('Erreur lors de la récupération des hôpitaux :', error);
      throw new Error('Erreur interne du serveur');
    }
  }
}