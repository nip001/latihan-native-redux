import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Tombol from '../component/Button'
import Input from '../component/Input'
import axios from 'axios';
import CardView from 'react-native-cardview'

const Buah = () => {
  const [user, setUser] = useState([])
    // Untuk Buah
    const globalStateBuah= useSelector((state) => state.reducerBuah)
    // Untuk Orang
    const globalStateOrang = useSelector((state) => state.reducerOrang)
    // Untuk VerifBuah
    const globalStateVerifBuah= useSelector((state) => state.reducerVerifBuah)

    const dispacth = useDispatch()


    // useEffect(() => {
    //   console.log(globalStateVerifBuah)
    //   // axiosGet()
    //     // console.log("data orang : "+JSON.stringify(globalStateOrang))
    //     // console.log("data buah : "+JSON.stringify(globalStateBuah))
    // })

    

    const axiosGet = () => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          console.log(response.data);
          setUser(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  const login = (warna,jenis)  => {
      if(warna === globalStateBuah.form.warna && jenis === globalStateBuah.form.jenis){
        Alert.alert("Buah Valid")
      } else {
        Alert.alert("nggak valid")
      }
  }  

  const sendData = (tipe) => {
        if (tipe === "buah"){
            console.log(JSON.stringify(globalStateBuah.form))
        } else {
            console.log(JSON.stringify(globalStateOrang.form))
            axiosPost()
        }
    }

    const axiosPost = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', globalStateOrang.form)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
    }



    const onInputChange=(value,inputType,formType)=>{
            dispacth({type:formType,inputType:inputType,inputValue:value})
    }
    
    return (
        <ScrollView>
          <View>
              <Text style={styles.text}>Buah</Text>
              <Input placeholder="Masukan Warna" value={globalStateBuah.form.warna} onChangeText={(value)=>onInputChange(value,'warna',"SET_FORM")}/>
              <Input placeholder="Masukan Jenis" value={globalStateBuah.form.jenis} onChangeText={(value)=>onInputChange(value,'jenis',"SET_FORM")}/>
              <Input placeholder="Masukan Harga" value={globalStateBuah.form.harga} onChangeText={(value)=>onInputChange(value,'harga',"SET_FORM")}/>
              <Tombol action={()=>sendData("buah")} title="mantap"/>
          </View>
          <View>
              <Text style={styles.text}>Verifikasi Buah</Text>
              <Input placeholder="Masukan Jenis" value={globalStateVerifBuah.form.jenis} onChangeText={(value)=>onInputChange(value,'jenis',"VALIDASI_BUAH")}/>
              <Input placeholder="Masukan Warna" value={globalStateVerifBuah.form.warna} onChangeText={(value)=>onInputChange(value,'warna',"VALIDASI_BUAH")}/>
              <Tombol action={()=>login(globalStateVerifBuah.form.warna,globalStateVerifBuah.form.jenis)} title="Verif"/>
          </View>
          {/* {user.map((user, i) =>{
            return (
            <CardView
                cardElevation={2}
                cardMaxElevation={2}
                cornerRadius={5}
                margin={10}>
                  <View style={styles.itemContainer}>
                  <Text style={styles.textWrapper}>
                      Body :
                  </Text>
                  <Text style={styles.textWrapper}>
                      {user.body}
                  </Text>
                  </View>
                  <View style={styles.itemContainer} >

                  <Text style={styles.textWrapper}>
                      Title :
                  </Text>
                  <Text style={styles.textWrapper}>
                      {user.title}
                  </Text>
                  </View>

            </CardView>

            )
          })} */}
          
            {/* <View>
              <Text style={styles.text}>Buah</Text>
              <Input placeholder="Masukan Warna" value={globalStateBuah.form.warna} onChangeText={(value)=>onInputChange(value,'warna',"SET_FORM")}/>
              <Input placeholder="Masukan Jenis" value={globalStateBuah.form.jenis} onChangeText={(value)=>onInputChange(value,'jenis',"SET_FORM")}/>
              <Input placeholder="Masukan Harga" value={globalStateBuah.form.harga} onChangeText={(value)=>onInputChange(value,'harga',"SET_FORM")}/>
              <Tombol action={()=>sendData("buah")} title="mantap"/>
            </View>
            <View>
                <Text style={styles.text}>Orang</Text>
                <Input placeholder="Masukan Nama" value={globalStateOrang.form.title} onChangeText={(value)=>onInputChange(value,'title',"SET_ORANG")} />
                <Input placeholder="Masukan Alamat" value={globalStateOrang.form.body} onChangeText={(value)=>onInputChange(value,'body',"SET_ORANG")} />
                <Input placeholder="Masukan Status" value={globalStateOrang.form.status} onChangeText={(value)=>onInputChange(value,'status',"SET_ORANG")} />
                <Tombol action={()=>sendData()} title="orang"/>
            </View> */}


        </ScrollView>

    )
}

export default Buah

const styles = StyleSheet.create({
    text:{
      paddingTop:50,
      textAlign: 'center',
      padding:20
    },
    itemContainer :{
      flexDirection: 'row'
    },
    textWrapper : {
      padding : 5
    }
  })
