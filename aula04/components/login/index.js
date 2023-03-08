import { View, Text, Button, Image, ImageBackground, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-web";
import styles from './styles'


export default function Login({}){
    return(
        <View style={styles.container}>
            <ImageBackground  
    source={require('../../assets/fundo.png')} 
    style={{width: 800, height: 800, position:'absolute'}}  
/>

            <View style={styles.card}>
                <View style ={{flex:1, alignItems: 'center'}}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo}>
                    </Image>
                    <Text style={styles.txt1}>Olá, seja bem vindo(a) ao ToDo, minha plataforma de Digital Bank! </Text>
                    <TextInput style={styles.input} placeholder="Digite seu e-mail"/>
                    <TextInput style={styles.input} placeholder="Digite sua senha"/>
                    {/* <button style={styles.botao}>Logar</button> */}

                    <TouchableOpacity style ={{
                    height: 50,
                    width: 200,
                    marginTop: 30,
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderRadius: 12,
                    borderWidth: 1,
                    alignItems:'center',
                    justifyContent: 'center',
                    }}>
                        <View>
                            <Text style={{color:'white', fontSize: 20,}}>
                                Logar
                            </Text>
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