import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

const ButtonPr = (props) => {
    const [btnPressed, setBtnPressed] = useState(false);

    var [height, width, textColor, backgroundColor] = []

    switch (props.style) {
        case 'primary':
            textColor = 'white'
            borderWidth = 0
            borderColor = 'white'
            backgroundColor = '#5F2EEA'
            break;
        case 'secondary':
            textColor = btnPressed ? '#2A00A2' : props.disabled ? '#ae96f3': '#5F2EEA'
            borderWidth = 2
            borderColor = '#5F2EEA'
            backgroundColor = 'white'
            break;
        case 'subtle':
            textColor = btnPressed ? '#2A00A2' : props.disabled ? '#ae96f3': '#5F2EEA'
            borderWidth = 2
            borderColor = '#D9DBE9'
            backgroundColor = 'white'
            break;
        case 'text':
            textColor = btnPressed ? '#2A00A2' : props.disabled ? '#ae96f3': '#5F2EEA'
            borderWidth = 0
            borderColor = 'white'
            backgroundColor = 'white'
            break;
        default:
            break;
    }

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

  return (
    <View>
      <Pressable
        android_disableSound={true}
        disabled={props.disabled}
        onPressIn={()=>{setBtnPressed(true)}}
        onPressOut={()=>{setBtnPressed(false)}}
        style={({ pressed }) => [
          {
            borderWidth: borderWidth,
            borderColor: (props.style == 'secondary') ? pressed ? '#2A00A2': (props.disabled) ? (props.style == 'subtle') ? '#ebecf2' : '#ae96f3': borderColor : borderColor,
            backgroundColor: pressed
              ? ((props.style == 'primary') ? '#2A00A2' : backgroundColor)
              : (props.disabled) ? (props.style == 'primary') ? '#ac94ef' : backgroundColor: backgroundColor
          },
        //   (longPressed)? {borderWidth: 8, borderColor: '#E4DAFF'} : {},
          styles.wrapperCustom,
          {height: height, width: width}
        ]}>
          <Text style={[styles.text, {color: textColor}]}>
            {props.text}
          </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 40,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

  ButtonPr.defaultProps = {
    size: 'medium',
    style: 'primary',
    text: 'Button',
    disabled: false
    }

export default ButtonPr;