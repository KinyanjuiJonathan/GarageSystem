import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '@rneui/themed'
import React from 'react'
import { colors } from '../../utils'

const LevelOption = ({text, onPress = () => {}, active = false}) => {
  return (
      <TouchableOpacity style={[styles.button, {backgroundColor: active ? colors.white : colors.blue}]} disabled={!active} onPress={onPress} activeOpacity={.5}>
          <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  )
}

export default LevelOption

const styles = StyleSheet.create({
    button: {
        margin: 10,
        width: 120,
        height: 120,
        borderRadius: 100,
        borderColor: colors.pourple,
        borderWidth: 3,
        justifyContent: 'center'
    },
    text: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})