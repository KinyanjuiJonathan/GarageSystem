import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";


const DEFAULT_IMAGE =
  "https://images.pexels.com/photos/4488636/pexels-photo-4488636.jpeg?auto=compress&cs=tinysrgb&w=400";

const GaradgeItem = ({ garadge }) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Garadge", { id: garadge.id });
  };

  return (
    <Pressable onPress={onPress} style={styles.garadgeContainer}>
      <Image
        source={{
          uri: garadge.image.startsWith("http")
            ? garadge.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
      <View style={styles.row}>
        <View>
          <Text style={styles.title}>{garadge.name}</Text>
          <Text style={styles.subtitle}>
            Delivery Fee: {garadge.deliveryFee.toFixed(0)} {" "} {" "} &#8226;{" "} ETA: {" "} 
            {garadge.minDeliveryTime}-{garadge.maxDeliveryTime} minutes
          </Text>
        </View>

        <View style={styles.rating}>
          <Text>{garadge.rating.toFixed(1)}</Text>
        </View>
      </View>

    </Pressable>
    
  );
};

export default GaradgeItem;

const styles = StyleSheet.create({
  garadgeContainer: {
    width: "100%",
    marginVertical: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
    marginVertical: 5,
    color: "black",
  },
  subtitle: {
    color: "grey",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    marginLeft: "auto",
    backgroundColor: "lightgray",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});
