import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ({  }) => { 
    return  (
        <View style={styles.imageGroup}>
            <ImageDetail title="Beach" imageSource={require("../../assets/beach.jpg")} score="Image score - 9"/>
            <ImageDetail title="Mountain" imageSource={require("../../assets/mountain.jpg")} score="Image score - 7"/>
            <ImageDetail title="Forest" imageSource={require("../../assets/forest.jpg")} score="Image score - 4"/>
        </View>
    );
};

const styles = StyleSheet.create({
    imageGroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        flexDirection: 'row',
    }
 });

export default ImageScreen;