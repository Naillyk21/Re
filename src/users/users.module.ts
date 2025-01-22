import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Utilisateur } from '../entities/Utilisateur';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Utilisateur])
  ], // Enregistrer l'entité ici
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // si besoin
})
export class UsersModule {}