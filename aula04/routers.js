import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Entypo, FontAwesome, Feather} from '@expo/vector-icons'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import Delete from './components/delete'
import Login from './components/login'
import Home from './components/home'

import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Nav = createBottomTabNavigator()


export default function Routers() {
    return (
        <NavigationContainer>
            <Nav.Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: 'black',
                    backfaceVisibility: 'black',
                    borderTopColor: 'grey',
                    paddingBottom: 3,
                    paddingTop: 3
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey'
            }}
            >


                <Nav.Screen
                    name="Login"
                    component={Login} 
    
                    options={{ headerShown: false, tabBarIcon: ({size, color}) => {return  <AntDesign name="login" size={24} color="white" />},
                    tabBarStyle: {display: 'none'}
                }}
                />

                <Nav.Screen
                    name="Home"
                    component={Home}
                    
                    options={{ headerShown: false, tabBarIcon: ({size, color}) => {return  <FontAwesome name="home" size={24} color="white" />},
                        
                }}
                />      


                <Nav.Screen
                    name="Read"
                    component={Read}
                    options={{ headerShown: false, tabBarIcon: ({size, color}) => {return  <Ionicons name="md-reader" size={24} color="white" />}
                }}
                />
                
                <Nav.Screen
                    name="Update"
                    component={Update}
                    options={{ headerShown: false, tabBarIcon: ({size, color}) => {return  <MaterialIcons name="update" size={24} color="white" />}
                }}
                />
                
                <Nav.Screen
                    name="Create"
                    component={Create}
                    options={{ headerShown: false, tabBarIcon: ({size, color}) => {return  <Ionicons name="create" size={24} color="white" />}
                }}
                />

                <Nav.Screen
                    name="Delete"
                    component={Delete}
                    options={{ headerShown: false, tabBarIcon: ({size, color}) => {return  <MaterialIcons name="delete" size={24} color="white" />}
                }}
                />

            </Nav.Navigator>
        </NavigationContainer>
    )
    
}