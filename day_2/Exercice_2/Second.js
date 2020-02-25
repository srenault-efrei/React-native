import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Second({route,navigation}) {
  const {text} = route.params;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{text}</Text>
        <Button
          title="Page précédente"
          onPress={() => navigation.navigate('First')}
        />
      </View>
    );
  }