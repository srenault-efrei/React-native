import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class DescriptionFilm extends React.Component {
    render() {
    
        const {title,info,producer,director,releaseDate,score} = this.props.route.params
    
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

             <Text style={styles.titleStyle} >Title</Text>
                <Text style={styles.textStyle} >{title}</Text>

                <Text style={styles.titleStyle} >Description</Text>
                <Text style={styles.textStyle} >{info}</Text>

                <Text style={styles.titleStyle} >director</Text>
                <Text style={styles.textStyle}>{director}</Text>

                <Text style={styles.titleStyle} >producer</Text>
                <Text style={styles.textStyle} >{producer}</Text>
         
                <Text style={styles.titleStyle} >releaseDate</Text>
                <Text style={styles.textStyle} >{releaseDate}</Text>

                <Text style={styles.titleStyle} >score</Text>
                <Text style={styles.textStyle} >{score}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    textStyle: {
    marginTop : 2,
    marginHorizontal: 10,
    },

    titleStyle:{
        fontSize: 20,
        fontWeight: 'bold',
        marginTop : 10,
    }
  });