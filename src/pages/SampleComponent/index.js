
import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

const SampleComponent = () => {
    return(
      <View>
        <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
        <Text>Yusuf</Text>
        <Text>Fahrizal</Text>
        <Home/>
        <GetImage/>
        <TextInput style={{borderWidth: 1}} />
        <BoxGreen/>
        <Profile/>
      </View>
    );
  }
  
  const Home = () => {
    return (
      <Text>D3 Sistem Informasi</Text>
    );
  }
  
  const GetImage =  () => {
    return <Image source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'}} style={{width: 100, height: 100}} />
  }
  
  class BoxGreen extends Component{
    render(){
      return <Text>Ini component dari class</Text>
    }
  }
  
  class Profile extends Component{
    render(){
      return (
        <View>
          <Image source={{uri: 'https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg'}} style={{height: 100, width: 100, borderRadius: 50}} />
          <Text>Ini adalah gambar class</Text>
        </View>
      );
    }
  }

  export default SampleComponent;