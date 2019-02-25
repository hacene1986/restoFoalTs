// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { ReservationController } from './reservation.controller';

describe('ReservationController', () => {

  let controller: ReservationController;

  beforeEach(() => controller = createController(ReservationController));

  describe('has a "foo" method that', () => {

    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(ReservationController, 'foo'), 'GET');
      strictEqual(getPath(ReservationController, 'foo'), '/');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({});
      ok(isHttpResponseOK(controller.foo(ctx)));
    });

  });

});
