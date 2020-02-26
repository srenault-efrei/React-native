import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

export default class ListFilm extends React.Component {

    constructor(props) {
        super(props);
        this.state = ({
            films: [],

        });

    }

    componentDidMount() {
        this.fetchFilms()
    }

    async  fetchFilms() {
        try {
            let response = await fetch('https://ghibliapi.herokuapp.com/films');
            let films = await response.json();
            this.setState({
                films: films
            })
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        const { films } = this.state
        const { navigation } = this.props
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>

           
            {
                        films.map(film => (
                            <Text key ={film.title} style={styles.text} onPress={() => navigation.navigate('Info', {
                                info: film.description,
                                title : film.title,
                                director : film.director,
                                producer : film.producer,
                                releaseDate :film.release_date,
                                score: film.rt_score
                            })}
                            >
                                {film.title}
                            </Text>
                        ))
                    }
  
                   

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
        backgroundColor: '#f2f2f2',
        marginHorizontal: 20,
        
    },
    text: {
        fontSize: 20,
        marginTop : 10,
        fontWeight: 'bold',
        textAlign:"center",

        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: 'black',
        padding:10,
    },

});