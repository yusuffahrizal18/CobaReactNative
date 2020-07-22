import React from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import macbook from '../../assets/images/macbook.jpg'

const StylingComponent = () => {
    return(
      <View>
        <Text style={style.text} >Belajar Styling</Text>
        <View style={{
          width:100, 
          height:100, 
          backgroundColor:'blue', 
          borderWidth: 2, 
          borderColor: 'red',
          marginTop: 20,
          marginLeft: 20
          }} />
          <View
            style={{
              padding: 12,
              backgroundColor: '#f2f2f2',
              // backgroundColor: 'red',
              width: 212,
              borderRadius: 8
            }}
          >
            <Image source={macbook} style={{width: 188, height: 107, borderRadius: 8}} />
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>New Macbook Pro 2019</Text>
            <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 14, color: '#f2994a'}}>Rp. 25.000.000,-</Text>
            <Text style={{fontSize: 14, fontWeight: '300', marginTop: 12}}>Jakarta Barat</Text>
            <View style={{backgroundColor: '#6fcf97', paddingVertical: 6, borderRadius: 25, marginTop: 20}}>
              <Text style={{fontSize: 14, fontWeight: '600', color: 'white', textAlign: 'center'}}>Beli</Text>
            </View>
          </View>
      </View>
    );
  }

  const style = StyleSheet.create({
    text: {
      fontSize: 18,
      color: 'black',
      fontWeight: 'bold',
      marginLeft: 20,
      marginTop: 40
    }
  })

  export default StylingComponent;