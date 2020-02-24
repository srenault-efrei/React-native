import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
      <Text style={styles.textStyle} >Header</Text>
      </View>
      <View style={styles.secondContainer}>
      <Text style={styles.helloStyle}>Hello</Text>
      <Image
          style={{width: 250, height: 250}}
          source={{ uri: 'https://qph.fs.quoracdn.net/main-qimg-8441d1aac7e1164170993ef6006bfd69'}}
        />
      </View>
      <View style={styles.thirdContainer}>
      <Text>Footer</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column",
    
  },

  firstContainer: {
    backgroundColor: 'black',
    height: 180,
    justifyContent:"flex-start",
    justifyContent:"center",
    alignItems:'center',
 
  },
  secondContainer: {
    backgroundColor: 'grey',
    height: 650,
    justifyContent:"flex-start",
    alignItems:'center',
  },

  thirdContainer: {
    backgroundColor: 'white',
    height: 80,
    justifyContent:"center",
    alignItems:'center',

  },

  textStyle : {
    color: 'white'
  },

  helloStyle : {
    padding: 10
  }

});
