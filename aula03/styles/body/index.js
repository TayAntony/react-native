import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet, Image} from "react-native"

import React, { useState } from "react" 

import styles from './styles'
import Login from "../login"

export default function Body({navigation}){
  const [operacao, setOperacao] = useState('')
  const [resultado, setResultado] = useState('')
  const operar = () =>{
    setResultado(eval(operacao))
    setOperacao('')

  }
  return(
    <View style={styles.container}>
        <TextInput placeholder="Digite" style={styles.input} onChangeText={(x) => {setOperacao(x)}} keyboardType='numeric' onKeyPress={(event) => {if (event.nativeEvent.key == 'Enter'){operar()}}} value={String(operacao)}>
        </TextInput>

        <button onClick={operar} style={styles.botao}>Calcule</button>

        <Text style={styles.texto}>{resultado}</Text>

        <View>
          <Image source={require('../../assets/operacoes.jpg')} style={styles.imagem}>
          </Image>
        </View>

        <Button title="Voltar" onPress={() => navigation.navigate(Login)}>
      </Button>

    </View>
  )
}
