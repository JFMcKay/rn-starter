import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { linear } from "react-native/Libraries/Animated/Easing";

const ListScreen = () => { 
    const friends = [
        { name: "Friend #1", age: 20 },
        { name: "Friend #2", age: 21 },
        { name: "Friend #3", age: 22 },
        { name: "Friend #4", age: 23 },
        { name: "Friend #5", age: 24 },
        { name: "Friend #6", age: 25 },
        { name: "Friend #7", age: 26 },
        { name: "Friend #8", age: 27 },
        { name: "Friend #9", age: 28 },
    ];

// Flatlist is a component that renders a list of items.
// Turns array into a list of elements
// required propes of data - the array of data we are going to 
// create a bunch of elements from
// required propes of renderItem - function that takes in an object and returns a component
// flatlist is react natives preferred way to render a list of items over mapping
// over an array

return (
    // If you don't provided a key it rerenders the whole list everytime
    <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
            renderItem={({ item }) => {
            // references the item then object.name
            return  <Text style={styles.textStyle}>
                        {item.name} - Age: {item.age}
                    </Text>
        }}/>

        )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        marginHorizontal: 20,
    }
});




// Always export the component
export default ListScreen;