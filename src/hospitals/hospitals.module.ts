import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HospitalsService } from './hospitals.service';
import { HospitalsController } from './hospitals.controller';
import { Hospital } from '../entities/Hospital';

@Module({
  imports: [
    TypeOrmModule.forFeature([Hospital]), // On déclare l'entité
  ],
  providers: [HospitalsService],
  controllers: [HospitalsController],
  exports: [HospitalsService], // si besoin
})
export class HospitalsModule {}