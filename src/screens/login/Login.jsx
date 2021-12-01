import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonPr from '../../components/button/Button';

export default function LoginScreen(props) {

    return (
    <View style={styles.container}>
      <ButtonPr/>
      <Text>Open up App.js to start working on your app!!!!!!!!!!!!</Text>
    </View>
    );
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });