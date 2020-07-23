import React, { useState, Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0);
    return(
        <View>
            <Text>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number+1)} />
        </View>
    );
}

class CounterClass extends Component{
    state = {
        number: 0
    }
    render(){
        return (
            <View>
                <Text>{this.state.number}</Text>
                <Button title="Tambah" onPress={() => this.setState({number: this.state.number+1 })} />
            </View>
        );
    }
}

const index = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>
                Materi Component Dinamis menggunakan state
            </Text>
            <Text style={styles.titleSection}>Functional Component</Text>
            <Counter />
            <Text style={styles.titleSection}>Class Component</Text>
            <CounterClass />
            <CounterClass />
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    wrapper:{
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
    },
    titleSection: {
        marginTop: 20
    }
})
