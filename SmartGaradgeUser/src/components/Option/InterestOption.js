import { View, Image, StyleSheet, TouchableHighlightBase, TouchableOpacity } from 'react-native'
import { Text } from '@rneui/themed'
import React from 'react'
import { colors } from '../../utils'

const InterestOption = ({image, text, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={.5} style={styles.container} onPress={onPress}>
        <Image source={image} style={styles.image} /> 
        <View style={{justifyContent: 'center', display: 'flex', flex: 1, paddingLeft: 25, paddingRight: 25}}>
            <Text style={styles.text}>{text}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    image: {
        width: 112,
        height: 112
    },
    text: {
        fontSize: 17.5,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default InterestOption