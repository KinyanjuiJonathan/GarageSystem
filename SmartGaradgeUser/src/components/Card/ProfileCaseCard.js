import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import { colors, constants, images } from '../../utils'

const ProfileCaseCard = ({item}) => {
  const {name, profession, age, city, appointment, image} = item
  return (
    <View>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
          <Image source={{uri: image}} style={{height: 70, width: 50, resizeMode: 'cover', borderRadius: 5}} />
          <View style={{marginLeft: 10, justifyContent: 'center', flex: 1}}>
                <Text style={{fontFamily: constants.openSansBold, fontSize: 18}}>{name}</Text>
                <Text style={{flexWrap: 'wrap', fontFamily: constants.openSansSemiBold, fontSize: 16}}>{profession}</Text>
                <Text style={{fontFamily: constants.openSansSemiBold, fontSize: 16}}>{age} años, {city}</Text>
          </View>
      </View>
      <Text style={{fontFamily: constants.openSansRegular, fontSize: 16, textAlign: 'justify'}}>{appointment}</Text>
    </View>
  )
}

export default ProfileCaseCard

const styles = StyleSheet.create({})