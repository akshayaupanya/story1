import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CreateStory from './screens/createStory';
import FeedScreen from './screens/feed';

const Tab = createBottomTabNavigator()
 
export default function APP(){

  <NavigationContainer>
<Tab.Navigator>
  <Tab.Screen name = "Feed" component = {FeedStory}/>
  <Tab.Screen name = "CreateStory" component = {CreateStory}/>
</Tab.Navigator>

  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
