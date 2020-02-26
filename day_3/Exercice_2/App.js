import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { retryWhen } from 'rxjs/operator/retryWhen';




export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      cryptoPrices: [],
      sign: '',
    });
  }

  componentDidUpdate() {
    this.fetchCrypto();

  }

   componentDidMount() {
    this.fetchCrypto();
    this.interval = setInterval(() =>{this.forceUpdate()}, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  async fetchCrypto() {
    try {
      let response = await fetch('https://api.coinranking.com/v1/public/coins');
      let cryptoPrices = await response.json();
      this.setState({
        cryptoPrices: cryptoPrices.data.coins,
        sign: cryptoPrices.data.base.sign,

      })
    }
    catch (error) {
      console.log(error);

    }
  }

  render() {
    const { cryptoPrices } = this.state
    const { sign } = this.state
   

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text style={styles.titleStyle} >Cryptocurrency prices</Text>
          <View style={styles.line}>
            {cryptoPrices.map(crypto => (
              <View key={crypto.symbol} style={styles.viewStyle} >
              <Text style={styles.textStyle}>{crypto.symbol}</Text>
              <Text style={styles.signStyle} >{sign} {crypto.price}</Text>
              <Text style={styles.changeStyle} >{crypto.change}</Text>
              </View>
              
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    

  },
  scrollView: {
    backgroundColor: '#022448',
    marginHorizontal: 5,

  },

  titleStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    marginTop: 30,
    textAlign: "center"
  },

  line: {
    flexDirection: "column",
    marginTop: 20,
    marginLeft : 10
  },

  textStyle : {
   
    color: 'grey',
    fontWeight:"bold"
  },

  viewStyle : {
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between"
    
  },

  signStyle: {
    color :'white',
    fontWeight:"bold",
  },

  changeStyle: {
    color :'green',
    fontWeight:"bold",
  }

});
