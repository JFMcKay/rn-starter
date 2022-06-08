import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const SquareScreen = ({ }) => {
    // consts are immutable, so we can't change them and capitalize them
    const COLOR_INCREMENT = 15;
    // Hooks could use a reducer to change the state
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    // use a reducer when there are values that are closely related
    // a reducer manages multiple values
    // Function that gets called with two objects
    // Argument 1 object that has all the states
    // Argument 2 object that has all the actions describes the update we want to make

    //We never change argument directly, we always use the setter function duh!
    // We must always return a value to be used as argument 1


    const setColor = (color, change) => { 
        // color === 'red', 'green', 'blue'
        // change === +15, -15
        switch (color) {
            case 'red':
                // ternary expression
                red + change > 255 || red + change < 0 ? null : setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null : setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
                return;
            default:
                return;
        }
    }
    const randomRgb = () => {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
        // return a string with the rgb values
    }
    // YOu can pass a function as a prop to a component using callback functions
    return <View>
                                
                <ColorCounter   onIncrease={() => setColor('red' , COLOR_INCREMENT)}
                                onDecrease={() => setColor('red' , -1 * COLOR_INCREMENT)}
                                color='Red'
                />
                <ColorCounter   onIncrease={() => setColor('green', COLOR_INCREMENT)}
                                onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}  
                                color='Green'
                />
                                
                <ColorCounter   onIncrease={() => setColor('blue', COLOR_INCREMENT)}
                                onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} 
                                color='Blue'
                />
                <Button style={{ margin: 20 }}title="Random Color" onPress={() => {
            // ...colors is the spread operator that copies the array and adds a new element
                    randomRgb();
                }}/>
                <View style={{ height: 100, width: '100%', backgroundColor: `rgb(${red}, ${green}, ${blue})`}}>
                    <Text style={{ fontWeight: 'bold', fontSize: 40 }}>
                        {`rgb(${red}, ${green}, ${blue})`}
                    </Text>
                </View>
            </View>
}

const styles = StyleSheet.create({ });

export default SquareScreen;