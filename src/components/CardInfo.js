import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler';

import {data} from '../data/profile'

export default class CardInfo extends Component {
    
    render() {
        const {title, urlImage, job, description} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={() => onTap()}>
                  <Text>{title}</Text>
                  <Text>{job}</Text>
                  <Image  source={{uri: `${urlImage}`}} style={{width:120, height:120, borderRadius:20, backgroundColor:'#EAEAEA'}} />
                  <Text style={{fontSize:14, marginTop:10, color:'#858585'}}>{description}</Text>   
            </TouchableOpacity>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
         width:120,
         height:180,
         justifyContent:'space-around',
         alignItems:'center',
         margin:5,
         paddingTop:20
     }
 })
 