import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  return (
    <View style={estilo.container}>
    
        <View style={estilo.caixa1}>
            <Text>caixa1</Text>
        </View>

        <View style={estilo.caixa2}>
            <Text>caixa2</Text>
        </View>

    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    backgroundColor: 'ff0',
    flex: 1,
  },
  caixa1:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
  caixa2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'aquamarine',
  }
});
