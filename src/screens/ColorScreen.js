import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = ({ }) => { 
    const [colors, setColors] = useState([]);
    return (
    <View>
        <Button title="Add a color" onPress={() => {
            // ...colors is the spread operator that copies the array and adds a new element
            setColors([...colors, randomRgb()]);
            console.log(colors);
        }}
        />
            <FlatList 

                // Needed to make a key for each element
                keyExtractor={item => item}
                data={colors}
                renderItem={({ item }) => {
                    return (
                    <View style={{ height: 100, width: '100%', backgroundColor: item}}>
                        <Text style={{ fontWeight: 'bold', fontSize: 40 }}>{item}</Text>
                    </View>
                    );
                }}
            />
    </View>
    )
}

const styles = StyleSheet.create({

});

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    // return a string with the rgb values
    return `rgb(${red}, ${green}, ${blue})`;
}

export default ColorScreen;