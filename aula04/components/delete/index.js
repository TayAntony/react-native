import { View, Text, Button } from "react-native";
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';

export default function Delete({navigation}){
    return(
        <View style={styles.container}>
            <LinearGradient 
                style={{
                width: 400, 
                marginTop: 15, 
                borderRadius: 5, 
                flex: 1, 
                
            }}
                colors={['#F74336','#D4536A']}>
            </LinearGradient>

            <View>
                
            </View>
        </View>
    )
}