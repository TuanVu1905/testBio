import React, { Component } from 'react';
import { View, Text, Button, KeyboardAvoidingView, ScrollView, StyleSheet, TextInput, Image, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native'



class SignUpScreen extends React.Component {
  state = {
    isLoading: false,
    user:"",
    password:"",
    email:""
  }
  loggedIn = () => {
    this.setState({
      isLoading: true,
    })
    setTimeout(() => {
      return this.props.navigation.navigate("Login")
    },3000)
    
  }
  render() {
    const { isLoading } = this.state
    return (
      <KeyboardAvoidingView style={{ height: "100%" }} behavior="height">
        <ScrollView >
          <View style={styles.imageLogin}>
            <LottieView
              source={require('../assets/10152-login-animation.json')}
              autoPlay
              loop
              style={styles.imagePicker} />
          </View>
          <View style={styles.container}>
            <View style={styles.title}>
              <Text style={styles.title_text}>Đăng kí nào !!!</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.form_input} >
                <Text
                    style={styles.input_text} >Email</Text>
                <TextInput 
                    onChangeText={email => this.setState({email: email})}
                    style={styles.input_field} 
                    placeholder="" 
                    placeholderTextColor="black"
                    autoCapitalize="none"
                    autoFocus />
              </View>
              <View style={styles.form_input} >
                <Text
                    style={styles.input_text} >Tên người dùng</Text>
                <TextInput 
                    onChangeText={user => this.setState({user: user})}
                    style={styles.input_field} 
                    autoCapitalize="none"
                    placeholder="" 
                    placeholderTextColor="black"
                     />
              </View>
              <View style={styles.form_input} >
                <Text style={styles.input_text} >Mật khẩu</Text>
                <TextInput 
                     onChangeText={password => this.setState({password: password})} 
                     style={styles.input_field} 
                     placeholder="" 
                     secureTextEntry 
                     autoCapitalize="none"
                     />
              </View>
            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity  onPress={this.loggedIn} style={styles.btnSignIn} >
              {isLoading ? <ActivityIndicator size="small" color="#fff" />
                : <Text style={styles.btnSignIn_text}>Đăng Kí</Text>}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:30
  },
  title: {
    marginTop: 5
  },
  title_text: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold"
  },
  form: {
    flex: 1,
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30
  },
  form_input: {
    marginBottom: 13
  },
  input_field: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,

  },
  input_text: {
    fontSize: 15,
    fontWeight: "400",
    color: 'grey'
  },
  imagePicker: {
    width: 120,
    height: 120,
    alignSelf: "center",
    justifyContent: 'center'
  },
  imageLogin: {
    marginTop: 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'lightpink',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom:10

  },
  container_button: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,
   
  },
  btnSignIn: {
    width: Dimensions.get('screen').width-30,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: 'blue',
    borderColor: 'white',
  },
  btnSignIn_text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf:'center',
    color: '#fff'
  },
})

export default SignUpScreen;
