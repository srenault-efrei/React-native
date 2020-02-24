import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView style={styles.scrollView}>
       <View style={styles.principalView} >
         <View style={styles.styleView}></View>
         <View style={styles.styleView}></View>
         <View style={styles.styleView}></View>
         <View style={styles.styleView}></View>
         <View style={styles.styleView} ></View>
         <View style={styles.styleView}></View>
       </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  principalView:{
    flex: 1,
        flexDirection: 'column',
      
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  styleView: {
    backgroundColor: 'blue',
    height: 20,
    width: 20,
    margin: 150
  },
});
