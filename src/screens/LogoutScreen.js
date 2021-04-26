import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class LogoutScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Button title="Click" onPress={() => this.props.navigation.navigate("Login")} />
        </View>
      );
    }
  }

export default LogoutScreen;
