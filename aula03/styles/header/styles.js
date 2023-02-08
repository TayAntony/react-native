import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container : {
      flex: 0.1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      color: 'white',
      fontSize: 20,
    },
    operacoes:{
      flex:1,
      alignItems: 'center',
      flexDirection: 'row'
    },
    mais:{
      color: 'purple',
      margin: 5,
      fontSize: 25
    },
    menos:{
      color: 'blue',
      margin: 5,
      fontSize: 25
    },
    dividir:{
      color: 'green',
      margin: 5,
      fontSize: 25
    },
    vezes:{
      color: 'orange',
      margin: 5,
      fontSize: 25
    },
    igual:{
      color: 'pink',
      margin: 5,
      fontSize: 25
    },
  })

export default styles