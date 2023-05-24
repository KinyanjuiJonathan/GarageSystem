// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TransportationModes = {
  "DRIVING": "DRIVING",
  "BICYCLING": "BICYCLING"
};

const OrderStatus = {
  "NEW": "NEW",
  "INPROGRESS": "INPROGRESS",
  "READY_FOR_PICKUP": "READY_FOR_PICKUP",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED",
  "ACCEPTED": "ACCEPTED",
  "DECLINED": "DECLINED"
};

const { Courier, Basket, Order, Garadge, BasketService, User, OrderService, Service } = initSchema(schema);

export {
  Courier,
  Basket,
  Order,
  Garadge,
  BasketService,
  User,
  OrderService,
  Service,
  TransportationModes,
  OrderStatus
};