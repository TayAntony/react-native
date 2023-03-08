import { View, Text, Button} from "react-native"
import React, { useState } from "react" 

import styles from './styles'

export default function Add(props){
  var valorA = props.valorA
  var valorB = props.valorB
  var total = valorA + valorB
  
  return(
    <View style={styles.container}>
      <Text>Soma dos valores:</Text>
      <Text>Valor A: {valorA}</Text>
      <Text>Valor B: {valorB}</Text>
      <Text>Total: {total}</Text>

      

    </View>
  )
}
