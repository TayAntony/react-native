import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, {useState} from 'react';
import Teste from './Testes'


export default function App() {

  const [fonte, setFonte] = useState('#fff')
  const [vermelho, setVermelho] = useState(0)
  const [verde, setVerde] = useState(0)
  const [azul, setAzul] = useState(0)
  const [opacidade, setOpacidade] = useState(1)
  

  return (
    <View style={{
      flex: 1,
      backgroundColor: `rgba(${vermelho},${verde},${azul},${opacidade})`,
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <View style={{
          flex: 1,
          alignItems:'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}>
        <Button title='+'
        onPress={()=> {setFonte('white'), setVermelho(vermelho + 10)}}
        />
        <Text style={{
          color: 'white',
          margin: 10,
          backgroundColor: 'black'
        }}>
          VERMELHO
        </Text >
        <Button title='-'
        onPress={()=> {setFonte('white'), setVermelho(vermelho - 10)}}
        />

        <Text style={{
          color: 'white',
          backgroundColor: 'black'
        }}>
          {vermelho}
        </Text>
      </View>

      <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'center'
        }}>
        <Button title='+'
        onPress={()=> {setFonte('red'), setVerde(verde + 10)}}
        />
        <Text style={{
          color: 'white',
          margin: 10,
          backgroundColor: 'black'
        }}>
          VERDE
        </Text>
        <Button title='-'
        onPress={()=> {setFonte('white'), setVerde(verde - 10)}}
        />
        <Text style={{
          color: 'white',
          backgroundColor: 'black'
        }}>
          {verde}
        </Text>
      </View>
        

      <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'center'
        }}>
          <Button title='+'
          onPress={()=> {setFonte('grey'), setAzul(azul + 10)}}
          />
          <Text style={{
            margin: 10,
            color: 'white',
            backgroundColor: 'black'

          }}>
            AZUL
          </Text>

          <Button title='-'
          onPress={()=> {setFonte('grey'), setAzul(azul - 10)}}
          />
          <Text style={{
          color: 'white',
          backgroundColor: 'black'
        }}>
          {azul}
        </Text>
      </View>

      <View style={{
          flex: 1,
          flexDirection: 'row',
          alignItems:'center',
          justifyContent: 'center'
        }}>
          <Button title='+'
          onPress={()=> {setFonte('grey'), setOpacidade(opacidade + 0.1)}}
          />
          <Text style={{
            margin: 10,
            color: 'white',
            backgroundColor: 'black'

          }}>
            OPACIDADE
          </Text>

          <Button title='-'
          onPress={()=> {setFonte('grey'), setOpacidade(opacidade - 0.1)}}
          />
          <Text style={{
          color: 'white',
          backgroundColor: 'black'
        }}>
          {opacidade}
        </Text>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
