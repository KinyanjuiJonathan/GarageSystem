/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCourier = /* GraphQL */ `
  mutation CreateCourier(
    $input: CreateCourierInput!
    $condition: ModelCourierConditionInput
  ) {
    createCourier(input: $input, condition: $condition) {
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
export const updateCourier = /* GraphQL */ `
  mutation UpdateCourier(
    $input: UpdateCourierInput!
    $condition: ModelCourierConditionInput
  ) {
    updateCourier(input: $input, condition: $condition) {
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
export const deleteCourier = /* GraphQL */ `
  mutation DeleteCourier(
    $input: DeleteCourierInput!
    $condition: ModelCourierConditionInput
  ) {
    deleteCourier(input: $input, condition: $condition) {
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
export const createBasket = /* GraphQL */ `
  mutation CreateBasket(
    $input: CreateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    createBasket(input: $input, condition: $condition) {
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
export const updateBasket = /* GraphQL */ `
  mutation UpdateBasket(
    $input: UpdateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    updateBasket(input: $input, condition: $condition) {
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
export const deleteBasket = /* GraphQL */ `
  mutation DeleteBasket(
    $input: DeleteBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    deleteBasket(input: $input, condition: $condition) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
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
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
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
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
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
export const createGaradge = /* GraphQL */ `
  mutation CreateGaradge(
    $input: CreateGaradgeInput!
    $condition: ModelGaradgeConditionInput
  ) {
    createGaradge(input: $input, condition: $condition) {
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
export const updateGaradge = /* GraphQL */ `
  mutation UpdateGaradge(
    $input: UpdateGaradgeInput!
    $condition: ModelGaradgeConditionInput
  ) {
    updateGaradge(input: $input, condition: $condition) {
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
export const deleteGaradge = /* GraphQL */ `
  mutation DeleteGaradge(
    $input: DeleteGaradgeInput!
    $condition: ModelGaradgeConditionInput
  ) {
    deleteGaradge(input: $input, condition: $condition) {
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
export const createBasketService = /* GraphQL */ `
  mutation CreateBasketService(
    $input: CreateBasketServiceInput!
    $condition: ModelBasketServiceConditionInput
  ) {
    createBasketService(input: $input, condition: $condition) {
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
export const updateBasketService = /* GraphQL */ `
  mutation UpdateBasketService(
    $input: UpdateBasketServiceInput!
    $condition: ModelBasketServiceConditionInput
  ) {
    updateBasketService(input: $input, condition: $condition) {
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
export const deleteBasketService = /* GraphQL */ `
  mutation DeleteBasketService(
    $input: DeleteBasketServiceInput!
    $condition: ModelBasketServiceConditionInput
  ) {
    deleteBasketService(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createOrderService = /* GraphQL */ `
  mutation CreateOrderService(
    $input: CreateOrderServiceInput!
    $condition: ModelOrderServiceConditionInput
  ) {
    createOrderService(input: $input, condition: $condition) {
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
export const updateOrderService = /* GraphQL */ `
  mutation UpdateOrderService(
    $input: UpdateOrderServiceInput!
    $condition: ModelOrderServiceConditionInput
  ) {
    updateOrderService(input: $input, condition: $condition) {
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
export const deleteOrderService = /* GraphQL */ `
  mutation DeleteOrderService(
    $input: DeleteOrderServiceInput!
    $condition: ModelOrderServiceConditionInput
  ) {
    deleteOrderService(input: $input, condition: $condition) {
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
export const createService = /* GraphQL */ `
  mutation CreateService(
    $input: CreateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    createService(input: $input, condition: $condition) {
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
export const updateService = /* GraphQL */ `
  mutation UpdateService(
    $input: UpdateServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    updateService(input: $input, condition: $condition) {
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
export const deleteService = /* GraphQL */ `
  mutation DeleteService(
    $input: DeleteServiceInput!
    $condition: ModelServiceConditionInput
  ) {
    deleteService(input: $input, condition: $condition) {
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
