import {View } from "react-native";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";
import Body from './styles/body'
import Header from './styles/header'
import Footer from './styles/footer'
import Login from  './styles/login'
import Add from './styles/add'

const Pilha = createStackNavigator()

export default function Rotas(){
  return(
    <NavigationContainer>
      <Pilha.Navigator>
        <Pilha.Screen 
          name="Login"
          component={Login}
          options={{title: 'Tela login da Tayuumi'}}
        />
        <Pilha.Screen 
          name="Body"
          component={Body}
          options={{title: 'Tela body da Tayuumi'}}
        />

        <Pilha.Screen 
          name="Add"
          component={Add}
          options={{title: 'Tela ADD da Tayuumi'}}
        />
        
      </Pilha.Navigator>
      
    </NavigationContainer>
    
  )
}