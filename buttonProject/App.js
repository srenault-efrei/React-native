import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { blue } from 'ansi-colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Button color = 'red'  title="Press me"/>
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

});
