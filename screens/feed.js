import * as React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class FeedScreen extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text>
                    feed screen
                </Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
