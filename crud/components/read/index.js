import { View, Text, Button } from "react-native";
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';

export default function Read({navigation}){
    return(
        <View style={styles.container}>
            <LinearGradient 
                style={{
                    width: 400,  
                    flex: 1,
                
            }}
                colors={['#FFD814','#FAA119']}>
            </LinearGradient>
        </View>
    )
}