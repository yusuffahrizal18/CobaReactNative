import React, { Component, useEffect, useState } from 'react'
import {Text, View, Image } from 'react-native';

// class FlexBox extends Component{
//     constructor(props){
//         super(props);
//         console.log("===> Constructor");
//         this.state = {
//             subscriber: 100
//         }
//     }

//     componentDidMount(){
//         console.log('===> componentDidmount');
//         setTimeout(() => {
//             this.setState({
//                 subscriber: 1000
//             })
//         }, 2000)
//     }

//     componentDidUpdate(){
//         console.log('===> ComponentDidupdate');
//     }

//     componentWillUnmount(){
//         console.log('===> ComponentwillUnmount')
//     }

//     render(){
//         console.log('===> Render');
//         return (
//             <View>
//                 <View style={{flexDirection: 'row', backgroundColor: 'grey', alignItems: 'flex-end', justifyContent: 'space-evenly'}}>
//                     <View style={{backgroundColor: '#ee5253', width: 50, height: 50}}/>
//                     <View style={{backgroundColor: '#feca57', width: 50, height: 100}}/>
//                     <View style={{backgroundColor: '#1dd1a1', width: 50, height: 150}}/>
//                     <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}}/>
                    
//                 </View>
//                 <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
//                     <Text>Beranda</Text>
//                     <Text>Video</Text>
//                     <Text>Playlist</Text>
//                     <Text>Komunitas</Text>
//                     <Text>Chanel</Text>
//                     <Text>Tentang</Text>
//                 </View>
//                 <View style={{flexDirection: 'row', alignItems: 'center'}}>
//                 <Image source={{uri: 'https://awsimages.detik.net.id/community/media/visual/2019/02/19/42393387-9c5c-4be4-97b8-49260708719e.jpeg?w=750&q=90'}} style={{height: 100, width: 100, borderRadius: 50, marginRight: 14, marginTop: 20}} />
//                     <View>
//                         <Text style={{fontSize: 20, fontWeight: 'bold'}}>Yusuf Fahrizal</Text>
//                         <Text>{this.state.subscriber} D3 Sistem Informasi</Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }
// }

const FlexBox = () => {
    const [subscriber, SetSubscriber] = useState(200)
    useEffect(() => {
        console.log('didMount');
        setTimeout(() => {
            SetSubscriber(4000);
        }, 2000)
        return() => {
            console.log('didUpdate');
        }
    }, [subscriber])
    // useEffect(() => {
    //     console.log('didUpdate');
    //     setTimeout(() => {
    //         SetSubscriber(4000);
    //     }, 2000)
    // }, [subscriber])
    return(
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
                    <Text>{subscriber} D3 Sistem Informasi</Text>
                </View>
            </View>
        </View>
    );
}

export default FlexBox;