import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    txt1:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
        margin: 20
    },
    input:{
        height: 40,
        width: 220,
        borderColor: 'transparent',
        borderBottomColor: 'white',
        borderStyle: "solid", 
        borderWidth: 1,
        margin: 10,
        alignItems: 'center',
        borderRadius:6,
        padding: 10,
        placeholderTextColor: 'white',
        fontSize: 12,
        outlineStyle: "solid",
        outlineColor: "transparent",
        outlineWidth: 1,
        color: 'white'
    },
    botao:{
        height: 40,
        width: 150,
        marginTop: 20,
        borderStyle: 'solid',
        borderColor: 'white',
        borderRadius: 12,
        borderWidth: 1,
        alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    }

    
})

export default styles