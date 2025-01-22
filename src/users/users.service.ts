import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Utilisateur } from '../entities/Utilisateur';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Utilisateur)
    private readonly userRepository: Repository<Utilisateur>,
  ) {}

  async createUser(email: string, password: string, idrole: number): Promise<Utilisateur> {
    try {
      const utilisateur = this.userRepository.create({ email, password, idrole });
      return await this.userRepository.save(utilisateur);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
      throw new Error('Erreur interne du serveur');
    }
  }
}