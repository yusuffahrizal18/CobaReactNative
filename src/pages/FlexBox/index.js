import React, { Component } from 'react'
import {Text, View, Image } from 'react-native';

class FlexBox extends Component{
    render(){
        return (
            <View>
                <View style={{flexDirection: 'row', backgroundColor: 'grey', alignItems: 'flex-end', justifyContent: 'space-evenly'}}>
                    <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}/>
                    <View style={{backgroundColor: '#feca57', width: 50, height: 100}}/>
                    <View style={{backgroundColor: '#1dd1a1', width: 50, height: 150}}/>
                    <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}}/>
                    
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text>Beranda</Text>
                    <Text>Video</Text>
                    <Text>Playlist</Text>
                    <Text>Komunitas</Text>
                    <Text>Chanel</Text>
                    <Text>Tentang</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={{uri: 'https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90'}} style={{height: 100, width: 100, borderRadius: 50, marginRight: 14, marginTop: 20}} />
                    <View>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Yusuf Fahrizal</Text>
                        <Text>D3 Sistem Informasi</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default FlexBox;