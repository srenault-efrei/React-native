
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import MapView from 'react-native-maps';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      latitude: 0,
      longitude: 0,
      markers: [],
      dataStorage: []
    })
    this.handlePress = this.handlePress.bind(this);
  }



  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('markers');
      if (value !== null) {
        console.log(value)
        this.setState({
          markers: JSON.parse(value),
        })
      }
    } catch (error) {
      console.log('erreur')
    }
  };


  componentDidMount() {
    this._retrieveData();
  }

  componentDidUpdate() {
    this._storeData();
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('markers', JSON.stringify( this.state.markers));
    } catch (error) {
      console.log('erreur de sauvegarde')
    }
  };

  handlePress(e) {

    let m = {
      coordinates: {
        latitude: e.nativeEvent.coordinate.latitude,
        longitude: e.nativeEvent.coordinate.longitude
      }
    }
    // this.setState({markers: [...this.state.markers, m]})
    this.state.markers.push(m)
    this.forceUpdate()
  }




  render() {

    
    return (
      <View style={styles.container}>
        <MapView style={StyleSheet.absoluteFillObject}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          onLongPress={(e) => { this.handlePress(e) }}>
          {
            this.state.markers.map((marker, i) => (
              // console.log(marker.coordinates),
              <MapView.Marker
                key={i}
                coordinate={marker.coordinates}
              />

            ))
          }
        </MapView>
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




