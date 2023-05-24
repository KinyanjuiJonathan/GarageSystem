import { View, Text, StyleSheet, FlatList, Pressable, Modal, TextInput, TouchableOpacity } from "react-native";
import BasketServiceItem from "../../components/BasketServiceItem";
import { useBasketContext } from "../../contexts/BasketContext";
import { useOrderContext } from "../../contexts/OrderContext";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';


const Basket = () => {
  const { garadge, basketServices, totalPrice } = useBasketContext();
  const { createOrder } = useOrderContext();
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const amount = totalPrice.toFixed(2);

  const onCreateOrder = async () => {
    const newOrder = await createOrder(phoneNumber);
    navigation.navigate("OrdersTab", {
      screen: "Order",
      params: { id: newOrder.id },
    });
  };
  const handleButtonPress = () => {
    setModalVisible(true);
    };
    
    const handleInputChange = (text) => {
    setPhoneNumber(text);
    };
    
    const handleSavePress = () => {
    // Do something with the phone number
    console.log(phoneNumber);
    setModalVisible(false);
    onCreateOrder();
    };
    
    return (
      <View style={styles.page}>
        <Text style={styles.name}>{garadge?.name}</Text>
  
        <Text style={{ fontWeight: "bold", marginTop: 20, fontSize: 19 }}>
          Your items
        </Text>
  
        <FlatList
          data={basketServices}
          renderItem={({ item }) => <BasketServiceItem basketService={item} />}
        />
  
        <View style={styles.separator} />
  
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>
            Create order &#8226; ${amount}
          </Text>
        </TouchableOpacity>
  
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Enter your Mpesa number</Text>
            <TextInput 
              style={styles.modalInput}
              keyboardType="phone-pad"
              onChangeText={handleInputChange}
              value={phoneNumber}
            />
            <View style={styles.modalBtnContainer}>
              <TouchableOpacity style={styles.modalBtn} onPress={handleSavePress}>
                <Text style={styles.modalBtnText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalBtn} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      width: "100%",
      paddingVertical: 40, // temp fix
      padding: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: "600",
      marginVertical: 10,
    },
    separator: {
      height: 1,
      backgroundColor: "lightgrey",
      marginVertical: 10,
    },
    button: {
      backgroundColor: "black",
      marginTop: "auto",
      padding: 20,
      alignItems: "center",
    },
    buttonText: {
      color: "white",
      fontWeight: "600",
      fontSize: 18,
    },
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "600",
      marginBottom: 20,
    },
    modalInput: {
      width: "80%",
      height: 40,
      borderWidth: 1,
      borderColor: "lightgrey",
      marginVertical: 10,
      paddingHorizontal: 10,
      borderRadius: 5
    },
    modalBtnContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "60%"
    },
    modalBtn: {
      padding: 10,
      backgroundColor: "black",
      borderRadius: 5
    },
    modalBtnText: {
      color: "white",
      fontWeight: "600",
      fontSize: 18,
    }
  });
    
  export default Basket;
  


  

