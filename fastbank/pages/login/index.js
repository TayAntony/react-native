import { View, Text, Button, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import styles from './styles'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import BotaoGoogle from "../../components/botaoGoogle";
import BotaoLogin from "../../components/botaoLogin";
import Seta from "../../components/seta";


export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('');
    const [errou, setErrou] = useState(false)
    // const auth = getAuth();

    const btnLogin = () => {
        console.log('tentou logar')
        // signInWithEmailAndPassword(auth, email, senha) 
        //     .then((userCredential) => {
        //         const user = userCredential.user;
        //         console.log(user)
        //         navigation.navigate('Home')
                
        //     })
        //     .catch((error) => {
        //         const errorCode = error.code;
        //         const errorMessage = error.message;
        //         setErrou(true)
        //     });
    }
    const btnGoogle = () => {
        console.log('tentou cadastrar com google')
        
    }
    return (
        <View style={styles.container}>

            
            <ImageBackground
                source={require('../../assets/fundo.png')}
                style={{ width: 800, height: 840, position: 'absolute' }}
            />
            <View>
                <Seta/>

                <Text style={styles.txt1}>Insira suas informações para realizar o login </Text>
            </View>
            <View style={styles.card}>
                <View style={{ flex: 1, alignItems: 'center' }}>
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
                                onChange ={(e) => { setSenha(e.target.value) }}
                            // value={senha}
                            />
                            <Ionicons name={'eye'} size={15} color={'#fff'} style={styles.icone} />
                        </View>
                    </View>
                    <Text style={styles.esqueceuSenha}>
                                Esqueceu sua senha?
                            </Text>

                    <View style={styles.alinharError}>
                            {errou &&
                        <Text style={styles.error}>
                            Senha ou e-mail incorretos
                        </Text>}
                           
                    </View>

                    <BotaoLogin props='Logar' onPress={() => btnLogin(email, senha)}/>

                    <BotaoGoogle props='Logar com Google' onPress={() => btnGoogle()}/>

                </View>
            </View>

        </View>
    )
}