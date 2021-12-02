import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import IconButton from '../../components/iconButton/IconButton';

export default function LoginScreen(props) {

    return (
    <View style={styles.container}>
      <IconButton/>
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