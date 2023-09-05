import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import Profile from '../screens/Profile';
import settings from '../screens/settings';





const Tabs =createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tabs.Navigator>
    
     <Tabs.Screen  name='Home'component={HomeScreen} />
     <Tabs.Screen  name='profile'component={Profile} />
     <Tabs.Screen  name='Settings'component={settings} />
    
     

    </Tabs.Navigator>
  )
}

export default BottomTabNavigator