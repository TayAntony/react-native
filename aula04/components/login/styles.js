import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black' ,
        flex: 1,
    },
    h1:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff',
    },
    input:{
        height: 40,
        width: 200,
        borderColor: 'transparent',
        borderBottomColor: 'white',
        borderStyle: "solid", 
        borderWidth: 2,
        margin: 10,
        alignItems: 'center',
        borderRadius:6,
        padding: 10,
        placeholderTextColor: 'grey',
        fontSize: 12,
    },
    txt1:{
        fontSize: 14,
        color: 'white',
        margin: 20,
        width: 200,
        
    },
    logo:{
        width: 130,
        height:90,
        alignItems: "center",
        justifyContent: 'center',
        margin: 20,
    },
    card:{
        margin: 50,
        flex: 1,
        borderColor: 'white',
        borderStyle: "solid", 
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'black',
    },
    link:{
        fontSize: 12,
        marginTop: 20,
        color: 'grey',


    }
})

export default styles