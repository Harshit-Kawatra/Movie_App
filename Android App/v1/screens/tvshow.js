import React from 'react';
import {StyleSheet, Text, View, Button,TouchableOpacity,Image} from 'react-native';


export default function Tvshow() {
    return (
        <View>
            <Text style={styles.heading}> LATEST TV SHOWS </Text>
            <View style={styles.list}>
            <View>
            <TouchableOpacity style= {styles.movie } activeOpacity={0.5}>
            <Image 
                source={{uri: 'https://images-na.ssl-images-amazon.com/images/I/71X8XKxd83L._SY550_.jpg'}}
                style={styles.Imagestyle}/>
            <Text style={styles.TextStyle}>Friends</Text>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity style= {styles.movie } activeOpacity={0.5}>
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
const styles = StyleSheet.create({
    main: {
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