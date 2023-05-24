import { View, Text, StyleSheet, Button, Image, Alert, TextInput, TouchableOpacity, ScrollView, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../../models";
import { useNavigation } from "@react-navigation/native";




const MyAccount = () => {
  const [name, setName] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    DataStore.query(User).then((data) => {
      setName(data[0]?.name || '');
    });
  }, []);


  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    await updateUser();
    setRefreshing(false);
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
        <View style={[styles.profile, ]}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Image
              source={{ uri: 'https://icons.iconarchive.com/icons/custom-icon-design/flatastic-1/512/edit-icon.png' }}
              style={styles.editIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
          <Image
            style={styles.profilePicture}
            source={{ uri: 'https://e7.pngegg.com/pngimages/352/132/png-clipart-cartoon-graduation-ceremony-boy-doctoral-graduates-comics-hat.png' }}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.balance}>Balance: 00.0</Text>
        </View>
      <ScrollView
       contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
       refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Image
            style={styles.buttonImage}
            source={{ uri: 'https://previews.123rf.com/images/faysalfarhan/faysalfarhan1711/faysalfarhan171148050/90435993-favourite-heart-icon-isolated-on-orange-round-button-abstract-illustration.jpg' }}
          />
          <Text style={styles.buttonText}>Favorites</Text>
        </View>
        <View style={styles.button}>
          <Image
            style={styles.buttonImage}
            source={{ uri: 'https://w7.pngwing.com/pngs/983/608/png-transparent-wallet-computer-icons-wallet-brown-leather-material-thumbnail.png' }}
          />
          <Text style={styles.buttonText}>Wallet</Text>
        </View>
        <View style={styles.button}>
          <Image
            style={styles.buttonImage}
            source={{ uri: 'https://image.pngaaa.com/203/187203-middle.png' }}
          />
          <Text style={styles.buttonText}>Orders</Text>
        </View>
      </View>


        <View style={{ paddingHorizontal: 20,  paddingBottom: 40  }}>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/109/109160.png' }}
          />
          <Text style={styles.iconText}>Promotions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/109/109159.png' }}
          />
          <Text style={styles.iconText}>Help</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3668/3668566.png' }}
          />
          <Text style={styles.iconText}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3300/3300227.png' }}
          />
          <Text style={styles.iconText}>Create shop</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3084/3084558.png' }}
          />
          <Text style={styles.iconText}>Invite friends</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2807/2807137.png' }}
          />
          <Text style={styles.iconText}>Privacy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image
            style={styles.icon}
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2109/2109611.png' }}
          />
          <Text style={styles.iconText}>Earn by delivering</Text>
        </TouchableOpacity>
        <Text
        onPress={() => Auth.signOut()}
        style={{ textAlign: "center", color: "red", margin: 10 }}
        >
        Sign out
        </Text>
      </View>
    </ScrollView>
</SafeAreaView>
);
};

export default MyAccount;

const styles = StyleSheet.create({
  editIcon: {
    position: 'absolute',
    top: 0,
    right: -150,
    width: 20,
    height: 20,
  },
  profile: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '33%',
    backgroundColor: '#fff',
    zIndex: 1,
    top: 0,
    left: 0,
    zIndex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginTop: 10,
  },
  name: {
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '23%',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 12,
  },
  input: {
    height: 50,
    margin: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  iconButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});
