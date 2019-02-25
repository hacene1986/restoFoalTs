import {
  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,
  HttpResponseNotFound, HttpResponseOK, Post
} from '@foal/core';
import {getRepository} from 'typeorm';
import { User } from '../entities';

export class UserController {

   //afficher liste des restos
   @Get('/list')
   async getUser() {
     const users = await getRepository(User).find();
     return new HttpResponseOK(users);
   }
 
   @Post('/add')
   async postResto(ctx: Context) {
     // Create a new resto with the body of the HTTP request.
     const user = new User();
     user.email = ctx.request.body.email;
     user.password = ctx.request.body.password;
     // Save the resto in the database.
     await getRepository(User).save(user);
 
     // Return the new resto with the id generated by the database. The status is 201.
     return new HttpResponseCreated(user);


}

}