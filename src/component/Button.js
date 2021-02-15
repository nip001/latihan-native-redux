import React, { Component } from 'react'
import { Text,  TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({title,action}) =>{
    return (
        <TouchableOpacity onPress={action} style={styles.wrapper}>
            <Text style={styles.textwrapper}>{title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    wrapper:{
      backgroundColor:'grey',
      borderRadius:25,
      paddingVertical:13,
    },
    textwrapper:{
      textAlign: 'center',
    }
  })
  

export default Button;