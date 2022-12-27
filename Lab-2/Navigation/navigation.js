import { StatusBar } from 'expo-status-bar';
import reactDom from 'react-dom';
import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';  
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React,{useState} from 'react';

import Home from '../screens/Home';
const Stack =  createNativeStackNavigator();
export default function Navigation() {
    return (
      <NavigationContainer>
  <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen name = "Timer" component={Home}/>
  </Stack.Navigator>
      </NavigationContainer>
    );
  }