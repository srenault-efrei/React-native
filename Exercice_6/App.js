import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      placeholder: "",
      text: "",
      destinations: [],
      texDecoration: "none"
    };
    this.addDestination = this.addDestination.bind(this);
    this.setTextDecoration = this.setTextDecoration.bind(this);
  }

  addDestination() {
    this.state.destinations.push(this.state.text)
    console.log(this.state.destinations)

    this.setState({
      texDecoration : 'none',
    })
    this.forceUpdate()
  }

  setTextDecoration(){
    this.setState({
      texDecoration : 'line-through',
    })
 
  }


  render() {

    const { destinations,texDecoration } = this.state

   

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TextInput
            style={{ height: 40, width: 300, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => this.setState({ text })}
            placeholder="Enter a destination" 
          />
          <Button
            title="add" 
            onPress={this.addDestination} 
          ></Button>
        </View>

        <SafeAreaView style={styles.safeContainer}>
          <ScrollView style={styles.scrollView}>
    
            {destinations.map(destination => (
              <TouchableOpacity onPress={this.setTextDecoration}>
              <Text key={destination}  style={{ marginTop: 20,fontSize: 40, textAlign:"center",textDecorationLine:texDecoration }}  >
                {destination}
              </Text>
              </TouchableOpacity>
            ))}

          </ScrollView>
        </SafeAreaView>


        <View style={styles.footer}>
          <Text>Footer</Text>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: "column",
    alignItems: 'center',
  },

  safeContainer: {
    height: 550,
    width: 350,
    marginTop: 100,
  },

  header: {
    flexDirection: 'row',
    height: 50,
    marginTop: 100

  },

  scrollView: {
    backgroundColor: 'grey',
    marginHorizontal: 20,

  },


  footer: {
    marginTop: 30
  }
});
