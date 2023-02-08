import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet, Image} from "react-native"

import React, { useState } from "react" 

import styles from './styles'

export default function Calcular(){
  const [operacao, setOperacao] = useState('')
  const [resultado, setResultado] = useState('')
  const operar = () =>{
    setResultado(eval(operacao))
  }
  return(
    <View style={styles.container}>
        <TextInput placeholder="Digite" style={styles.input} onChangeText={(x) => {setOperacao(x)}} keyboardType='numeric' value={String(operacao)}>
        </TextInput>
        <button onClick={operar} style={styles.botao}>Calcule</button>

        <Text style={styles.texto}>{resultado}</Text>

        <View>
          <Image source={require('../../assets/operacoes.jpg')} style={styles.imagem}>
          </Image>
        </View>
    </View>
  )
}
