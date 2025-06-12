import React from 'react';
import { Pressable, View, Text } from 'react-native';

export default function TestButton({ onPress }) {
  console.log("TestButton is rendering!");
  return (
    <Pressable onPress={onPress}>
      <View style={{
        backgroundColor: 'red',
        padding: 15,
        margin: 5,
        borderRadius: 5,
        width: 60,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'yellow', // Extra visible border
      }}>
        <Text style={{ 
          color: 'white', 
          textAlign: 'center',
          fontSize: 16,
          fontWeight: 'bold'
        }}>ADD</Text>
      </View>
    </Pressable>
  );
}