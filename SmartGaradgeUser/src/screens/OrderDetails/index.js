import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import BasketServiceItem from "../../components/BasketServiceItem";

import styles from "./styles";
import { useOrderContext } from "../../contexts/OrderContext";
import { useEffect, useState } from "react";
import moment from "moment";


const OrderDetailsHeader = ({ order }) => {
  return (
    <View>
      <View style={styles.page}>
        <Image source={{ uri: order.Garadge.image }} style={styles.image} />

        <View style={styles.container}>
          <Text style={styles.title}>{order.Garadge.name}</Text>
          <Text style={styles.subtitle}>
            {order.status} &#8226; Order made{" "}
            {moment.utc(order?.createdAt).local().startOf("seconds").fromNow()}
          </Text>

          <Text style={styles.menuTitle}>Your orders</Text>
        </View>
      </View>
    </View>
  );
};

const OrderDetails = ({ id }) => {
  const [order, setOrder] = useState();
  const { getOrder } = useOrderContext();

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, []);

  if (!order) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  return (
    <FlatList
      ListHeaderComponent={() => <OrderDetailsHeader order={order} />}
      data={order.services}
      renderItem={({ item }) => <BasketServiceItem basketService={item} />}
    />
  );
};

export default OrderDetails;
