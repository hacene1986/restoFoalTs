import {
  Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent,
  HttpResponseNotFound, HttpResponseOK, Post
} from '@foal/core';
import { getRepository } from 'typeorm';
import { Table } from '../entities';

export class TableController {

  @Get('/list')
  async getTables(){
    const tables = await getRepository(Table).find();
    return new HttpResponseOK(tables);
  }

  @Post('/add')
  async postTodo(ctx: Context) {
    // Create a new table with the body of the HTTP request.
    const table = new Table();
    table.numberTable = ctx.request.body.numberTable;
    table.numberCouvert = ctx.request.body.numberCouvert;
    table.resto = ctx.request.body.resto;
    // Save the todo in the database.
    await getRepository(Table).save(table);

    // Return the new todo with the id generated by the database. The status is 201.
    return new HttpResponseCreated(table);
  }

  @Get('/list/:resto')
  async getTablesResto(ctx: Context){
    const tables = await getRepository(Table).find({resto: ctx.request.params.resto});
    return new HttpResponseOK(tables);
  }

  @Get('/nbCouverts')
  async getNbCouverts(){
    var total = 0;
    const tables = await getRepository(Table).find();
    tables.forEach(table => {
      total += table.numberCouvert;
    })
    return new HttpResponseOK({total});
  }
}