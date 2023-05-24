import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'

const PartnerCard = ({item}) => {

    const {name, last_name, email, onPress, isYou} = item

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={1} style={{borderRadius: 10, elevation: 5, backgroundColor: colors.white, padding: 10}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{borderRadius: 30, borderWidth: 1, borderColor: colors.gray}}>
                <Image  source={images.profile} style={{borderRadius: 30, height: 50, width: 50, resizeMode: 'contain'}}/> 
                </View>
                <View style={{justifyContent: 'center', marginLeft: 10}}>
                    <Text style={{fontFamily: constants.openSansBold, fontSize: 16}}>
                        {`${name} ${last_name}`}
                    </Text>
                    <Text style={{color: '#6695FF', fontFamily: constants.openSansSemiBold }} >{email}</Text>
                </View>
            </View>
            {
              isYou === false && 
                <View style={{justifyContent: 'center'}}>
                    <Image source={images.chat} style={{resizeMode: 'contain', width: 30, height: 30}} /> 
                </View>
            }
      </View>
    </TouchableOpacity>
  )
}

export default PartnerCard

const styles = StyleSheet.create({})