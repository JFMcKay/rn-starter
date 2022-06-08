import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
// destructonuring the props object
const HomeScreen = ({ navigation }) => {

  return  <View>
            <Text style={styles.text}>Does this change on the fly?</Text>
            <Button
              onPress={() => {
                navigation.navigate('Components');
              }}
              title="Go to components demo"
            />
            <Button 
              onPress={() => {
                navigation.navigate('Listscreen');
              }} 
              title="Go to list demo" 
              />
            <Button 
              onPress={() => {
                navigation.navigate('Imagescreen');
              }} 
              title="Go to Image demo" 
              />
            <Button 
              onPress={() => {
                navigation.navigate('Counterscreen');
              }} 
              title="Go to Counter demo" 
              />
            <Button 
              onPress={() => {
                navigation.navigate('Colorscreen');
              }} 
              title="Go to Color demo" 
              />
              <Button 
              onPress={() => {
                navigation.navigate('Squarescreen');
              }} 
              title="Go to Square screen demo" 
              />
          </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
