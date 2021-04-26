import { createSwitchNavigator } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import LoadingScreen from "../screens/LoadingScreen";
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from "../screens/ProfileScreen";
import LogoutScreen from "../screens/LogoutScreen";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import AppNavigator from "./app-navigator";
import AuthNavigator from "./auth-navigator";
import AuthenLoading from "./loading-navigator";



const switchNavigator = createSwitchNavigator({
  Loading: {screen: AuthenLoading },
  App: {screen: AppNavigator},
  Auth: {screen: AuthNavigator}
})

export default switchNavigator;