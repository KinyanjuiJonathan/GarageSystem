import { View, Text, Image } from "react-native";
import styles from "./styles";

const DEFAULT_IMAGE =
  "https://i1.wp.com/autoserve1.com/wp-content/uploads/fancycrave-252347-unsplash-e1555517331813.jpg?fit=1200%2C679";

const GaradgeHeader = ({ garadge }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: garadge.image.startsWith("http")
            ? garadge.image
            : DEFAULT_IMAGE,
        }}
        style={styles.image}
      />
    
      <View style={styles.container}>
        <Text style={styles.title}>{garadge.name}</Text>
        <Text style={styles.subtitle}>
          Delivery Fee {garadge.deliveryFee.toFixed(0)}{"   "} &#8226; ETA: {garadge.minDeliveryTime}-
          {garadge.maxDeliveryTime} minutes
        </Text>
        <Text style={styles.menuTitle}>Services</Text>
      </View>
    </View>
  );
};

export default GaradgeHeader;
