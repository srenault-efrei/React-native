
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={StyleSheet.absoluteFillObject}
          onPress={() => {
            {
          
              <Marker
              coordinate={{latitude: 40.741075, longitude: 74.0003317}}
              title={'title'}
              description={'description'}
            />
            }
          }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
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


