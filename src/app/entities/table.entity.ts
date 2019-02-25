// @ts-ignore : 'Column' is declared but its value is never read.
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { HttpResponseNotFound } from '@foal/core';
import { Resto } from './resto.entity';

@Entity()
export class Table {

  @PrimaryGeneratedColumn()
  id: number;
   
  @Column()
  numberTable: number;
  @Column()
  numberCouvert: number;
  @ManyToOne(type => Resto, resto => resto.tables)
  resto: Resto;
}