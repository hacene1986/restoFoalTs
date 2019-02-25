// 3p
import { createConnection } from 'typeorm';
import { Reservation } from '../app/entities';

export const schema = {
  additionalProperties: false,
  properties: {
    dateTime: {type: 'date'},
    midi: {type: 'boolean'},
    soir: {type: 'boolean'},
    table: {type: 'string'},
    nbCouverts: {type: 'number'},
    nameClient: {type: 'string'},
    tel: {type: 'string'},
  },
  required: [ 'dateTime', 'midi', 'soir', 'table', 'nbCouverts', 'nameClient', 'tel' ],
  type: 'object',
};

export async function main(args) {
  const connection = await createConnection();
 const reservation = new Reservation();
 reservation.dateTime = args.dateTime;
 reservation.midi = args.midi;
 reservation.soir = args.soir;
 reservation.table = args.table;
 reservation.nbCouverts = args.nbCouverts;
 reservation.nameClient = args.nameClient;
 reservation.tel = args.tel;
 reservation.resto = args.resto;

 console.log(await connection.manager.save(reservation));

 await connection.close();
  // Do something.
}
