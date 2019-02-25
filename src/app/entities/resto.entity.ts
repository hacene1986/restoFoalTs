// @ts-ignore : 'Column' is declared but its value is never read.
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from 'typeorm';
import { Table } from './table.entity';
import { Reservation } from './reservation.entity';
import { User } from './user.entity';
@Entity()
export class Resto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  @Column()
  street: string;
  @Column()
  zipCode: string;
  @Column()
  city: string;
  @OneToMany(type => Table, table => table.resto)
  tables: Table[];
  @OneToMany(type => Reservation, reservation => reservation.resto)
  reservations: Reservation[];
  @ManyToOne(type => User, { nullable: false })
  owner: User;
}