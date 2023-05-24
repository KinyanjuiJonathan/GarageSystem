import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Badge } from "@rneui/themed";
import moment from "moment";

const OrderListItem = ({ order }) => {
  const navigation = useNavigation();

  let statusToColor;
  if (order?.status === "DECLINED") {
    statusToColor = "error";
  } else if (
    order?.status === "ACCEPTED" ||
    order?.status === "PICKED_UP" ||
    order?.status === "READY_FOR_PICKUP" ||
    order?.status === "COOKING"
  ) {
    statusToColor = "warning";
  } else {
    statusToColor = "success";
  }

  const onPress = () => {
    navigation.navigate("Order", { id: order.id });
  };
  
  return (
    <Pressable
      onPress={onPress}
      style={{
        flexDirection: "row",
        margin: 10,
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Image
        source={{ uri: order.Garadge.image }}
        style={{ width: 75, height: 75, margin: 5 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 5, top: 5 }}>
        <Badge value={order.status} status={statusToColor} />
      </TouchableOpacity>

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          {order.Garadge.name}
        </Text>
        <Text style={{ marginVertical: 5 }}>
          Total Price &#8226; Ksh {Math.round(order?.total)}
        </Text>
        <Text>
          Order made {moment.utc(order?.createdAt).local().startOf("seconds").fromNow()}
        </Text>
      </View>
    </Pressable>
  );
};

export default OrderListItem;
