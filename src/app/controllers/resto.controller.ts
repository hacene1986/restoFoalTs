import {
  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,
  HttpResponseNotFound, HttpResponseOK, Post
} from '@foal/core';
import {getRepository} from 'typeorm';
import {Resto} from '../entities';
//import { ApiController } from '../controllers';
export class RestoController {

   //afficher liste des restos
   @Get('/list')
   async getRestos() {
     const restos = await getRepository(Resto).find();
     return new HttpResponseOK(restos);
   }
 
   @Post('/add')
   async postResto(ctx: Context) {
     // Create a new resto with the body of the HTTP request.
     const resto = new Resto();
     resto.name = ctx.request.body.name;
     resto.street = ctx.request.body.street;
     resto.zipCode = ctx.request.body.zipCode;
     resto.city = ctx.request.body.city;
 
     // Save the resto in the database.
     await getRepository(Resto).save(resto);
 
     // Return the new resto with the id generated by the database. The status is 201.
     return new HttpResponseCreated(resto);


}
}