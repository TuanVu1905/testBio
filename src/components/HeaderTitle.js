import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class HeaderTitle extends Component {
    render() {
        const {title} = this.props
        return (
            <View>
                <Text> {title} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
