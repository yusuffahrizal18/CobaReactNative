import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Ilustrasi from './../../assets/images/mobileLife.svg'

const ReactNativeSVG = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Materi menggunakan react native SVG</Text>
            <Ilustrasi width={200} height={200} />
        </View>
    )
}

export default ReactNativeSVG

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'}
})
