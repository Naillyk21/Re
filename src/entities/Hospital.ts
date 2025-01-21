// entities/Hospital.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, default: 'Hôpital Général' })
  official_name: string | null;

  @Column({ type: 'varchar', length: 500, default: '12B Rue de la Santé, Paris, France' })
  full_address: string | null;

  @Column({ type: 'varchar', length: 10, default: '75' })
  department_number: string | null;

  @Column({ type: 'varchar', length: 10, default: '75013' })
  postal_code: string | null;

  @Column({ type: 'varchar', length: 100, default: 'Hôpital' })
  facility_type: string | null;

  @Column({ type: 'decimal', precision: 9, scale: 6, default: 48.856600 })
  latitude: number | null;

  @Column({ type: 'decimal', precision: 9, scale: 6, default: 2.352200 })
  longitude: number | null;

  @Column({ type: 'varchar', length: 50, nullable: true, default: '1000024' })
  finess: string | null;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true, default: 85 })
  occupancy_rate: number | null;

  @Column({ type: 'timestamp', default: () => `'2025-01-19 00:00:00.000'` })
  last_update: Date | null;

  constructor() {
    this.id = 0;
    this.official_name = 'Hôpital Général';
    this.full_address = '12B Rue de la Santé, Paris, France';
    this.department_number = '75';
    this.postal_code = '75013';
    this.facility_type = 'Hôpital';
    this.latitude = 48.856600;
    this.longitude = 2.352200;
    this.finess = '1000024';
    this.occupancy_rate = 85;
    this.last_update = new Date('2025-01-19 00:00:00.000');
  }
}