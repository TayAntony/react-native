import { View, Text, Image } from "react-native";
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({}){
    return(
        <View style={styles.container}>
            <LinearGradient 
                style={{
                width: 400, 
                marginTop: 15, 
                borderRadius: 5, 
                flex: 1, 
                
            }}
                colors={['#26BAE0','#367DF7']}>
            </LinearGradient>
            <Image source={require('../../assets/user.png')} style={styles.icon}>
                    </Image>
            
        </View>
    )
}