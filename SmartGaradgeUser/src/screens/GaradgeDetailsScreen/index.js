import { useState, useEffect } from "react";
import {
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  Text,
  RefreshControl,
  ToastAndroid,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ServiceListItem from "../../components/ServiceListItem";
import Header from "./Header";
import styles from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { DataStore } from "aws-amplify";
import { Garadge, Service } from "../../models";
import { useBasketContext } from "../../contexts/BasketContext";

const GaradgeDetailsScreen = () => {
  const [garadge, setGaradge] = useState(null);
  const [services, setServices] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const route = useRoute();
  const navigation = useNavigation();

  const id = route.params?.id;

  const {
    setGaradge: setBasketGaradge,
    basket,
    basketServices,
  } = useBasketContext();

  const onRefresh = () => {
    setRefreshing(true);
    DataStore.query(Garadge, id).then(setGaradge);
    DataStore.query(Service, (service) => service.garadgeID("eq", id)).then(
    setServices
    );
    ToastAndroid.show("Services are updated", ToastAndroid.SHORT);
    setRefreshing(false);
    };

  useEffect(() => {
    if (!id) {
      return;
    }
    setBasketGaradge(null);
    // fetch the garadge with the id
    DataStore.query(Garadge, id).then(setGaradge);

    DataStore.query(Service, (service) => service.garadgeID("eq", id)).then(
      setServices
    );
  }, [id]);

  useEffect(() => {
    setBasketGaradge(garadge);
  }, [garadge]);

  if (!garadge) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  return (
    <View style={styles.page}>
      <FlatList
        refreshControl={ 
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={() => <Header garadge={garadge} />}
        data={services}
        renderItem={({ item }) => <ServiceListItem service={item} />}
        keyExtractor={(item) => item.name}
      />
      <Ionicons
        onPress={() => navigation.goBack()}
        name="arrow-back-circle"
        size={45}
        color="white"
        style={styles.iconContainer}
      />
      {basket && (
        <Pressable
          onPress={() => navigation.navigate("Basket")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Open basket ({basketServices.length})
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default GaradgeDetailsScreen;
