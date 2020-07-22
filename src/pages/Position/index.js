import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Cart from './../../assets/icon/cart.png'

const Position = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Materi Position</Text>
            <View style={styles.cartWrapper}>
                <Image source={Cart} style={styles.iconCart} />
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.textStyle}>Keranjang Belanja</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
        alignItems: 'center'
    },
    cartWrapper: {
        borderWidth: 1,
        borderColor: '#4398D1',
        width: 93,
        height: 93,
        borderRadius: 93/2,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginTop: 40
    },
    iconCart: {
        width: 50,
        height: 50
    },
    notif: {
        fontSize: 12,
        color: 'white',
        backgroundColor: '#6fcf97',
        padding: 4,
        borderRadius: 25,
        height: 24,
        width: 24,
        position: 'absolute',
        top: 0,
        right: 0
    },
    textStyle: {
        marginTop: 8, 
        fontSize: 12,
        color: '#777777',
        fontWeight: '700'
    }
})

export default Position;