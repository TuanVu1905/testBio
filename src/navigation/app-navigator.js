import React from 'react';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import ChatScreen from '../screens/ChatScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { View } from 'react-native';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';


const AppNavigator = createMaterialBottomTabNavigator({
  Home:  {
    screen: createStackNavigator({
      Home : HomeScreen,
    },{
      defaultNavigationOptions: { 
        headerShown:false,
      }
    }),
      navigationOptions: {
        tabBarLabel: "Trang chủ",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{ color: tintColor }]} name={"ios-home"} size={24} />
          </View>
        ),
        activeColor: '#f0edf6',
        inactiveColor: '#3e2465',
        barStyle: { backgroundColor: 'lightpink' },
      }
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: {
      tabBarLabel: "Tin nhắn",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{ color: tintColor }} name={"chatbubbles"} size={24} />
        </View>
      ),
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: 'lightblue' },

    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Cá nhân",
      tabBarIcon: ({ tintColor }) => (
        <View>
          <Icon style={{ color: tintColor }} name="people" size={24} />
        </View>
      ),
      activeColor: '#f0edf6',
      inactiveColor: '#3e2465',
      barStyle: { backgroundColor: 'lightyellow' },
    },
  }
},
)

export default AppNavigator;