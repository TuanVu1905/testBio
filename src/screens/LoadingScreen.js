import React, { Component } from 'react';
import { View, Text, ActivityIndicator, Button, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native'


class LoadingScreen extends React.Component {

  state = {
    user: null,
    email: null
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.state.user === null) {
        this.props.navigation.navigate("Login")
      }
      else {
        this.props.navigation.navigate("Home")
      }

    }, 5000)
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}> VnResource</Text>
         <LottieView source={require('../assets/loading.json')} autoPlay loop style={{ marginTop: 70 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#222222'
  },
  text: {
    fontSize:30,
    color:'#fff'
  }
})

export default LoadingScreen;
