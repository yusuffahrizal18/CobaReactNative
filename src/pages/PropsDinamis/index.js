import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const Story = (props) => {
    return(
        <View style={{alignItems: 'center', marginRight: 20}}>
            <Image source={{uri: props.image}} 
            style={{
                width: 100,
                height: 100,
                borderRadius: 50
            }} />
            <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.title}</Text>
        </View>
    );
}

const PropsDinamis = () => {
    return (
        <View>
            <Text> Materi Component Dinamis menggunakan props </Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row'}}>
                    <Story title="Title 1" image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Story title="Title 2" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU" />
                    <Story title="Title 3" image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <Story title="Title 4" image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6zes53m4a_2VLTcmTn_bHk8NO5SkuWfcQbg&usqp=CAU" />
                    <Story title="Title 5" image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </View>
            </ScrollView>
        </View>
    );
}

export default PropsDinamis;

const styles = StyleSheet.create({

})
