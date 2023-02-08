import { View, Text } from "react-native";
import styles from './styles'

export default function Footer(){
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>
                APP feito por Tayssa Antoniasse
            </Text>
        </View>
    )
}