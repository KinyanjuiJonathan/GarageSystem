import { View, Text, StyleSheet, FlatList } from "react-native";


const BasketServiceItem = ({ basketService }) => {
  return (
    <View style={styles.row}>
      <View style={styles.quantityContainer}>
        <Text>{basketService.quantity}</Text>
        </View>
      {basketService && basketService.Service ? (
        <>
          <Text style={{ fontWeight: "600" }}>{basketService.Service.name}</Text>
          <Text style={{ marginLeft: "auto" }}>$ {basketService.Service.price}</Text>
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
    paddingHorizontal: 10,
  },

  quantityContainer: {
    backgroundColor: "lightgray",
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 10,
    borderRadius: 3,
  },
});

export default BasketServiceItem;
