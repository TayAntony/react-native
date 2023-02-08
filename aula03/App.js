import {View } from "react-native";
import Body from './styles/body'
import Header from './styles/header'
import Footer from './styles/footer'

export default function App(){
  return(
    <View style={{flex:1}}>
      <Header />
      <Body />
      <Footer />
    </View>
  )
}