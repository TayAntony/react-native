import {View } from "react-native";
import {NavigationContainer } from "@react-navigation/native";
import {createStackNavigator } from "@react-navigation/stack";
import Body from './styles/body'
import Header from './styles/header'
import Footer from './styles/footer'
import Login from  './styles/login'

const Pilha = createStackNavigator()

export default function App(){
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
          name="Header"
          component={Header}
          options={{title: 'Header da Tayuumi'}}
        />
        <Pilha.Screen 
          name="Footer"
          component={Footer}
          options={{title: 'Footer da Tayuumi'}}
        />
        
      </Pilha.Navigator>
      
    </NavigationContainer>
    
  )
}