import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Icon = ({name, color, size}) => {
    return (
        <MaterialCommunityIcons name={name} color={color} size={size} />
    )
}

export default Icon

const styles = StyleSheet.create({})
