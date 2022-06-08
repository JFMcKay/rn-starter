import React, { useState }from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const CounterScreen = ({  }) => { 
    // When you don't use a state react doesn't know what to render
    // So you need to use a state
    const [counter, setCounter] = useState(0);
    return <View>
        <Button title="Increase" onPress={() => {
            setCounter(counter + 1);
        }}/>
        <Button title="Decrease" onPress={() => {
            setCounter(counter - 1);
        }}/>
        <Text>Current Count: {counter}</Text>
    </View>
}

const style = StyleSheet.create({ 

});

export default CounterScreen;