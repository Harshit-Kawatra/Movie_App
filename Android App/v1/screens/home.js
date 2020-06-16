import React, { Component } from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity ,Image,ScrollView} from 'react-native';
import { useTheme } from '@react-navigation/native';

export default class Home extends Component<{}> {
    render(){          
    return (
        <View>
            
            <Text style={styles.heading}>Latest Movies And TV Shows</Text>            
            <View style={styles.list}>
            <View>
            <TouchableOpacity style= {styles.movie} activeOpacity={0.5}  >
            <Image 
                source={{uri: 'https://m.media-amazon.com/images/M/MV5BMTIwMzExNDEwN15BMl5BanBnXkFtZTYwODMxMzg2._V1_UY1200_CR93,0,630,1200_AL_.jpg'}}
                style={styles.Imagestyle}/>
            <Text style={styles.TextStyle}>Gone in 60 Seconds</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style= {styles.movie} activeOpacity={0.5}>
            <Image 
                source={{uri: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg'}}
                style={styles.Imagestyle}/>
            <Text style={styles.TextStyle}>Black Panther</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style= {styles.movie } activeOpacity={0.5}>
            <Image 
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/51vqw2Lj45L._AC_.jpg'}}
                style={styles.Imagestyle}/>
            <Text style={styles.TextStyle}>The Big Bang Theory</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style= {styles.movie } activeOpacity={0.5}>
            <Image 
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71X8XKxd83L._SY550_.jpg'}}
                style={styles.Imagestyle}/>
            <Text style={styles.TextStyle}>Friends</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style= {styles.movie } activeOpacity={0.5} }>
            <Image 
                source={{uri: 'https://m.media-amazon.com/images/M/MV5BZWJjMDEzZjUtYWE1Yy00M2ZiLThlMmItODljNTAzODFiMzc2XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'}}
                style={styles.Imagestyle}/>
            <Text style={styles.TextStyle}>How I Met Your Mother</Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flexDirection : 'row',
        backgroundColor:'white',
        margin: 10,
        flexGrow:1,
    },
    movie: {

        alignItems:'center',
        padding:5,
        height: 150,
        width: 100,
        margin: 5,
        marginLeft:10,
        marginBottom:180,
        flex:1,

    },
    Imagestyle: {
        padding:1,
        margin:1,
        height:150,
        width:100,
        resizeMode: 'stretch',

    },
    TextStyle: {
        color:'white',
        marginTop: 4,
        marginLeft:1,
        marginRight:1,
        alignItems:'center',
    },
    heading: {
        padding:10,
        paddingRight:2,
        fontSize: 22,
        fontStyle: 'normal',
        color: 'white',
    },
    list:{
        flexDirection: 'row',
        flexWrap:'wrap',
    }

})