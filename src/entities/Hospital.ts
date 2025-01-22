import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  official_name!: string;

  @Column({ type: 'varchar', length: 500 })
  full_address!: string;

  @Column({ type: 'varchar', length: 10 })
  department_number!: string;

  @Column({ type: 'varchar', length: 10 })
  postal_code!: string;

  @Column({ type: 'varchar', length: 100 })
  facility_type!: string;

  @Column({ type: 'decimal', precision: 9, scale: 6 })
  latitude!: number;

  @Column({ type: 'decimal', precision: 9, scale: 6 })
  longitude!: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  finess!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  occupancy_rate!: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  last_update!: Date;
}