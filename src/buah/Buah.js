import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Tombol from '../component/Button'
import Input from '../component/Input'

const Buah = () => {
    // Untuk Buah
    const globalStateBuah= useSelector((state) => state.reducerBuah)
    // Untuk Orang
    const globalStateOrang = useSelector((state) => state.reducerOrang)

    const dispacth = useDispatch()


    // useEffect(() => {
    //     console.log("data orang : "+JSON.stringify(globalStateOrang))
    //     console.log("data buah : "+JSON.stringify(globalStateBuah))
    // })

    const sendData = (tipe) => {
        if (tipe === "buah"){
            console.log(JSON.stringify(globalStateBuah.form))

        } else {
            console.log(JSON.stringify(globalStateOrang.form))
        }
    }

    const onInputChange=(value,inputType,formType)=>{
            dispacth({type:formType,inputType:inputType,inputValue:value})
    }
    
    return (
        <View>
            <View>
              <Text style={styles.text}>Buah</Text>
              <Input placeholder="Masukan Warna" value={globalStateBuah.form.warna} onChangeText={(value)=>onInputChange(value,'warna',"SET_FORM")}/>
              <Input placeholder="Masukan Jenis" value={globalStateBuah.form.jenis} onChangeText={(value)=>onInputChange(value,'jenis',"SET_FORM")}/>
              <Input placeholder="Masukan Harga" value={globalStateBuah.form.harga} onChangeText={(value)=>onInputChange(value,'harga',"SET_FORM")}/>
              <Tombol action={()=>sendData("buah")} title="mantap"/>
            </View>
            <View>
                <Text style={styles.text}>Orang</Text>
                <Input placeholder="Masukan Nama" value={globalStateOrang.form.nama} onChangeText={(value)=>onInputChange(value,'nama',"SET_ORANG")} />
                <Input placeholder="Masukan Alamat" value={globalStateOrang.form.alamat} onChangeText={(value)=>onInputChange(value,'alamat',"SET_ORANG")} />
                <Input placeholder="Masukan Status" value={globalStateOrang.form.status} onChangeText={(value)=>onInputChange(value,'status',"SET_ORANG")} />
                <Tombol action={()=>sendData()} title="orang"/>
            </View>
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
