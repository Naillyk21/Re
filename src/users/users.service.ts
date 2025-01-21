import { Injectable } from '@nestjs/common';
import { AppDataSource } from '../db';
import { Utilisateur } from '../entities/Utilisateur';

@Injectable()
export class UsersService {
  async createUser(email: string, password: string, idrole: number): Promise<Utilisateur> {
    const userRepository = AppDataSource.getRepository(Utilisateur);

    const utilisateur = new Utilisateur();
    utilisateur.email = email;
    utilisateur.password = password;
    utilisateur.idrole = idrole;

    try {
      return await userRepository.save(utilisateur);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      throw new Error('Erreur interne du serveur');
    }
  }
}
