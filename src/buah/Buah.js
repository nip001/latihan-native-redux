import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../component/Button'
import Input from '../component/Input'

const Buah = () => {

    const globalStateBuah= useSelector((state) => state.reducerBuah)
    const dispacth = useDispatch()

    // useEffect(() => {
    //     console.log(globalStateBuah)
    // })

    const sendData = () => {
        console.log(globalStateBuah)
    }

    const onInputChange=(value,inputType)=>{
        dispacth({type:"SET_FORM",inputType:inputType,inputValue:value})
    }
    
    return (
        <View>
          <Text style={styles.text}>Buah</Text>
          <Input placeholder="Masukan Warna" value={globalStateBuah.form.warna} onChangeText={(value)=>onInputChange(value,'warna')}/>
          <Input placeholder="Masukan Jenis" value={globalStateBuah.form.jenis} onChangeText={(value)=>onInputChange(value,'jenis')}/>
          <Input placeholder="Masukan Harga" value={globalStateBuah.form.harga} onChangeText={(value)=>onInputChange(value,'harga')}/>
          <Button action={()=>sendData()} title="mantap"/>
        </View>
    )
}

export default Buah

const styles = StyleSheet.create({
    text:{
      paddingTop:50,
      textAlign: 'center',
      padding:20
    }
  })
