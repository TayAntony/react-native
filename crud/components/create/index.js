import { View, Text, Button } from "react-native";
import styles from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState, useEffect } from 'react';
import {ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import {storage, db} from '../../firebaseConfig'
import {collection, addDoc} from 'firebase/firestore'
import { TextInput } from "react-native-web";
import { TouchableOpacity } from "react-native";

export default function Create({navigation}){
    const [nome, setNome] =useState()
    const [texto, setTexto] =useState()
    const [image, setImage] = useState()
    const [email, setEmail] = useState()
    const [imgURL, setimgUrl] = useState()
    const [preview, setPreview] = useState()

    useEffect(()=>{
        if(!image){
            setPreview(undefined)
            return
        }
        const objectURL = URL.createObjectURL(image)
        setPreview(objectURL)

        return ()=> URL.revokeObjectURL(objectURL)
    })

    const upload = (e) => {
        e.preventDefault()

        const file = image
        if (!file){
            console.log('faltou imagem...')
            return 
        }

        if(!nome){
            console.log("Faltou o nome...");
            return
        }

        if(!email){
            console.log("Faltou o email...");
            return
        }

        if (image == null) return

        const storageRef = ref (storage, `images/${nome.replace(/ + /g, '') + '_' + image.name}`)

        async function adicionar(){
            await addDoc(collection(db, 'alunos'),{
                name: nome,
                email: email,
                status: false,
                image: nome.replace(/ + /g, '') + '_' + image.name,
                
            })
            setEmail('')
            setNome('')
            setTexto('Cadastrado com sucesso!')
            setPreview(undefined)
        }
        
        
    return(
        <View style={styles.container}>
            <LinearGradient 
                style={{
                    width: 400,  
                    flex: 1}}
                colors={['#A62A5C','#6A2597']}>

            <View>
                <Text style={styles.txt1}>
                    CREATE
                </Text>
            </View>
            <TextInput style={styles.input} placeholder= 'Nome' value={nome}
            onChangeText = {(e) => {setNome(e)}}>
            </TextInput>

            <TextInput style={styles.input} placeholder= 'Email' value={email}
            onChangeText = {(e) => {setEmail(e)}}>
            </TextInput>

            <View>
              <img src={preview}/>
            </View>

            <View>
              <input 
              type='file'
              onChange={(e) => {setImage(e.target.files[0])}}/>
            </View>

            <View>
                <Text style={styles.sucesso}>
                    {texto}
                </Text>
            </View>

            <View style={styles.uploadContainer}>
                <TouchableOpacity style={styles.botao}>
                    <Text style={{
                        color: 'white',
                        weight: 'bold',
                        fontSize: 20,
                        textAlign: 'center'
                }}>Upload</Text>
                </TouchableOpacity>
            </View>

            </LinearGradient>
        </View>
    )
}
}