import { View, StyleSheet, Image, TouchableOpacity, FlatList, ToastAndroid, ActivityIndicator} from 'react-native'
import React, { Component } from 'react'
import { colors, constants, images } from '../../utils'
import {  Input, Text } from '@rneui/themed';
import {Button} from '@rneui/base'
import ChatCard from '../../components/Card/ChatCard';
import { apiContacts } from '../../services';
import firestore from '@react-native-firebase/firestore'
import { connect } from 'react-redux';

export class ChatSessionScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
        message: '',
        fullName: this.props.route.params.fullName,
        chats: [],
        isLoad: true,
        profileId: this.props.id
    };
    this.unsubscribe = null;
  }

  renderItem = ({item, index, array}) => {
    return (
      <ChatCard key={index} item={item} /> 
    )
  }

  getChats = async () => {
    try {
      const id = this.props.route.params.personId
      const response = await apiContacts.getAllChats({id})
      const {result, error, message}  = response
      if (error){
        this.setState({isLoad: true})
        ToastAndroid.show(message, ToastAndroid.LONG)
      }else{
        this.setState({chats: result.data, isLoad: false})
      }
    }catch (e) {
      this.setState({isLoad: true})
      ToastAndroid.show(e, ToastAndroid.LONG)
    }
  }

  initFirestoreChat = () => {
    const chatId = this.props.route.params.chatId
    const partnerId = this.props.route.params.personId
    const doc = `chat-${chatId}`
    let isActive = false
    this.unsubscribe = firestore()
      .collection('chats')
      .doc(doc)
      .onSnapshot(documentSnapshot => {
        if(isActive){
          console.log('Chat exists: ', documentSnapshot.exists);
          if (documentSnapshot.exists) {
            console.log('Chat data: ', documentSnapshot.data());
            console.log('Chat api: ', this.state.chats);
            const {userId, message, date}  = documentSnapshot.data()
            const { seconds } = date
            if (partnerId == userId){
              if (this.state.chats.length > 0){
                const lastChat = this.state.chats[0]
                const {date_seconds_message} = lastChat
                if (date_seconds_message === seconds)
                  return
              }
              const chats = this.state.chats
              chats.unshift({is_transmitter: false, message: message})
              this.setState({chats: chats})
            }
          }
        }
        isActive = true
      });
  }

  sendChat = async () => {
    try {
      // Keyboard.dismiss()
      if (this.state.message.trim() === '')
        return 
      const personId = this.props.route.params.personId
      const sendMessage = this.state.message
      this.setState({message: ''})
      const chats = this.state.chats
      chats.unshift({is_transmitter: true, message: sendMessage})
      this.setState({chats: chats})
      const response = await apiContacts.addChat({id: personId, message: sendMessage})
      const {result, error, message} = response
      if (error){
        ToastAndroid.show(message, ToastAndroid.SHORT)  
      }else{
        ToastAndroid.show(message, ToastAndroid.SHORT)  
      }
    }catch(e){
      ToastAndroid.show(e, ToastAndroid.SHORT)
    }
  }

  componentWillUnmount = () => {
    if (this.unsubscribe !== null) this.unsubscribe();
  }

  componentDidMount = async() => {
    this.getChats().then(() => this.initFirestoreChat())
    
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', marginTop: 17, marginBottom: 20}}>
          <Button
          icon={{
              name: 'arrow-left',
              type: 'font-awesome-5',
              size: 30,
              color: 'black',
          }}
          buttonStyle={{
              backgroundColor: colors.white,
              borderRadius: 10,
          }}
          containerStyle={{
              backgroundColor: colors.white,
              elevation: 4,
              borderRadius: 10,
              width: 60,
              paddingVertical: 5,
              marginRight: 20
          }}
          onPress={() => {
              this.props.navigation.goBack()
          }}
          />
          <View style={{justifyContent: 'center'}}>
          <Image source={images.woman_chat} style={{width: 50, height: 50, resizeMode: 'contain', marginRight: 10}} /> 
          </View>
          <Text style={{fontSize: 28, fontFamily: constants.openSansBold, textAlignVertical: 'center'}}>{this.state.fullName}</Text>  
        </View>
        {
          this.state.isLoad ? 
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator size="large" color={colors.magenta} />
            </View>
          :
          <>
            <FlatList 
              inverted
              contentContainerStyle={{paddingHorizontal: 0, paddingVertical:20 }}
              ItemSeparatorComponent={() => <View style={{height: 5}} /> }
              renderItem={this.renderItem}
              data={this.state.chats}
              keyExtractor={(item, index) => index}
            /> 
            <View style={{flexDirection: 'row'}}>
            <View style={{elevation: 5, backgroundColor: colors.white, borderRadius: 10, flex:1}}>
              <Input 
              inputContainerStyle={{borderBottomWidth: 0, paddingBottom: 0, paddingTop: 20, height: 30, paddingLeft: 0}}
              value={this.state.message} 
              placeholder='Escribe tu mensaje' 
              onChangeText={text => this.setState({message: text})}  />
            </View>
            <View style={{width: 10}} />
            <TouchableOpacity onPress={async () =>{await this.sendChat()} } activeOpacity={1} style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10, justifyContent: 'center', padding: 10}}>
                <Image source={images.send} style={{width: 30, height: 30, resizeMode: 'contain'}}/>
                </TouchableOpacity> 
            </View>
          </>
        }
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    display: 'flex',
    padding: 20
  },
  imageEnable: {
    resizeMode: 'contain', width: 40, height: 40
  },
  imageDisable: {
    resizeMode: 'contain', width: 40, height: 40, tintColor: colors.grayLight
  }
})

const mapStateToProps = (state) => {
  console.log('state =>', state )
  return {
    id: state.auth.profile.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ChatSessionScreen)