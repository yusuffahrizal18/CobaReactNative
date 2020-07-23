import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BasicJavasript = () => {
    // const
    // let 

    // Tipe Data
    // Primitive
    const nama = 'Yusuf Fahrizal'; // String
    let age = 24; // Number
    const isMale = true; // Boolean 

    // Complex
    // Object
    const hewanPeliharaan = {
        nama: 'Miaw',
        jenis: 'Kucing',
        usia: 10,
        isLocalAnimal: true,
        warna: 'Kuning',
        orangTua: {
            male: 'Father',
            female: 'Mother'
        }
    };
    // Function
    const sapaOrang = (name, umur) => {
        return console.log(`Hello ${name} dengan umur ${umur}`);
    }
    // Array Object
    const namaOrang = ['Yusuf', 'fahrizal', 'Orang sukses'];

    // Pemanggilan
    // typeof namaOrang;
    // sapaOrang("Yusuf Fahrizal", 24)

    // Penggunaan
    // if(hewanPeliharaan.nama === 'Miaw'){
    //     console.log('hello miaw')
    // }else{
    //     console.log('Hewan siapa ini')
    // }

    const sapaHewan = objectHewan => {
        // let hasilSapa = '';
        // if(objectHewan.nama === 'Miaw'){
        //     hasilSapa = 'Hallo miaw'
        // }else{
        //     hasilSapa = 'ini hewan Siapa'
        // }
        // return hasilSapa

        return objectHewan.nama === 'Miaw' 
        ? 'Halo miaw' 
        : 'ini kucing siapa';
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                Materi basic javasript di React Native
            </Text>
            <Text>Name: {hewanPeliharaan.orangTua.male} </Text>
            <Text>usia: {age} </Text>
            <Text> {sapaHewan(hewanPeliharaan)} </Text>
            <Text>{namaOrang[0]}</Text>
            <Text>{namaOrang[1]}</Text>
            <Text>{namaOrang[2]}</Text>
            <Text>===========</Text>
            {namaOrang.map(orang => (
                <Text>{orang}</Text>
            ))}
        </View>
    )
}

export default BasicJavasript

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'}
})
