import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'

const CupCard = ({item}) => {
    const {cup_image, active, name, speciality} = item
  return (
    <View style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10, padding: 15, alignItems: 'center'}}>
        {active ? 
      <Image source={{uri:cup_image }} style={{width: 70, height: 70, resizeMode: 'contain'}} /> 
        :
        <Image source={{uri: cup_image}} style={{width: 70, height: 70, resizeMode: 'contain', tintColor: colors.gray}} /> 
        }
      <View style={{flex:1, display: 'flex', justifyContent: 'center'}}>
      <Text style={{fontFamily: constants.openSansSemiBold, fontSize: 16, flexWrap: 'wrap', width: 130 }} numberOfLines={2}>{speciality} - {name}</Text>
      </View>
    </View>
  )
}

export default CupCard

const styles = StyleSheet.create({})