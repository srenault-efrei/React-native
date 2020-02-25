import React from 'react';
import { TextInput, Text, View, Button } from 'react-native';


export default class Parametre extends React.Component {

  constructor(props) {
    super(props);

  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       {/* <Button onPress={() => navigation.goBack()} title="Go back home" /> */}
       <Text>Parametre Screen</Text>
      </View>


    );
  }

}
