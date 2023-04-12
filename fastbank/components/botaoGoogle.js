
import { StyleSheet } from 'react-native';

export default function BotaoGoogle({ navigation }) {
    <TouchableOpacity style={styles.botao}>

        <View style={styles.botaoGoogle}>
            <Text style={{ color: 'white', fontSize: 14, }}>
                Cadastrar com Google
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
    google:{
        width: 20,
        height: 20,
        margin: 10,
    },
    botaoGoogle:{
        display: 'flex', 
        flexDirection: 'row-reverse',
        justifyContent: 'center',
        alignItems: 'center',
    },
  });