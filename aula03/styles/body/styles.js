import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container : {
      flex: 0.8,
      alignItems: 'center'
    },
    input: {
      borderWidth: 2,
      borderColor: 'black',
      maxWidth: 100,
      height: 40,
      margin: 10,
      paddingLeft: 10,
      borderRadius: 10, 
    },
    botao: {
      borderBottomWidth: 5,
      borderRightWidth: 3,
      backgroundColor: 'Pink',
      color: 'White',
      maxWidth: 100,
      padding: 8,
      margin: 10,
      borderRadius: 6,
      
    },
    imagem:{
      margin: 30,
      height: 300,
      width: 300
    }
  })

export default styles