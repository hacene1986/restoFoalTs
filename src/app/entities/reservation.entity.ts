// @ts-ignore : 'Column' is declared but its value is never read.
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Resto } from './resto.entity';
@Entity()
export class Reservation {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  dateTime: Date;
  @Column()
  midi: Boolean;
  @Column()
  soir: Boolean;
  @Column()
  table: string;
  @Column()
  nbCouverts: number;
  @Column()
  nameClient: string;
  @Column()
  tel: string;
  @ManyToOne(type => Resto, resto => resto.reservations)
  resto: Resto;

}
