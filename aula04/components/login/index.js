import { View, Text, Button, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import styles from './styles'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../../firebaseConfig/index'
import React, { useState } from 'react';


export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('teste');
    const auth = getAuth();

    const btnLogin = () => {
        console.log(senha);
        console.log(email);
        signInWithEmailAndPassword(auth, email, senha) 
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    function teste(valor) {
        console.log("Chamando funcao");
    }
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/fundo.png')}
                style={{ width: 800, height: 800, position: 'absolute' }}
            />

            <View style={styles.card}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo}>
                    </Image>
                    <Text style={styles.txt1}>Olá, seja bem vindo(a) ao ToDo, minha plataforma de Digital Bank! </Text>

                    <View style={styles.iconeInput}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite seu E-mail"
                            KeyboardType='email'
                            onChange={(e) => {setEmail(e.target.value)}}
                        />
                        <MaterialCommunityIcons name={'email'} size={15} color={'#fff'} style={styles.icone} />
                    </View>


                    <View style={styles.alinhar}>
                        <View style={styles.iconeInput}>
                            <TextInput secureTextEntry={true}
                                style={styles.input} placeholder="Digite sua senha"
                                onChange={(e) => { setSenha(e.target.value) }}
                            // value={senha}
                            />
                            <Ionicons name={'eye'} size={15} color={'#fff'} style={styles.icone} />
                        </View>
                        <Text style={styles.esqueceuSenha}>
                            Esqueceu sua senha?
                        </Text>
                    </View>

                    <TouchableOpacity style={styles.botao} onPress={() => btnLogin(email, senha)} >
                        <View>
                            <Text style={{ color: 'white', fontSize: 14, }}>
                                Logar
                            </Text>
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botao}>

                        <View style={styles.botaoGoogle}>
                            <Text style={{ color: 'white', fontSize: 14, }}>
                                Cadastrar com Google
                            </Text>
                            <Image source={require('../../assets/google.png')} style={styles.google} />
                        </View>

                    </TouchableOpacity>



                    <Text style={styles.link}>
                        Não possui uma conta? <strong>Cadastre-se</strong>
                    </Text>

                </View>
            </View>

        </View>
    )
}