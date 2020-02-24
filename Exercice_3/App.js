import React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { blue } from 'ansi-colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textSize}>0</Text>
      <Button  title="Press me"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSize: {
    fontSize : 50
  }

});
