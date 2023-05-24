import { useState, useEffect, useCallback } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  RefreshControl,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import GaradgeItem from "../../components/GaradgeItem";
import { DataStore } from "aws-amplify";
import { Garadge } from "../../models";
import Searchbar from "../../components/SearchbarItem";
import Categories from "../../components/CategoryItem";
import { isPointWithinRadius } from "geolib";
import { useAuthContext } from "../../contexts/AuthContext";
import GroceryScreen from "../../components/NothingItem";

export default function HomeScreen() {
  const { dbUser } = useAuthContext();
  const [garadges, setGaradges] = useState([]);
  const [region, setRegion] = useState({
    latitude: dbUser?.lat,
    longitude: dbUser?.lng,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  if (!dbUser) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }
  if (!garadges) {
    return <ActivityIndicator size={"large"} color="gray" />;
  }

  const getGaradges = (location) => {
    const data = garadges.filter((garadge) => {
      let radius = isPointWithinRadius(
        { latitude: garadge?.lat, longitude: garadge?.lng },
        { latitude: location.latitude, longitude: location.longitude },
        15000
      );

      if (radius) {
        console.log(location.latitude, location.longitude);
        return true;
      }
      return false;
    });
    return data;
  };

  const [currentResData, setCurrentResData] = useState([]);
  console.log(region);
  useEffect(() => {
    if (!dbUser) {
      return <ActivityIndicator size={"large"} color="gray" />;
    }
    setCurrentResData(getGaradges(region));
    console.log(getGaradges(region));
  }, [garadges]);

  const setRegionNew = (location) => {
    const data = getGaradges(location);
    setCurrentResData(data);
  };
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    DataStore.query(Garadge).then((data) => setGaradges(data));
    ToastAndroid.show("Garadge are updated", ToastAndroid.SHORT);
    setRefreshing(false);
  }, []);

  
  useEffect(() => {
    DataStore.query(Garadge).then((data) => setGaradges(data));
  }, []);

  return (
    <View style={styles.page}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <Searchbar region={region} setRegion={setRegionNew} />
        <Categories />
      </View>
      <>
        {currentResData.length > 0 ? (
          <FlatList
            data={currentResData}
            renderItem={({ item }) => <GaradgeItem garadge={item} />}
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        ) : (
          <View style={{ marginTop: 5, padding: 15, backgroundColor: "white" }}>
            <GroceryScreen />
          </View>
        )}
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 10,
    marginBottom: 170,
  },
});