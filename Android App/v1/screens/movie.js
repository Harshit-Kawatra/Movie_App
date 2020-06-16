import React from 'react';
import {StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';


export default function Movies() {
    return (
        <View>
            <Text style={styles.heading}> LATEST MOVIES </Text>
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
                source={{uri: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg'}}
                style={styles.Imagestyle}/>
            <Text style={styles.TextStyle}>Black Panther</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    );
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