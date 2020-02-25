import React from 'react';
import { TextInput, Text, View, Button } from 'react-native';


export default class First extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ""
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={{ height: 300, width: 300, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
        />
        <Button
          title="Page suivante"
          onPress={() => navigation.navigate('Second', {
            text: this.state.text,
          })}
        />
      </View>


    );
  }

}
