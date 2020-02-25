import React from 'react';
import { TextInput, Text, View, Button } from 'react-native';


export default class Homepage extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button
          title="Page suivante"
          onPress={() => navigation.navigate('Parametre')}
        /> */}
        <Text>Home Screen</Text>
      </View>


    );
  }

}
