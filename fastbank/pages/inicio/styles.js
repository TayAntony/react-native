import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    card:{
        minWidth: 350,
        maxWidth: 300,
        margin: 40,
        flex: 1,
        borderColor: 'white',
        borderStyle: "solid", 
        borderWidth: 1,
        borderRadius: 20,
        backgroundColor: 'black',
        opacity: 0.8,
        position: 'absolute'
    },
    txt1:{
        fontSize: 20,
        color: 'white',
        margin: 20,
        width: 250,
    },
    logo:{
        width: 150,
        height:110,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 30,
        marginLeft: 30,
        marginBottom: 10
    },
    link:{
        fontSize: 14,
        marginTop: 20,
        color: 'grey',
    },
    slogan:{
        fontSize: 20,
        color: 'white',
        marginLeft: 30,
        fontFamily: 'Michroma'
    }

})

export default styles