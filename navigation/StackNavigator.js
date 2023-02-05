import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import PostScreen from '../screens/PostScreen';

const stack = createStackNavigator();

const StackNavigator  = () =>{
    return(
        <Stack.Navigator
        initialRouteName = "Home"
        screenOptions = {{
            headerShown: false
        }}
        >
        <Stack.Screen name = "Home" component = {TabNavigator}></Stack.Screen>
        <Stack.Screen name = "PostScreen" component = {PostScreen}></Stack.Screen>
        </Stack.Navigator>
    );
};

export default StackNavigator;