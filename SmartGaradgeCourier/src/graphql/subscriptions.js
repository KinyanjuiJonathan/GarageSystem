/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCourier = /* GraphQL */ `
  subscription OnCreateCourier($filter: ModelSubscriptionCourierFilterInput) {
    onCreateCourier(filter: $filter) {
      id
      name
      sub
      lat
      lng
      transportationMode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCourier = /* GraphQL */ `
  subscription OnUpdateCourier($filter: ModelSubscriptionCourierFilterInput) {
    onUpdateCourier(filter: $filter) {
      id
      name
      sub
      lat
      lng
      transportationMode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCourier = /* GraphQL */ `
  subscription OnDeleteCourier($filter: ModelSubscriptionCourierFilterInput) {
    onDeleteCourier(filter: $filter) {
      id
      name
      sub
      lat
      lng
      transportationMode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onCreateBasket(filter: $filter) {
      id
      BasketServices {
        nextToken
        startedAt
      }
      userID
      garadgeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onUpdateBasket(filter: $filter) {
      id
      BasketServices {
        nextToken
        startedAt
      }
      userID
      garadgeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket($filter: ModelSubscriptionBasketFilterInput) {
    onDeleteBasket(filter: $filter) {
      id
      BasketServices {
        nextToken
        startedAt
      }
      userID
      garadgeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
      id
      total
      OrderServices {
        nextToken
        startedAt
      }
      Garadge {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        adminSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      status
      userID
      Courier {
        id
        name
        sub
        lat
        lng
        transportationMode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderGaradgeId
      orderCourierId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
      id
      total
      OrderServices {
        nextToken
        startedAt
      }
      Garadge {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        adminSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      status
      userID
      Courier {
        id
        name
        sub
        lat
        lng
        transportationMode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderGaradgeId
      orderCourierId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
      id
      total
      OrderServices {
        nextToken
        startedAt
      }
      Garadge {
        id
        name
        image
        deliveryFee
        minDeliveryTime
        maxDeliveryTime
        rating
        address
        lat
        lng
        adminSub
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      status
      userID
      Courier {
        id
        name
        sub
        lat
        lng
        transportationMode
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderGaradgeId
      orderCourierId
    }
  }
`;
export const onCreateGaradge = /* GraphQL */ `
  subscription OnCreateGaradge($filter: ModelSubscriptionGaradgeFilterInput) {
    onCreateGaradge(filter: $filter) {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Services {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      adminSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateGaradge = /* GraphQL */ `
  subscription OnUpdateGaradge($filter: ModelSubscriptionGaradgeFilterInput) {
    onUpdateGaradge(filter: $filter) {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Services {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      adminSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteGaradge = /* GraphQL */ `
  subscription OnDeleteGaradge($filter: ModelSubscriptionGaradgeFilterInput) {
    onDeleteGaradge(filter: $filter) {
      id
      name
      image
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      lat
      lng
      Services {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      adminSub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateBasketService = /* GraphQL */ `
  subscription OnCreateBasketService(
    $filter: ModelSubscriptionBasketServiceFilterInput
  ) {
    onCreateBasketService(filter: $filter) {
      id
      quantity
      basketID
      Service {
        id
        name
        image
        description
        price
        garadgeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketServiceServiceId
    }
  }
`;
export const onUpdateBasketService = /* GraphQL */ `
  subscription OnUpdateBasketService(
    $filter: ModelSubscriptionBasketServiceFilterInput
  ) {
    onUpdateBasketService(filter: $filter) {
      id
      quantity
      basketID
      Service {
        id
        name
        image
        description
        price
        garadgeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketServiceServiceId
    }
  }
`;
export const onDeleteBasketService = /* GraphQL */ `
  subscription OnDeleteBasketService(
    $filter: ModelSubscriptionBasketServiceFilterInput
  ) {
    onDeleteBasketService(filter: $filter) {
      id
      quantity
      basketID
      Service {
        id
        name
        image
        description
        price
        garadgeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketServiceServiceId
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      sub
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      sub
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      sub
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateOrderService = /* GraphQL */ `
  subscription OnCreateOrderService(
    $filter: ModelSubscriptionOrderServiceFilterInput
  ) {
    onCreateOrderService(filter: $filter) {
      id
      quantity
      orderID
      Service {
        id
        name
        image
        description
        price
        garadgeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderServiceServiceId
    }
  }
`;
export const onUpdateOrderService = /* GraphQL */ `
  subscription OnUpdateOrderService(
    $filter: ModelSubscriptionOrderServiceFilterInput
  ) {
    onUpdateOrderService(filter: $filter) {
      id
      quantity
      orderID
      Service {
        id
        name
        image
        description
        price
        garadgeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderServiceServiceId
    }
  }
`;
export const onDeleteOrderService = /* GraphQL */ `
  subscription OnDeleteOrderService(
    $filter: ModelSubscriptionOrderServiceFilterInput
  ) {
    onDeleteOrderService(filter: $filter) {
      id
      quantity
      orderID
      Service {
        id
        name
        image
        description
        price
        garadgeID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderServiceServiceId
    }
  }
`;
export const onCreateService = /* GraphQL */ `
  subscription OnCreateService($filter: ModelSubscriptionServiceFilterInput) {
    onCreateService(filter: $filter) {
      id
      name
      image
      description
      price
      garadgeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateService = /* GraphQL */ `
  subscription OnUpdateService($filter: ModelSubscriptionServiceFilterInput) {
    onUpdateService(filter: $filter) {
      id
      name
      image
      description
      price
      garadgeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteService = /* GraphQL */ `
  subscription OnDeleteService($filter: ModelSubscriptionServiceFilterInput) {
    onDeleteService(filter: $filter) {
      id
      name
      image
      description
      price
      garadgeID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
