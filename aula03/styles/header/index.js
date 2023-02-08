import { View, Text } from "react-native";
import styles from './styles'

export default function Header(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                FAÇA UMA CONTA
            </Text>
            <View style={styles.operacoes}>
                <Text style={styles.mais}>
                    +
                </Text>
                <Text style={styles.menos}>
                    -
                </Text>
                <Text style={styles.vezes}>
                    x
                </Text>
                <Text style={styles.dividir}>
                ÷
                </Text>
                <Text style={styles.igual}>
                    =
                </Text>
            </View>
        </View>
    )
}