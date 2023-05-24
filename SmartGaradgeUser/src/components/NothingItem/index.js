import React from "react";
import { View, Image, Text } from "react-native";

const GroceryScreen = () => {
  return (
    <>
      <View style={{ height: "75%", alignItems: "center", marginBottom: 200 }}>
        <Image
          source={require("../../../assets/images/store-open.gif")}
          style={{ width: 300, height: 300 }}
        />
        <Text style={{ marginTop: 20, fontSize: 18, letterSpacing: 0.4 }}>
          Sorry, Stores are not available right now!
        </Text>
        <Text style={{ fontSize: 15, color: "#525252", marginTop: 5 }}>
          Go to you near restaurant and eat 🍕🙃😉
        </Text>
      </View>
    </>
  );
};

export default GroceryScreen;