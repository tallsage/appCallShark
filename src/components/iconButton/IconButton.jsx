import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

const IconButton = (props) => {
    const [btnPressed, setBtnPressed] = useState(false);

    var [top, left] = [0,0]

    switch (props.style) {
        case 'primary':
            textColor = 'white'
            borderWidth = 0
            borderColor = 'white'
            backgroundColor =  btnPressed ? '#2A00A2' : props.disabled ? '#ae96f3': '#5F2EEA'
            break;
        case 'secondary':
            color = btnPressed ? '#2A00A2' : props.disabled ? '#ae96f3': '#5F2EEA'
            borderWidth = 2
            borderColor =  btnPressed ? '#2A00A2' : props.disabled ? '#ae96f3': '#5F2EEA'
            backgroundColor = 'white'
            break;
        default:
            break;
    }

    switch (props.direction) {
        case 'up':
            top = 3
            break;
        case 'down':
            top = -3
            break;
        case 'left':
            left = 3
            break;
        case 'right':
            left = -3
            break;
        default:
            break;
    }
return(
    <View>
      <Pressable
        android_disableSound={true}
        disabled={props.disabled}
        onPressIn={()=>{setBtnPressed(true)}}
        onPressOut={()=>{setBtnPressed(false)}}
        style={({ pressed }) => [
          {
            borderWidth: borderWidth,
            borderColor: borderColor,
            backgroundColor: backgroundColor
          },
        //   (longPressed)? {borderWidth: 8, borderColor: '#E4DAFF'} : {},
          styles.wrapperCustom
        ]}
        >
            <View style={styles.container}>
                <View style={[
                    styles.triangle,
                    {borderBottomColor: props.style == 'primary' ? 'white' : btnPressed ?  '#2A00A2' : props.disabled ? '#ae96f3' : '#5F2EEA'},
                    props.direction == 'up' ? styles.up : 
                        props.direction == 'down' ? styles.down :
                            props.direction == 'right' ? styles.right : styles.left
                ]}/>
                <View style={[
                    styles.triangle1,
                    {top: top,
                    left: left,
                    right: left,
                    borderBottomColor: props.style == 'secondary' ? 'white' : btnPressed ?  '#2A00A2' : props.disabled ? '#ae96f3' : '#5F2EEA',},
                    props.direction == 'up' ? styles.up1 : 
                        props.direction == 'down' ? styles.down1 :
                            props.direction == 'right' ? styles.right1 : styles.left1
                ]}/>
            </View>
      </Pressable>
    </View>
    ); 
};

const styles = StyleSheet.create({
    container: {},
    wrapperCustom: {
        borderRadius: 40,
        padding: 6,
        height: 54,
        width: 54,
        alignItems: 'center',
        justifyContent: 'center',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
    },
    triangle1: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        position: 'absolute',
    },
    up: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    up1: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
    },
    right: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: "90deg" }],
    },
    right1: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: "90deg" }],
    },
    down: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: "180deg" }],
    },
    down1: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: "180deg" }],
    },
    left: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: "-90deg" }],
    },
    left1: {
        borderTopWidth: 0,
        borderRightWidth: 20,
        borderBottomWidth: 20,
        borderLeftWidth: 20,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderLeftColor: 'transparent',
        transform: [{ rotate: "-90deg" }],
    }
});

IconButton.defaultProps = {
    style: 'secondary',
    direction: 'right',
    disabled: false
    }

export default IconButton;