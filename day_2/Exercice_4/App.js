import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      longitude: 0,
      latitude: 0,
      errorMessage: "",
      location: 0,
    };
    this.showLocation = this.showLocation.bind(this);
    this.myReset = this.myReset.bind(this);
    
  }

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.getLocation();
    }
  }

  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      location : location
      });
  }

  myReset(){
    console.log('reset')
    this.setState({
      longitude:0,
      latitude:0,
    })
  }

  showLocation(){
    console.log('location')
    this.setState({
      longitude : this.state.location.coords.longitude,
      latitude : this.state.location.coords.latitude
      });
  }


  render() {
    

    return (
      <View style={styles.container}>
        <Text>Longitude :{this.state.longitude} </Text>
        <Text>latitude :{this.state.latitude} </Text>
      
        <Button title="Location" onPress={this.showLocation} ></Button>
        <Button title="Reset" onPress={this.myReset}></Button>

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
    flexDirection: 'column',

  },
});
