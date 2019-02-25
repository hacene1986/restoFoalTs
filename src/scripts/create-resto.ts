// 3p
import { createConnection } from 'typeorm';
import {Resto, User} from '../app/entities';
export const schema = {
  additionalProperties: false,
  properties: {
    name: {type: 'string'},
    street: {type: 'string'},
    zipCode: {type: 'string'},
    city: {type: 'string'},
    owner: {type: 'string', format: 'email'}
  },
  required: [ 'name', 'street', 'zipCode', 'city' ],
  type: 'object',
};

export async function main(args) {
  const connection = await createConnection();
  const user = await connection.getRepository(User).findOne({email: args.owner});
  if (!user) {
    console.log('No user was found with the email ' + args.owner);
    return;
  }
  const resto = new Resto();
  resto.name = args.name;
  resto.street = args.street;
  resto.zipCode = args.zipCode;
  resto.city = args.city;
  resto.owner = args.owner;
  //resto.tables = args.tables;
  console.log(await connection.manager.save(resto));

  await connection.close();
  // Do something.
}