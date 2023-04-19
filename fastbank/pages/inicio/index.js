import { View, Text, Button, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import styles from './styles'
import React, { useState } from 'react';
import BotaoLogin from "../../components/botaoLogin";
import Seta from "../../components/seta";


export default function Inicio({ navigation, props }) {
    function login() {
        navigation.navigate('Login')
    }
    function cadastro() {
        navigation.navigate('Cadastro')
        console.log("Passou");
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/fundo.png')}
                style={{ width: 500, height: 850, position: 'absolute' }}
            />
            <View>
                <Image source={require('../../assets/logo.png')} style={styles.logo}></Image>
                <Text style={styles.slogan}>
                    Onde você faz acontecer!
                </Text>
            </View>

            <View>
                <View style={styles.card}>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.txt1}>Olá, seja bem vindo(a) ao ToDo, minha plataforma de Digital Bank! </Text>
                    </View>

                    <TouchableOpacity
                        style={{height: 40,
                            width: 240,
                            marginTop: 20,
                            borderStyle: 'solid',
                            borderColor: 'white',
                            borderRadius: 12,
                            borderWidth: 1,
                            alignItems:'center',
                            justifyContent: 'center',
                            backgroundColor: 'black',
                            padding: 24,}}
                        onPress={() => navigation.navigate('Cadastro')}
                    >
                        <Text style={{ color: 'white', fontSize: 18, }}>
                            Sou Novo
                        </Text>
                    </TouchableOpacity>


                    <Text onPress={login} style={styles.link}>
                        Já possui uma conta?
                    </Text>
                </View>

            </View>

        </View>
    )
}