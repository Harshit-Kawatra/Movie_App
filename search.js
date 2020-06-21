import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput, TouchableOpacity,SafeAreaView, FlatList, ActivityIndicator } from 'react-native';

 
export default class App extends React.Component {

  constructor(){
    super()
    this.state={
      isloading: false,
      Movies:[]
    };
  }

 
 componentDidMount() {
   this.setState({isloading: true})
   //this.LoadMovies()
   const url='https://reactnative.dev/movies.json'
   fetch(url)
   .then((response) => response.json())
   .then((responseJson)=> {
     this.setState({
       Movies: responseJson.movies,
       inMemoryMovies: responseJson.movies, isloading: false
     })
    })
     .catch((error)=>{
       console.log(error)
     })
   }
 

 renderItem=({item}) =>{
   return(
   <View style={{minHeight: 70, padding: 5}}>
     <Text style={{color:'#Bada55', fontWeight: 'bold', fontSize: 20}}>
       {item.title}
     </Text>
     <Text style={{color:'#dddddd'}}>
       {item.releaseYear}
     </Text>
   </View>
 )}
searchMovies=(value) => {
  const filteredMovies = this.state.inMemoryMovies.filter(
    Movies=>{
      let MoviesLowercase = (Movies.title).toLowerCase()
      let searchTermLowercase = value.toLowerCase()

      return MoviesLowercase.indexOf(searchTermLowercase)> -1
    }
  )
  this.setState({Movies:filteredMovies})
}

  render() {
    return (
      <View style={{flex:1, marginTop: 50}}>
        <SafeAreaView style={{backgroundColor: '#2f363c'}}/>
        <TextInput
        placeholder="Search"
        placeholderTextColor="#dddddd"
        style={{backgroundColor: '#2f363c', height: 50, fontSize: 21, padding: 10, color: 'white', borderBottomWidth: 0.5, borderBottomColor:'#7d90a0'}}
              onChangeText={(value)=>this.searchMovies(value)}
          />
          <View style={{flex: 1, backgroundColor:'#000'}}>
          {this.state.isloading?(
            <View style={{...StyleSheet.absoluteFill, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator  size='large' color="#bad555"/>
            </View>
           ) : null}
<FlatList
data={this.state.Movies}
renderItem={this.renderItem}
ListEmptyComponent={() => (
  <View style={{flex: 1, alignItems: 'center',justifyContent: 'center', marginTop: 50}}>
<Text style={{ color:'#bad555'}}>No data found</Text>
</View>

)}

/>

          </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});
