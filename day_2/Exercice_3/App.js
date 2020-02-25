import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Homepage from './Homepage'
import Parametre from './Parametre'

const Drawer = createDrawerNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='Homepage'>
      <Drawer.Screen name="Homepage" component={Homepage} />
      <Drawer.Screen name="Parametre" component={Parametre} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

