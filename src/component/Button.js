import React from 'react'
import { Text,  TouchableOpacity, StyleSheet} from 'react-native';

const Tombol = ({title,action}) =>{
    return (
      // <Button title={title} color="#f194ff"></Button>
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
  

export default Tombol;