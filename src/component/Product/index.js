import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import macbook from '../../assets/images/macbook.jpg'

const Product = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image source={macbook} style={styles.imageProduct} />
            <Text style={styles.titleProduct}>New Macbook Pro 2019</Text>
            <Text style={styles.priceProduct}>Rp. 25.000.000,-</Text>
            <Text style={styles.location}>Jakarta Barat</Text>
            <TouchableOpacity onPress={props.onButtonPress}>
                <View style={styles.buttonStyle}>
                <Text style={styles.textButton}>Beli</Text>
                </View>
            </TouchableOpacity>
          </View>
    )
}

export default Product

const styles = StyleSheet.create({
    wrapper: {
        padding: 12,
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8
    },
    imageProduct: {
        width: 188, 
        height: 107, 
        borderRadius: 8
    },
    titleProduct: {
        fontSize: 14, 
        fontWeight: 'bold', 
        marginTop: 16
    },
    priceProduct: {
        fontSize: 14, 
        fontWeight: 'bold', 
        marginTop: 14, 
        color: '#f2994a'
    },
    location: {
        fontSize: 14, 
        fontWeight: '300', 
        marginTop: 12
    },
    buttonStyle: {
        backgroundColor: '#6fcf97', 
        paddingVertical: 6, 
        borderRadius: 25, 
        marginTop: 20
    },
    textButton: {
        fontSize: 14, 
        fontWeight: '600', 
        color: 'white', 
        textAlign: 'center'
    }

})
