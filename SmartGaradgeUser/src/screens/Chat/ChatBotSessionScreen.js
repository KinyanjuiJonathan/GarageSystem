import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  FlatList,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native'
import {Button} from '@rneui/base'
import { Input, Text } from '@rneui/themed';
import AWS from 'aws-sdk/dist/aws-sdk-react-native'
import { colors, constants, images } from '../../utils'
import ChatCard from '../../components/Card/ChatCard';


// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:722ab7c1-121d-4140-9100-74e6555ef8fb',
});
AWS.config.update({
  secretAccessKey: 'DcyR3mVCHCC3AP6NT3u0u6A+ECyzplOq1kMtKe52',
  accessKeyId: 'AKIAQ3V7Z464CC7X5QSR',
  region: "us-east-1",

});
let lexRunTime = new AWS.LexRuntime()
let lexUserId = 'mediumBot' + Date.now()


const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  messages: {
      flex: 1,
      marginTop: 20,
},
  botMessages: {
      color: 'black',
      backgroundColor: 'white',
      padding: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      marginBottom: 0,
      borderTopRightRadius: 20,
      alignSelf: 'flex-start',
      bottom: 23,
      textAlign: 'left',
      width: '75%'
  },
userMessages: {
      backgroundColor: '#40AD4D',
      color: 'white',
      padding: 10,
      marginBottom: 10,
      marginRight: 10,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      width: '65%',
      alignSelf: 'flex-end',
      textAlign: 'left'
  },
textInput: {
      flex: 2,
      paddingLeft: 15
  },
  responseContainer : {
      flexDirection: 'row',
      marginTop: 20,
      marginBottom: 0,
  },
  inputContainer: {
      flexDirection: 'row',
      backgroundColor: '#EEEFFA',
  },
})
export default class ChatBotSessionScreen extends Component {
  constructor(props) {
      super(props)
  this.state = {
          userInput: '',
          messages: [],
          inputEnabled: true,
      }
  }
// Sends Text to the lex runtime
  handleTextSubmit() {
      let inputText = this.state.userInput.trim()
      if (inputText !== '')
          this.showRequest(inputText)
  }
// Populates screen with user inputted message
  showRequest(inputText) {
      // Add text input to messages in state
      let oldMessages = Object.assign([], this.state.messages)
      oldMessages.push({from: 'user', msg: inputText})
      this.setState({
          messages: oldMessages,
          userInput: '',
          inputEnabled: false
      })
      this.sendToLex(inputText)
          
  }
// Responsible for sending message to lex
  sendToLex(message) {
      let params = {
          botAlias: '$LATEST',
          botName: 'Bot',
          inputText: message,
          userId: lexUserId,
      }
      lexRunTime.postText(params, (err, data) => {
          if(err) {
              // TODO SHOW ERROR ON MESSAGES
              console.log(err)
          }
          if (data) {
              this.showResponse(data)
          }
      })
  }
showResponse(lexResponse) {
      let lexMessage = lexResponse.message
      let oldMessages = Object.assign([], this.state.messages)
      oldMessages.push({from: 'bot', msg: lexMessage})
      this.setState({
          messages: oldMessages,
          inputEnabled: true 
      })
  }
renderTextItem(item) {
      let style,
          responseStyle
      if (item.from === 'bot') {
          style = styles.botMessages
          responseStyle = styles.responseContainer
      } else {
          style = styles.userMessages
          responseStyle = {}
      }
      return (
          <View style={responseStyle}>
              <Text style={style}>{item.msg}</Text>
          </View>
      )
  }
render(){
      return(
          <View style={styles.container}>
              <View style={styles.messages}>
                  <FlatList 
                      data={this.state.messages}
                      renderItem={({ item }) =>    this.renderTextItem(item)}
                      keyExtractor={(item, index) => index}
                      extraData={this.state.messages}
                  />
              </View>
              <View style={styles.inputContainer}>
                  <TextInput
                      onChangeText={(text) => this.setState({userInput: text})}
                      value={this.state.userInput}
                      style={styles.textInput}
                      editable={this.state.inputEnabled}
                      placeholder={'Type here to talk!'}
                      autoFocus={true}
                      onSubmitEditing={this.handleTextSubmit.bind(this)}
                  />
              </View>
          </View>
)
  }
}





// export class ChatBotSessionScreen extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       userInput: '',
//       chats: [],
//       inputEnabled: true,
//     }
//   }
//   // Sends Text to the lex runtime
//   handleTextSubmit() {
//     let inputText = this.state.userInput.trim()
//     if (inputText !== '')
//       this.showRequest(inputText)
//   }
//   // Populates screen with user inputted message
//   showRequest(inputText) {
//     // Add text input to messages in state
//     let oldChats = Object.assign([], this.state.chats)
//     oldChats.push({ from: 'user', msg: inputText })
//     this.setState({
//       chats: oldChats,
//       userInput: '',
//       inputEnabled: false
//     })
//     this.sendToLex(inputText)

//   }
//   // Responsible for sending message to lex
//   sendToLex(message) {
//     let params = {
//       botAlias: '$LATEST',
//       botName: 'Book_Pickup',
//       inputText: message,
//       userId: lexUserId,
//     }
//     lexRunTime.postText(params, (err, data) => {
//       if (err) {
//         // TODO SHOW ERROR ON MESSAGES
//         console.log('error', err)
//       }
//       if (data) {
//         console.log('data => ', data)
//         this.showResponse(data)
//       }
//     })
//   }
//   showResponse(lexResponse) {
//     let lexMessage = lexResponse.message
//     let oldChats = Object.assign([], this.state.chats)
//     oldChats.push({ from: 'bot', msg: lexMessage })
//     this.setState({
//       chats: oldChats,
//       inputEnabled: true
//     })
//   }

//   renderItem = ({item, index, array}) => {

//     let info = item
//     info.is_transmitter = item.from === 'bot' ? false : true
//     info.message = item.msg

//     return (
//       <ChatCard key={index} item={info} /> 
//     )
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={{ flexDirection: 'row', marginTop: 17, marginBottom: 20 }}>
//           <Button
//             icon={{
//               name: 'arrow-left',
//               type: 'font-awesome-5',
//               size: 30,
//               color: 'black',
//             }}
//             buttonStyle={{
//               backgroundColor: colors.white,
//               borderRadius: 10,
//             }}
//             containerStyle={{
//               backgroundColor: colors.white,
//               elevation: 4,
//               borderRadius: 10,
//               width: 60,
//               paddingVertical: 5,
//               marginRight: 20
//             }}
//             onPress={() => {
//               this.props.navigation.goBack()
//             }}
//           />
//           <View style={{ justifyContent: 'center' }}>
//             {/* <Image source={images.woman_chat} style={{ width: 50, height: 50, resizeMode: 'contain', marginRight: 10 }} /> */}
//           </View>
//           <Text style={{ fontSize: 28, textAlignVertical: 'center' }}>Smart garage bot</Text>
//         </View>
//         <FlatList
//           // inverted
//           contentContainerStyle={{ paddingHorizontal: 0, paddingVertical: 20 }}
//           ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
//           renderItem={this.renderItem}
//           data={this.state.chats}
//           extraData={this.state.chats}
//           keyExtractor={(item, index) => index}
//         />
//         <View style={{ flexDirection: 'row' }}>
//           <View style={{ elevation: 5, backgroundColor: colors.white, borderRadius: 10, flex: 1 }}>
//             <Input
//               inputContainerStyle={{ borderBottomWidth: 0, paddingBottom: 0, paddingTop: 20, height: 30, paddingLeft: 0 }}
//               autoFocus={true}
//               value={this.state.userInput}
//               placeholder='Escribe tu mensaje'
//               onSubmitEditing={this.handleTextSubmit.bind(this)}
//               onChangeText={(text) => this.setState({ userInput: text })}
//             />
//           </View>
//           <View style={{ width: 10 }} />
//           <TouchableOpacity onPress={this.handleTextSubmit.bind(this)} activeOpacity={1} style={{ backgroundColor: colors.white, elevation: 5, borderRadius: 10, justifyContent: 'center', padding: 10 }}>
//             {/* <Image source={images.send} style={{ width: 30, height: 30, resizeMode: 'contain' }} /> */}
//           </TouchableOpacity>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: colors.white,
//     flex: 1,
//     display: 'flex',
//     padding: 20
//   },
//   imageEnable: {
//     resizeMode: 'contain', width: 40, height: 40
//   },
//   imageDisable: {
//     resizeMode: 'contain', width: 40, height: 40, tintColor: colors.grayLight
//   }
// })


// export default ChatBotSessionScreen