import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum TransportationModes {
  DRIVING = "DRIVING",
  BICYCLING = "BICYCLING"
}

export enum OrderStatus {
  NEW = "NEW",
  INPROGRESS = "INPROGRESS",
  READY_FOR_PICKUP = "READY_FOR_PICKUP",
  PICKED_UP = "PICKED_UP",
  COMPLETED = "COMPLETED",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED"
}



type EagerCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode?: TransportationModes | keyof typeof TransportationModes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCourier = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Courier, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly sub: string;
  readonly lat?: number | null;
  readonly lng?: number | null;
  readonly transportationMode?: TransportationModes | keyof typeof TransportationModes | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Courier = LazyLoading extends LazyLoadingDisabled ? EagerCourier : LazyCourier

export declare const Courier: (new (init: ModelInit<Courier>) => Courier) & {
  copyOf(source: Courier, mutator: (draft: MutableModel<Courier>) => MutableModel<Courier> | void): Courier;
}

type EagerBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketServices?: (BasketService | null)[] | null;
  readonly userID: string;
  readonly garadgeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBasket = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Basket, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly BasketServices: AsyncCollection<BasketService>;
  readonly userID: string;
  readonly garadgeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Basket = LazyLoading extends LazyLoadingDisabled ? EagerBasket : LazyBasket

export declare const Basket: (new (init: ModelInit<Basket>) => Basket) & {
  copyOf(source: Basket, mutator: (draft: MutableModel<Basket>) => MutableModel<Basket> | void): Basket;
}

type EagerOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total: number;
  readonly OrderServices?: (OrderService | null)[] | null;
  readonly Garadge?: Garadge | null;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly userID: string;
  readonly Courier?: Courier | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderGaradgeId?: string | null;
  readonly orderCourierId?: string | null;
}

type LazyOrder = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Order, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly total: number;
  readonly OrderServices: AsyncCollection<OrderService>;
  readonly Garadge: AsyncItem<Garadge | undefined>;
  readonly status: OrderStatus | keyof typeof OrderStatus;
  readonly userID: string;
  readonly Courier: AsyncItem<Courier | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderGaradgeId?: string | null;
  readonly orderCourierId?: string | null;
}

export declare type Order = LazyLoading extends LazyLoadingDisabled ? EagerOrder : LazyOrder

export declare const Order: (new (init: ModelInit<Order>) => Order) & {
  copyOf(source: Order, mutator: (draft: MutableModel<Order>) => MutableModel<Order> | void): Order;
}

type EagerGaradge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Garadge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating: number;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Services?: (Service | null)[] | null;
  readonly Baskets?: (Service | null)[] | null;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGaradge = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Garadge, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly deliveryFee: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly rating: number;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Services: AsyncCollection<Service>;
  readonly Baskets: AsyncCollection<Service>;
  readonly adminSub?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Garadge = LazyLoading extends LazyLoadingDisabled ? EagerGaradge : LazyGaradge

export declare const Garadge: (new (init: ModelInit<Garadge>) => Garadge) & {
  copyOf(source: Garadge, mutator: (draft: MutableModel<Garadge>) => MutableModel<Garadge> | void): Garadge;
}

type EagerBasketService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly basketID: string;
  readonly Service?: Service | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketServiceServiceId?: string | null;
}

type LazyBasketService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasketService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly basketID: string;
  readonly Service: AsyncItem<Service | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly basketServiceServiceId?: string | null;
}

export declare type BasketService = LazyLoading extends LazyLoadingDisabled ? EagerBasketService : LazyBasketService

export declare const BasketService: (new (init: ModelInit<BasketService>) => BasketService) & {
  copyOf(source: BasketService, mutator: (draft: MutableModel<BasketService>) => MutableModel<BasketService> | void): BasketService;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders?: (Basket | null)[] | null;
  readonly Baskets?: (Basket | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly name: string;
  readonly address: string;
  readonly lat: number;
  readonly lng: number;
  readonly Orders: AsyncCollection<Basket>;
  readonly Baskets: AsyncCollection<Basket>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerOrderService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly Service?: Service | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderServiceServiceId?: string | null;
}

type LazyOrderService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<OrderService, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly quantity: number;
  readonly orderID: string;
  readonly Service: AsyncItem<Service | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly orderServiceServiceId?: string | null;
}

export declare type OrderService = LazyLoading extends LazyLoadingDisabled ? EagerOrderService : LazyOrderService

export declare const OrderService: (new (init: ModelInit<OrderService>) => OrderService) & {
  copyOf(source: OrderService, mutator: (draft: MutableModel<OrderService>) => MutableModel<OrderService> | void): OrderService;
}

type EagerService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly description?: string | null;
  readonly price: number;
  readonly garadgeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyService = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Service, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image: string;
  readonly description?: string | null;
  readonly price: number;
  readonly garadgeID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Service = LazyLoading extends LazyLoadingDisabled ? EagerService : LazyService

export declare const Service: (new (init: ModelInit<Service>) => Service) & {
  copyOf(source: Service, mutator: (draft: MutableModel<Service>) => MutableModel<Service> | void): Service;
}