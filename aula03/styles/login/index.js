import { View, Button} from "react-native"
import Body from "../body"
import Add from "../add"
import React, { useState } from "react" 
import Somar from '..add'
import styles from './styles.js'

export default function Login({navigation}){
  
  return(
    <View style={styles.container}>
      <Button title="Calculador com Eval" onPress={() => navigation.navigate(Body)} style={styles.botao}>
      </Button>

      <Button title="Calculadora" onPress={() => navigation.navigate(Add)} style={styles.botao}>
      </Button>
      <View>
        <Somar valorA={10} valorB={5}/> 
      </View>

    </View>
  )
}
