import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

// props is an object that is passed in from the parent component
const ImageDetail = ({ imageSource, title, score }) => {
    return  (
        <View style={styles.view}>
            <Image source={imageSource} />
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.text}>{score}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',

    }
 });

export default ImageDetail;