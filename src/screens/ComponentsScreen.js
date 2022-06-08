//part 1 import  librairies we need to create the component
import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

// part 2 create the component a function that returns a jsx element
const ComponentsScreen = () => {
    const name = 'Jeremy McKay';

    return ( 
        <View style={styles.viewStyle}>
            <Text style={styles.textStyle}>Getting Started with react native!</Text>
            <Text style={styles.subTextStyle}>My name is {name}</Text>
        </View>
    );
};

// part 3 create a stylesheet to style the component
const styles = StyleSheet.create({ 
    textStyle: {
        fontSize: 45
    },
    viewStyle: {
        backgroundColor: '#999999',
    },
    subTextStyle: {
        fontSize: 20
    }
});
// part 4 export the component so we can use it elsewhere in the project
export default ComponentsScreen;