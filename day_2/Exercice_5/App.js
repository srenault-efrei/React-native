
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Marker from 'react-native-maps';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      latitude: 0,
      longitude: 0,
      markers:[],
    })
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(e){

    let m = {
      coordinates : {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      }
    }
    this.state.markers.push(m)
    this.forceUpdate()
  }
  render() {
    console.log(this.state.markers)
    return (
      <View style={styles.container}>
        <MapView style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onLongPress={(e) => {
            {
              this.handlePress(e)
              alert('test')
              {
                {this.state.markers.map(marker => (
                  <MapView.Marker
                  coordinate={marker.coordinate}
                  />
                ))}
                  
              }
            }
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




