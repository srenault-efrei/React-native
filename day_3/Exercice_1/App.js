import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  DescriptionFilm from './DescriptionFilm';
import ListFilm from './ListFilm'


const Stack = createStackNavigator();

export default function App() {
  return (
   
   <NavigationContainer>
     <Stack.Navigator initialRouteName='List of Films'>
     <Stack.Screen name ='List of Films' component={ListFilm}></Stack.Screen>
     <Stack.Screen name ='Info' component ={DescriptionFilm}></Stack.Screen>
     </Stack.Navigator>
   </NavigationContainer>
  );
}
