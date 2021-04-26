import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
const ButtonIcon = (props) => {
    return (
        <TouchableOpacity style={[styles.btn,{backgroundColor: props.bgColor}]}>

            <Icon style={styles.icon} size={24} name={props.name} color={props.color}  />
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ButtonIcon
const styles = StyleSheet.create({
    btn: {
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection:'row',
        width:120,
        borderColor:'black',
        borderWidth:0.3
    },
    text: {
        padding:10
    },
    icon:{
       paddingLeft:10
    }
})

