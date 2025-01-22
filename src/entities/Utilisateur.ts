import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Déclare cette classe comme une entité TypeORM
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number; // Clé primaire auto-générée

  @Column({ type: 'varchar', length: 255, default: 'default@gmail.com' , nullable: true })
  email: string | null;

  @Column({ type: 'varchar', length: 255, default: 'defaultpassword' })
  password: string | null;

  @Column({ type: 'int', default: 3 })
  idrole: number | null;

  // Constructeur pour initialiser les propriétés
  constructor() {
    this.id = 0;
    this.email = '';
    this.password = '';
    this.idrole = 0;
  }
}