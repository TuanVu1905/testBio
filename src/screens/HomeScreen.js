import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import AppContainer from '../../src/assets/appContainer';

class HomeScreen extends React.Component {
  componentDidMount() {
    // console.log(AppContainer.getContainer(),'getContainer')
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          backgroundColor="lightyellow"
          barStyle = {'light-content'}
          translucent={true}
        />

        <Text>Home!</Text>
        {/* <Button title="Click" onPress={() => this.props.navigation.goback()} /> */}

      </SafeAreaView>

    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightyellow',
  }
})
