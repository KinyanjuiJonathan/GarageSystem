import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import { Text } from '@rneui/themed'
import React from 'react'
import { colors, constants, images } from '../../utils'

const BotChatOption = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={{backgroundColor: colors.white, flexDirection: 'row', justifyContent:'space-between', padding: 15, marginTop:10, borderRadius: 10, elevation: 5}}>
        <View style={{flexDirection: 'row'}}>
        <Image source={images.alice_bot} style={{height: 50, width: 50 , resizeMode: 'contain'}} /> 
        <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontFamily: constants.openSansBold, marginLeft: 10}}>Sofia</Text>
            <Text style={{fontSize: 14, fontFamily: constants.openSansRegular, marginLeft: 10}}>Bot asistente</Text>
        </View>
        </View>
        <View style={{justifyContent: 'center'}}>
        <Image source={images.mail} style={{height: 30, width: 30 , resizeMode: 'contain', alignSelf: 'flex-end'}} /> 
        </View>
    </TouchableOpacity>
  )
}

export default BotChatOption

const styles = StyleSheet.create({})