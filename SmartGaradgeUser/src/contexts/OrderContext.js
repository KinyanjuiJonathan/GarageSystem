import { createContext, useContext, useState, useEffect } from "react";
import {  DataStore } from "aws-amplify";
import { Order, OrderService, Basket, BasketService } from "../models";
import { useAuthContext } from "./AuthContext";
import { useBasketContext } from "./BasketContext";

const OrderContext = createContext({});

const OrderContextProvider = ({ children }) => {
  const { dbUser } = useAuthContext();
  const { garadge, totalPrice, basketServices, basket } = useBasketContext();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    DataStore.query(Order, (o) => o.userID("eq", dbUser?.id)).then(setOrders);
  }, [dbUser]);


  const createOrder = async (phoneNumber) => {

    const wholeNumber = Math.floor(totalPrice);
    const num= phoneNumber;
    const shs= wholeNumber;
    console.log("in the order context:", phoneNumber)

    //STK Push to AWS
    const sendSTKPush = async () => {
      const response = await fetch('https://0xsopdj5zl.execute-api.us-east-1.amazonaws.com/posting/mpesa', {
          method: 'POST',
          body: JSON.stringify({ num, shs }),
          headers: { 'Content-Type': 'application/json' },
      });
  
      if (!response.ok) {
          throw new Error(`STK push failed: ${response.statusText}`);
      }
    };  
    
     // create the order
    const newOrder = await DataStore.save(
      new Order({
        userID: dbUser.id,
        Garadge: garadge,
        status: "NEW",
        total: totalPrice,
      })
    );

    // send STK push
    await sendSTKPush(num, shs);

    // add all basketServices to the order
    await Promise.all(
      basketServices.map((basketService) =>
        DataStore.save(
          new OrderService({
            quantity: basketService.quantity,
            orderID: newOrder.id,
            Service: basketService.Service,
          })
        )
      )
    );

    // delete basket

  setOrders([...orders, newOrder]);

    return newOrder;

  };

  const getOrder = async (id) => {
    const order = await DataStore.query(Order, id);
    const orderServices = await DataStore.query(OrderService, (os) =>
      os.orderID("eq", id)
    );

    return { ...order, services: orderServices };
  };

  return (
    <OrderContext.Provider value={{ createOrder, orders, getOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;

export const useOrderContext = () => useContext(OrderContext);
