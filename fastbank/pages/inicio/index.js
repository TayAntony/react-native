import { View, Text, Button, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import styles from './styles'
import BotaoLogin from "../../components/botaoLogin";


// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import firebaseConfig from 'expo/AppEntry'
import React, { useState } from 'react';


export default function Inicio({ navigation }) {
    return (
        <View style={styles.container}>

            <ImageBackground
                source={require('../../assets/fundo.png')}
                style={{ width: 500, height: 800, position: 'absolute' }}
            />
            <View>
                <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
                <Text style={styles.slogan}>
                    Onde você faz acontecer!
                </Text>
            </View>
            
            <View style={styles.card}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.txt1}>Olá, seja bem vindo(a) ao ToDo, minha plataforma de Digital Bank! </Text>
                </View>
                <BotaoLogin props='Sou novo!'/>
                <Text style={styles.link}>
                    Já possui uma conta? 
                </Text>
            </View>
        </View>
    )
}