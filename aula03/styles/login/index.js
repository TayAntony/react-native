import { View, TextInput, Text, Button, TouchableOpacity, StyleSheet, Image} from "react-native"
import Body from "../body"
import React, { useState } from "react" 

import styles from './styles'

export default function Login({navigation}){
  
  return(
    <View style={styles.container}>
      <Button title="Login" onPress={() => navigation.navigate(Body)}>
      </Button>

    </View>
  )
}
