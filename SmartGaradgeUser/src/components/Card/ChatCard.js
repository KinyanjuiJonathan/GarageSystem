import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, constants } from '../../utils'

const ChatCard = ({item}) => {
  const {is_transmitter, message, date_messsage} = item
  return (
    <View style={{flexDirection: 'row', justifyContent: is_transmitter ? 'flex-end' :'flex-start'}}>
        <View style={{width:250, backgroundColor: is_transmitter ? colors.tealishBlueIntense : colors.tealishBlue, padding: 10, borderRadius: 10, borderBottomLeftRadius:  is_transmitter ? 10: 0, borderBottomRightRadius:  is_transmitter ? 0: 10 }}>
          <Text style={{ fontSize: 18, flexWrap: 'wrap'}}>{message}</Text>
        </View>
    </View>
  )
}

export default ChatCard

const styles = StyleSheet.create({})