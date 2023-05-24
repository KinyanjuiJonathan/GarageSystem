import React, { Component } from 'react'
import { View , StyleSheet, FlatList, ToastAndroid, ActivityIndicator} from 'react-native'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'
// import { apiContacts } from '../../services';
import BotChatOption from '../../components/Option/BotChatOption';
import PartnerChatOption from '../../components/Option/PartnerChatOption';

export class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      isLoad: true
    };
    // this.controller = new AbortController();
  }

  // getContacts = async () => {
  //   try {
  //       const response = await apiContacts.getContacts()
  //       const {result, error, message} = response
  //       if (error){
  //         this.setState({isLoad: false})
  //         ToastAndroid.show(message, ToastAndroid.LONG)
  //       }else{
  //         this.setState({contacts: result.data, isLoad: false})
  //       }
  //   }catch (e) {
  //     this.setState({contacts: [], isLoad: false})
  //   }
  // }

  // goToICourses(){
  //   this.props.navigation.navigate('ICourse')
  // }

  // componentDidMount = async () => {
  //   await this.getContacts()
  //   this._unsubscribe = this.props.navigation.addListener('focus', async () => {
  //     await this.getContacts()
  //   });
  // }

  // componentWillUnmount() {
  //   this._unsubscribe();
  // }

  renderItem = ({index, item, separators}) => {

    const {id, name, last_name, mother_last_name} = item.receiver

    return (
    <View key={id.toString()}>
      <PartnerChatOption item={item} onPress={() => this.props.navigation.navigate('ChatSession', {
        chatId: item.id,
        personId: id, 
        fullName: `${name} ${last_name}`
      })}/> 
      {(index + 1) === this.state.contacts.length && 
        <View style={{height: 80}} /> 
      }
    </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 22, fontFamily: constants.openSansBold, marginBottom:10, marginHorizontal: 20, marginTop: 20}}>Chats</Text>
        {this.state.isLoad ? 
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color={colors.magenta} />
          </View>
        :
          <FlatList 
            renderItem={this.renderItem}
            ListHeaderComponent={() => 
              <View>
                <BotChatOption onPress={() => this.props.navigation.navigate('ChatBotSession')}/> 
                <View style={{height: 5, borderRadius: 30, backgroundColor: colors.tealishBlue, marginTop: 10, alignSelf: 'center', width: 200}} /> 
              </View>
            }
            keyExtractor={(item, index) => index.toString()}
            data={this.state.contacts}
            contentContainerStyle={{paddingHorizontal: 20}}
          />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex:1, 
    // padding: 20,
    display: 'flex',
  },
  title: {
    color: colors.pourple,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
})

export default ChatScreen