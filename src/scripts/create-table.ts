// 3p
import { createConnection } from 'typeorm';
import { Table } from '../app/entities';
export const schema = {
  additionalProperties: false,
  properties: {
    numberTable: {type: 'number'},
    numberCouvert: {type: 'number'},
  },
  required: [ 'numberTable', 'numberCouvert' ],
  type: 'object',
};

export async function main(args) {
  const connection = await createConnection();
 
  const table = new Table();
  table.numberTable = args.numberTable;
  table.numberCouvert = args.numberCouvert;
  table.resto = args.resto;
  
  console.log(await connection.manager.save(table));
  await connection.close();
}