import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'

const PartnerChatOption = ({onPress, item}) => {
    const { receiver, last_message, last_date } = item
    const { name, last_name, mother_last_name, id } = receiver
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={1} style={{backgroundColor: colors.white, flexDirection: 'row', justifyContent:'space-between', padding: 15, marginTop:10, borderRadius: 10, elevation: 5}}>
            <View style={{flexDirection: 'row'}}>
            <Image source={images.woman_chat} style={{height: 50, width: 50 , resizeMode: 'contain'}} /> 
            <View style={{justifyContent: 'center'}}>
                <Text style={{fontSize: 18, fontFamily: constants.openSansBold, marginLeft: 10}}>{`${name} ${last_name}`}</Text>
                <Text style={{fontSize: 14, fontFamily: constants.openSansRegular, marginLeft: 10}}>{last_message}</Text>
            </View>
            </View>
            <Text style={{fontSize: 14, fontFamily: constants.openSansRegular, marginLeft: 10, textAlignVertical: 'bottom'}}>{last_date}</Text>
        </TouchableOpacity>
    )
}

export default PartnerChatOption

const styles = StyleSheet.create({})