import { StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function BotaoLogin({navigation, props}) {

    return(
    <TouchableOpacity 
        style={styles.botao}
        onPress={()=>navigation.navigate('Cadastro')}
    >
            <Text style={{ color: 'white', fontSize: 18, }}>
                {props}
            </Text>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botao:{
        height: 40,
        width: 240,
        marginTop: 20,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        padding: 24,
    },
  });