import { StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function BotaoLogin({ navigation }, props) {
    <TouchableOpacity style={styles.botao}>

        <View style={styles.botaoGoogle}>
            <Text style={{ color: 'white', fontSize: 14, }}>
                {props}
            </Text>
            <Image source={require('../assets/google.png')} style={styles.google} />
        </View>

    </TouchableOpacity>
}

export const styles = StyleSheet.create({
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
    },
  });