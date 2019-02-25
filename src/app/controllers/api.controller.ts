import { controller } from '@foal/core';
import { RestoController } from './resto.controller';
import { TableController } from './table.controller';
import { ReservationController } from './reservation.controller';

export class ApiController {
  subControllers = [
    controller('/resto', RestoController),
    controller('/table', TableController),
    controller('/reservation', ReservationController)

  ];
 

}
