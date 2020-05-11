import * as React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import TabBarIcon from './components/TabBarIcon';
 import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName='Home' style={style.screen}>
      <Tab.Screen name="Home" component={HomeScreen}         
      options={{
          title: 'All Data',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}/>
      <Tab.Screen name="Add New" component={LinksScreen}         
      options={{
          title: 'Resources',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  screen:{
    paddingTop:StatusBar.currentHeight
  }
})