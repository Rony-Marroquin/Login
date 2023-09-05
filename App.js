
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/Navigation/BottomTabNavigator';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'
import { Button } from 'react-native';
import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import * as Google from 'expo-auth-session/providers/google'
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser,WebBrowser.maybeCompleteAuthSession ();

// ios: 409311170678-998pgn7l8bvcfus1mgvuvmj40u5upqr4.apps.googleusercontent.com
export default function App() {

const [user, setUser]= React.useState(null);
const [request, response, promptAsyn]= Google.useAuthRequest({
  iosClientId: '409311170678-998pgn7l8bvcfus1mgvuvmj40u5upqr4.apps.googleusercontent.com'
});




React.useEffect(()=>{

}, [response])

async function handleSignInWithGogle(){
  const user= await getLocalUser
  if(!user){
    if( response?.type == "success"){
      getUserInfo(response.authentication.accessToken)
    }
  } else{
    setUser(user);
  }
}

}

const getLocalUser=async ()=>{

  const data = await AsyncStorage.getItem('@user');
  if(!data) return null;
  return JSON.parse(data);
}

const getUserInfo=async (token)=>{

  if(!token) return;
  try{
    const response = await  fetch(

      'https://www.googleapis.com/userinfo/v2/me',
      {
        headers:{ Authorization: 'Bearer ${token}'},
      }


    );

    const user =await request.JSON();
    await AsyncStorage.setItem("@user",JSON.stringify(user));
    setUser(user);
  } catch(e) {console.log(e)}

}


 
  
  return (

    <view>
     <Button
     title ="iniciar secion"
     disable={!request}
     onpres={()=>{
      promptAsyn()
     }}
     />
    <NavigationContainer>
    
    
    <BottomTabNavigator />

   </NavigationContainer>

    </view>

    
   
   
  
    
  );


const styles = StyleSheet.create({
 
});
