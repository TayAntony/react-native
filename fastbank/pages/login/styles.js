import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black' ,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    h1:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
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
        placeholderTextColor: 'grey',
        fontSize: 12,
        outlineStyle: "solid",
        outlineColor: "transparent",
        outlineWidth: 1,
        color: 'white'
        
    },
    txt1:{
        fontSize: 18,
        color: 'white',
        margin: 20,
        width: 250,
        
    },
    logo:{
        width: 130,
        height:90,
        alignItems: "center",
        justifyContent: 'center',
        margin: 20,
    },
    card:{
        minWidth: 340,
        minHeight: 390,
        marginTop: 48,
        margin: 24,
        flex: 1,
        borderColor: 'white',
        borderStyle: "solid", 
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'black',
        opacity: 0.8,
        position: 'absolute',
    },
    link:{
        fontSize: 12,
        marginTop: 20,
        color: 'grey',
    },
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
    iconeInput:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icone:{
        alignSelf: 'center',

    },
    esqueceuSenha:{
        fontSize: 10,
        color: 'grey',

    },
    alinhar:{
        display: 'flex',
        flexDirection: 'col',
        alignItems: 'flex-end',
    },
    error:{
        fontSize: 10,
        color:'red',
    },

    alinharError:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent:'flex-start'
    }

})

export default styles