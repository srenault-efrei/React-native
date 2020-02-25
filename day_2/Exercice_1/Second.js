import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Second({navigation}) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        <Button
          title="Second page"
          onPress={() => navigation.navigate('First')}
        />
      </View>
    );
  }