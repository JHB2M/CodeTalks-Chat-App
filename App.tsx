import {View,Text,Button} from 'react-native'
import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import  {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack' 

import Login from './src/pages/auth/login/Login'
import SignUp from './src/pages/auth/signup/Signup'
import Chat from './src/pages/main/chat/Chat'
import ChatDetail from './src/pages/main/chatDetail/ChatDetail'
import FlashMessage from 'react-native-flash-message'


import colors from './src/style/colors'


export default function App(){

 const Stack = createNativeStackNavigator();
  const authStack = createNativeStackNavigator()
  const mainStack  = createNativeStackNavigator()
  

  function AuthPages(){
    return (
      
    <authStack.Navigator screenOptions={{headerShown:false}}>
    <authStack.Screen name  = "LoginPage" component={Login}/>
    <authStack.Screen name  = "SignUpPage" component={SignUp}/>
  </authStack.Navigator>
    )
  }
  function HomePages(){
    return(
      <mainStack.Navigator>
      <mainStack.Screen 
      name ="ChatPage"
         component = {Chat}
          options={{
            headerLeft:()=>null,
            headerTitleAlign:'center',
            
            title:'Odalar',
            headerTitleStyle:{
              fontSize:25,
              color:colors.darkGreen
            }
            }}
            />
      <mainStack.Screen
       name ="ChatDetailPage"
        component = {ChatDetail}
        options={{headerShown:false}}
      
       
      />
    </mainStack.Navigator>
    )
  }

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "Auth" component={AuthPages} options={{headerShown:false}}/>
        <Stack.Screen name = "Home" component={HomePages} options={{headerShown:false}}/>
      </Stack.Navigator>
      <FlashMessage position='top'/>
    </NavigationContainer>

    )
}