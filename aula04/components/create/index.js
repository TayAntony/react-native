import { View, Text, Button } from "react-native";
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';


export default function Create({navigation}){
    return(
        <View style={styles.container}>
            <LinearGradient 
                style={{
                width: 400, 
                marginTop: 15, 
                borderRadius: 5, 
                flex: 1
            }}
                colors={['#A62A5C','#6A2597']}>
            </LinearGradient>
        </View>
    )
}