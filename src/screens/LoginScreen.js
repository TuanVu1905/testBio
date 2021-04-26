
'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput, Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Platform,
  Alert
} from 'react-native';
import LottieView from 'lottie-react-native'
import ButtonIcon from '../components/ButtonSign';
import { Icon } from 'react-native-vector-icons/icon';
import TouchID from 'react-native-touch-id'
import * as Keychain from 'react-native-keychain';
import DeviceInfo from 'react-native-device-info'


class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: "",
      password: "",
      userData: {},
      isLoading: false,
      isLoadingTouchID: false,
      isNavigate: false,
      countLoginTouch: 0,
      status: '',
    }
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      console.log('android')
    }
    else if (Platform.OS === 'ios') {
      console.log('ios')
    }
    Keychain.resetGenericPassword();
  }



  generateID = () => {
    let result = '';
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
      charactersLength = characters.length;
    for (var i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return `${new Date().getSeconds()}${result}${new Date().getMilliseconds()}`;
  }

  async save()  // lưu user vào store của keychain
  {
    try {
      let start = new Date();

      await Keychain.setGenericPassword(
        this.state.username,
        this.state.password,
        {
          accessControl: this.state.accessControl,
          securityLevel: this.state.securityLevel,
          storage: this.state.storageSelection,
        }
      );

      let end = new Date();

      this.setState({
        username: '',
        password: '',
        status: `Credentials saved! takes: ${end.getTime() - start.getTime()
          } millis`,
      });
    } catch (err) {
      this.setState({ status: 'Could not save credentials, ' + err });
    }
    this.resetData();
  }

  async load() {
    try {
      const options = {
        authenticationPrompt: {
          title: 'Authentication needed',
          subtitle: 'Subtitle',
          description: 'description',
          cancel: 'Cancel',
        },
      };
      const credentials = await Keychain.getGenericPassword(options);
      if (credentials) {
        this.setState({ ...credentials, status: 'Credentials loaded!' });
      } else {
        this.setState({ status: 'No credentials stored.' });
      }
    } catch (err) {
      this.setState({ status: 'Could not load credentials. ' + err });
    }
  }

  async reset() {
    try {
      await Keychain.resetGenericPassword();
      this.setState({
        status: 'Credentials Reset!',
        username: '',
        password: '',
      });
    } catch (err) {
      this.setState({ status: 'Could not reset credentials, ' + err });
    }
  }

  async getAll() {
    try {
      const result = await Keychain.getAllGenericPasswordServices();
      this.setState({
        status: `All keys successfully fetched! Found: ${result.length} keys.`,
      });
    } catch (err) {
      this.setState({ status: 'Could not get all keys. ' + err });
    }
  }

  handleTouchID = () => {
    (async () => {
      try {
        let message;
        const credentials = await Keychain.getGenericPassword();  // lấy thông tin tài khoản
        const { username: storedUsername, password: storedPassword } = credentials;
        const configs = {
          title: 'Authentication Required',
          imageColor: '#1306ff',
          imageErrorColor: '#ff0000',
          // sensorDescription: 'Touch sensor',
          // sensorErrorDescription: 'Not find fingerprint',
          cancelText: 'Cancel',
          unifiedErrors: false
        }
        const type = await TouchID.isSupported()

        switch (type) {

          case 'TouchID':

            message = 'Login with touch id'
            break;

          case 'FaceID':

            message = 'Login with face id'
            break;
        }
        if (type) {

          TouchID.authenticate(message) //xác nhận 

          if (storedUsername && storedPassword) { // đã có tài khoản lưu ở keychain 
            setTimeout(() => {
              this.setState({
                username: 'Tuan Vu',
                isLoadingTouchID: true
              },
                () => this.props.navigation.navigate('Profile',this.state.username)
              )
            }, 5000)
          } else { // chưa có tài khoản lưu ở keychain
            
            Keychain.setGenericPassword(this.state.username, this.state.password) // nhận thông tin tài khoản

          }

        }
      }
      catch (err) {
        err
      }

    })()

  }

  loggedIn = () => {
    this.setState({
      isLoading: true,
    })
    setTimeout(() => {
      return this.props.navigation.navigate("Profile")
    }, 3000)

  }


  handleSignUp = () => {
    this.setState({
      isNavigate: true,
    })
    setTimeout(() => {
      return this.props.navigation.navigate("Signup");
    }, 3000)
  }

  render() {
    const { isLoadingTouchID, isLoading, isNavigate, password, email, username } = this.state
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
              <Text style={styles.title_text}>Đăng nhập để tiếp tục</Text>
            </View>
            <View style={styles.form}>
              <View style={styles.form_input} >
                <Text
                  style={styles.input_text} >Username</Text>
                <TextInput
                  style={styles.input_field}
                  placeholder=""
                  placeholderTextColor="black"
                  value={username}
                  autoFocus
                  // onChange={(event) =>
                  //   this.setState({ username: event.nativeEvent.text })
                  // }
                  // onSubmitEditing={() => {
                  //   this.passwordTextInput.focus();
                  // }}
                  onChangeText={(text) => this.setState({ username: text })}
                  underlineColorAndroid="transparent"
                  blurOnSubmit={false}
                />
              </View>

              <View style={styles.form_input} >
                <Text style={styles.input_text} >Mật khẩu</Text>
                <TextInput
                  style={styles.input_field}
                  password={true}
                  placeholder=""
                  secureTextEntry
                  onChangeText={(text) => this.setState({ password: text })}
                  // ref={(input) => {
                  //   this.passwordTextInput = input;
                  // }}
                  // onChange={(event) =>
                  //   this.setState({ password: event.nativeEvent.text })
                  // }
                  // underlineColorAndroid="transparent"
                  value={password}
                />
              </View>

            </View>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={this.loggedIn} style={styles.btnSignIn} >
              {isLoading ? <ActivityIndicator size="small" color="#fff" />
                : <Text style={styles.btnSignIn_text}>Đăng nhập</Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleTouchID} style={[styles.btnSignIn, { marginTop: 10 }]} >
              {isLoadingTouchID ? <ActivityIndicator size="small" color="#fff" />
                :
                <Text style={styles.btnSignIn_text}>Vân tay </Text>
              }
              {/* <Text style={styles.btnSignIn_text}>Vân tay </Text> */}
            </TouchableOpacity>
          </View>
          <View style={styles.options}>
            <Text style={styles.line}></Text>
            <Text style={{ marginTop: 20, }}>Hoặc</Text>
            <Text style={styles.line}></Text>
          </View>
          <View style={styles.container_button}>
            <ButtonIcon name="logo-facebook" color="blue" bgColor="lightblue" title="FACEBOOK" />
            <ButtonIcon name="logo-google" color="red" bgColor="#ebedee" title="GOOGLE" />
          </View>
          <View style={styles.container}>
            <Text style={styles.textSignUp}>Bạn chưa có tài khoản ?</Text>
            {isNavigate ? <ActivityIndicator size="small" color="green" />
              : <Text onPress={this.handleSignUp} style={{ fontStyle: 'italic', color: 'green', alignSelf: 'center', }}>Đăng kí ngay</Text>}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
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
    marginBottom: 10

  },
  container_button: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    marginTop: 10,

  },
  btnSignIn: {
    width: Dimensions.get('screen').width - 30,
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
    alignSelf: 'center',
    color: '#fff'
  },
  line: {
    width: 100,
    borderTopColor: 'black',
    borderTopWidth: 0.5,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  options: {
    flexDirection: 'row',
    width: 250,
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
  textSignUp: {
    alignSelf: 'center',
    justifyContent: 'center',
  }
})

export default LoginScreen;
