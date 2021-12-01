import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function ButtonPr(props) {
    var [height, width, color] = []
   //https://reactnative.dev/docs/pressable

    switch (props.size) {
        case 'large':
            height = 64
            width = 200
            break;
        case 'medium':
            height = 64
            width = 200
            break;
        case 'small':
            height = 40
            width = 120
            break;
    
        default:
            break;
    }

    switch (props.style) {
        case 'initial':
            color = '#5F2EEA'
            break;
        case 'disabled':
            color = '#ac94ef'
            break;
        // case initial:
            
        //     break;
        // case initial:
            
        //     break;
        default:
            break;
    }

    return (
        <TouchableOpacity>
            <View style={
                [styles.btn, {height: height, width: width}, {backgroundColor: color}]
                }>
                <Text>asdf</Text>
            </View>
        </TouchableOpacity>
    );
  }

const styles = StyleSheet.create({
    btn: {
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
  });

  ButtonPr.defaultProps = {
    size: 'medium',
    style: 'initial'
    }