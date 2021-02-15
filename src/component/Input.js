import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = ({placeholder,...rest}) => {
    return (
        <View>
            <TextInput style={styles.input}placeholder={placeholder} {...rest}/>
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        borderColor:'#841584',
        borderRadius: 25,
        textAlign: 'center',
      }
})
export default Input
