import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GaradgeDetailsScreen from "../screens/GaradgeDetailsScreen";
import ServiceDetailsScreen from "../screens/ServiceDetailsScreen";
import Basket from "../screens/Basket";
import OrdersScreen from "../screens/OrdersScreen";
import OrderDetails from "../screens/OrderDetails";
import ProfileScreen from "../screens/ProfileScreen";
import MyAccount from "../screens/MyAccount";
import { useAuthContext } from "../contexts/AuthContext";

import { Foundation, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import OrderDetailsNavigator from "./OrderDetailsNavigator";
import ChatBotSessionScreen  from "../screens/Chat/ChatBotSessionScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { dbUser } = useAuthContext();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {dbUser ? (
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
      ) : (
        <Stack.Screen name="Profile" component={ProfileScreen} />
      )}
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation name="home" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrdersTab"
        component={OrderStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="list-alt" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={MyAccountStackNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="user-alt" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Garages" component={HomeScreen} />
      <HomeStack.Screen
        name="Garadge"
        component={GaradgeDetailsScreen}
        options={{ headerShown: false 
        }}
        
      />
      <HomeStack.Screen name="Service" component={ServiceDetailsScreen} />
      <HomeStack.Screen name="Basket" component={Basket} />
      {/* <HomeStack.Screen name="MyAccount" component= {MyAccount }/>
      <HomeStack.Screen name="Profile" component= {ProfileScreen }/> */}
    </HomeStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrderStackNavigator = () => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Orders" component={OrdersScreen} />
      <OrdersStack.Screen
        name="Order"
        component={OrderDetailsNavigator}
        screenOptions={{ headerShown: false }}
      />
    </OrdersStack.Navigator>
  );
};

const MyAccountStack = createNativeStackNavigator();

const MyAccountStackNavigator = () => {
  return (
    <MyAccountStack.Navigator screenOptions={{ headerShown: false }}>
    <MyAccountStack.Screen 
        name="MyAccount" 
        component={MyAccount} 
      />
       <MyAccountStack.Screen name="Profile" component={ProfileScreen} />
    </MyAccountStack.Navigator>
  );
};

export default RootNavigator;