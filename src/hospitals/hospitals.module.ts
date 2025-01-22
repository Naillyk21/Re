import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';
import { Hospital } from '../entities/Hospital';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital])], // Enregistrer l'entité ici
  controllers: [HospitalsController],
  providers: [HospitalsService],
})
export class HospitalsModule {}