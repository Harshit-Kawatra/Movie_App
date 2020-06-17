import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native';
import React, {useRef, useState, useEffect} from 'react'
import Carousel from 'react-native-anchor-carousel'
import {FontAwesome5, Faether, MaterialIcons} from '@expo/vector-icons'

const Home = () => {

   const [background, setBackground] = useState(
        { 
          uri: 'https://lh3.googleusercontent.com/XDg-bt655am_Q-7X-I0s64Kq8SJKfb7BBTHkUVbFR6-zDNv9J7rW61xZn0BB3SVCJ6gz',
           title: 'Avengers',
           released: 'Date here',
           desc: 'Movie Description here',
           key: '1' 
      })



      const [gallery, setgallery] = useState([
        { 
           image: ' https://i.pinimg.com/236x/71/a5/10/71a5101658e1c6bdd677ec5c7da14527--retro-posters-film-posters.jpg',
           title: 'Avengers',
           released: '2019',
           desc: 'Movie Description here',
           key: '1' 
      },
        { 
           image: 'https://lh3.googleusercontent.com/XDg-bt655am_Q-7X-I0s64Kq8SJKfb7BBTHkUVbFR6-zDNv9J7rW61xZn0BB3SVCJ6gz',
           title: 'Avengers',
           released: '2019',
           desc: 'Movie Description here',
           stat: '2019',
           key: '1' 
      },
        { 
           image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg',
           title: 'Avengers',
           released: '2019',
           desc: 'Movie Description here',
           stat: '2019',
           key: '1' 
      },
        { 
           image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg',
           title: 'Avengers',
           released: '2019',
           desc: 'Movie Description here',
           stat: '2019',
           key: '1' 
      },
        { 
           image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg',
           title: 'Avengers',
           released: '2019',
           desc: 'Movie Description here',
           stat: '2019',
           key: '1' 
      },
    ]);

    const [list, setList] = useState([
      { 
         image: 'https://i.pinimg.com/236x/71/a5/10/71a5101658e1c6bdd677ec5c7da14527--retro-posters-film-posters.jpg ',
         key: '1' 
    },
      { 
         image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg',
         key: '2' 
    },
      { 
         image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg',
         key: '3' 
    },
      { 
         image: 'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg',
         key: '4' 
    },
      { 
         image: 'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg',
         key: '5' 
    },
  ]);
    const CarouselRef= useRef(null);
    const{width, height}= Dimensions.get('window');
    const renderItem = ({item,index}) => {
      return(
        <View>
        <TouchableOpacity
        onPress={() => {
          CarouselRef.current.scrollToIndex(index);
          setBackground({
            uri: item.image,
            name: item.title,
            stat: item.released,
            desc: item.desc
          })
        }
        
        }
        >
          <Image source={{uri: item.image}} style={styles.CarouselImage}/>
          <Text style={styles.CarouselText}>{item.title}</Text>
          <MaterialIcons name='library-add' size={30} color='white' style={styles.CarouselIcon}/>
        </TouchableOpacity>
        </View>
          )    }

  return (
    <ScrollView style={{backgroundColor: '#000'}}>
    <View style={styles.carouselContentContainer}>
        <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
        <ImageBackground
               source={{uri: background.uri}}
                style={styles.ImageBg}
                blurRadius={10}
                >
                  <View style={styles.searchBoxContainer}>
                    <TextInput
                    placeholder='Search movies'
                    placeholderTextColor='#666'
                    style={styles.SearchBox}
                    />
                  </View>
                  <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', 
                marginLeft: 10,
                marginVertical: 10 }}>Top Picks this Week</Text>
                 <View style={styles.CarouselContainerView}>
                  
                <Carousel 
                data={gallery}
                  renderItem={renderItem}
                  itemWidth= {200}
                  containerWidth={ width-20}
                  separatorWidth={0}
                  ref={CarouselRef}
                  inActiveOpacity={0.4}
                  />
                  </View>
               <View style={styles.movieInfoContainer}>
              <View style={{justifyContent: 'center'}}>
                <Text style={styles.movieName}>{background.name}</Text>
                <Text style={styles.movieStat}>{background.stat}</Text>
              </View>
              <TouchableOpacity style={styles.playIconContainer}>
                <FontAwesome5 name='play' size={22} color='#02ad94' style={{marginLeft: 4}}/>
              </TouchableOpacity>
               </View>
                  
                  <View style={{paddingHorizontal: 14, marginTop: 14}}>
                    <Text style={{color: 'white', opacity: 0.8, lineHeight: 20}}>{background.desc}</Text>
                  </View>
                </ImageBackground>

        </View>
    </View>

    <View style={{marginHorizontal: 14}}>
      <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold', marginBottom: 24}}> Continue Watching </Text>
      <ImageBackground
      source={{uri:'https://i.pinimg.com/originals/99/03/9a/99039a6afb682e42c9a12556071b38c9.jpg' }}
      style={{height: 250,width:'100%', backgroundColor: '#000' }}
      resizeMode= 'cover'
      >
        <Text style={{color: 'white', padding: 14}}>John Wick 3</Text>
        <TouchableOpacity style={{...styles.playIconContainer, position: 'absolute', top: '40%', right: '40%'}}>
                <FontAwesome5 name='play' size={22} color='#02ad94' style={{marginLeft: 4}}/>
        </TouchableOpacity>

</ImageBackground>
<View style={{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, marginTop: 36,}}>
    <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}} >My list</Text>
    <Text style={{color: 'white', fontSize: 14, fontWeight: 'normal'}} >View All</Text>
</View>
<FlatList style={{marginBottom: 30}}
data={list}
horizontal={true}
renderItem={({item}) =>{
  return(
    <TouchableOpacity style={{marginRight: 20}}>
      <Image source={{uri: item.image}} style={{height: 300, width: 200}}/>
    <View style={ {position: 'absolute', height: 5, width: '100%', backgroundColor: '#02ad94', opacity: 0.8}}>
      <FontAwesome5 name='play' size={38} color='#fff' style={{position: 'absolute', top: '45%', left: '45%', opacity: 0.9}}/>
    </View>
    </TouchableOpacity>
  )
}
}
/>
    </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carouselContentContainer:{
      flex: 1,
      backgroundColor: '#000',
      height:720,
      paddingHorizontal: 14
  },
  
ImageBg:{
  flex: 1,
  height: null,
  width: null,
  opacity: 1,
  justifyContent: 'flex-start'
},
  searchBoxContainer: {
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 4,
    marginVertical: 40,
    width:'95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  SearchBox: {
    padding: 12,
    paddingLeft: 20,
    paddingTop: 10,
    fontSize: 16
  },
  SearchBoxIcon: {
    position: 'absolute',
    right: 20,
    top: 14
  },
  CarouselContainerView:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Carousel:{
    flex: 1,
    overflow: 'visible'
  },
  CarouselImage:{
    width: 200,
    height: 320,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.9)'
  },
  CarouselText: {
    padding: 14,
    color: 'white',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  CarouselIcon: {
    position: 'absolute',
    top: 15,
    right: 15
  },
  
  movieInfoContainer: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 14
  },
  movieName: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 6
  },
  movieStat: {
    paddingLeft: 14,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
opacity: 0.8
  },
  playIconContainer: {
    backgroundColor: '#212121',
    padding: 18,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    borderWidth: 4,
    borderColor: 'rgba(2,173,148,0.2)',
    marginBottom: 14
  }


})
export default Home;

