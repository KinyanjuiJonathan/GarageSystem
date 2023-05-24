import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import { Text } from '@rneui/themed'
import {Button} from '@rneui/base'
import { colors, constants } from '../../utils'

const EspecialityItem = ({item}) => {
    const {name, levels, image, onPress} = item
  return (
    <View style={{backgroundColor: colors.white, elevation: 5, borderRadius: 10, padding: 10,}}>
      <View style={{flexDirection: 'row', flex:1, display: 'flex', justifyContent: 'space-between'}}>
        <View style={{flexDirection:'row'}}>
            <View style={{padding: 10, backgroundColor: '#F7EBFF', borderRadius: 10}}>
                <Image source={{uri: image}} style={{width:70, height: 70}} /> 
            </View>
            <View style={{justifyContent: 'center', marginLeft: 10}}>
                <Text style={{fontFamily: constants.openSansBold, fontSize: 18}}>{name}</Text>
                <Text style={{color: '#9F9F9F', fontSize: 14, fontFamily: constants.openSansSemiBold}}>{levels.length} Niveles</Text>
            </View>
        </View>
        <View style={{justifyContent: 'center'}}>
            <Button
            icon={{
                name: 'arrow-right',
                type: 'font-awesome-5',
                size: 30,
                color: 'white',
            }}
            buttonStyle={{
                backgroundColor: colors.bluePurple,
                borderRadius: 10,
            }}
            onPress={onPress}
            />
        </View>
      </View>
    </View>
  )
}

export default EspecialityItem

const styles = StyleSheet.create({})