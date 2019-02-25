import { encryptPassword } from '@foal/core';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Resto } from './resto.entity';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  async setPassword(password: string) {
    this.password = await encryptPassword(password);
  }
  @OneToMany(type => Resto, resto => resto.owner)
  restaurants: Resto[];
}
