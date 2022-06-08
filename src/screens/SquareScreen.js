import React, { useReducer } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import ColorCounter from '../components/ColorCounter';

// consts are immutable, so we can't change them and capitalize them
const COLOR_INCREMENT = 15;
// reducer function state and action
// state is the current state and action is the action we want to take
const reducer = (state, action) => { 
    // state === { red: 0, green: 0, blue: 0 }
    // action === colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15

    switch (action.colorToChange) {
        case 'red':
            // never change the state directly, always use the setter function
            // ternary expression using spread operator to create a new object so we don't mutate the old state
            return { ...state, red: state.red + action.amount > 255 || state.red + action.amount < 0 ? state.red : state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount > 255 || state.green + action.amount < 0 ? state.green : state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state.blue : state.blue + action.amount };
        default:
            return state;
    }

}

const SquareScreen = ({ }) => {
    // Hooks could use a reducer to change the state
    // use a reducer when there are values that are closely related
    // a reducer manages multiple values
    // Function that gets called with two objects
    // Argument 1 object that has all the states
    // Argument 2 object that has all the actions describes the update we want to make
    //We never change argument directly, we always use the setter function duh!
    // We must always return a value to be used as argument 1
    
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
    
    // Thought it would be cool to have a random color generator need to update using reducer
    const randomRgb = () => {
        dispatch({colorToChange: 'red', amount: Math.floor(Math.random() * 256)});
        dispatch({colorToChange: 'blue', amount: Math.floor(Math.random() * 256)});
        dispatch({colorToChange: 'green', amount: Math.floor(Math.random() * 256)});
        // return a string with the rgb values
    }
    const resetRgb = () => {
        dispatch({colorToChange: 'red', amount: -1 * state.red});
        dispatch({colorToChange: 'blue', amount: -1 * state.blue});
        dispatch({colorToChange: 'green', amount:-1 * state.green});
        // return a string with the rgb values
    }
    // YOu can pass a function as a prop to a component using callback functions
    return <View>
                                
                <ColorCounter   onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                                color='Red'
                />
                <ColorCounter   onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                                color='Green'
                />
                                
                <ColorCounter   
                                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })} 
                                color='Blue'
                />
                <View style={{ marginTop: 20}}>
                    <Button title="Random Color" onPress={() => {
                        randomRgb();
                    }}/>
                </View>
                <View style={{ justifyContent:'center', alignItems: 'center', marginVertical: 20, height: 100, width: '100%', backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`}}>
                    <Text style={{  fontWeight: 'bold', fontSize: 40 }}>
                        {`rgb(${state.red}, ${state.green}, ${state.blue})`}
                    </Text>
                </View>
                <Button style={{ margin: 20 }}title="Reset" onPress={() => {
            // ...colors is the spread operator that copies the array and adds a new element
                    resetRgb();
                }}/>
            </View>
}

const styles = StyleSheet.create({ });

export default SquareScreen;