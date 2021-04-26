import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import SignUpScreen from '../screens/SignUp';

const AuthNavigator = createStackNavigator({
  Login: { screen: LoginScreen},
  Logout: { screen: LogoutScreen},
  Signup: { screen: SignUpScreen}
},{
    defaultNavigationOptions: {
        headerShown: false,
    }
});


 export default AuthNavigator;