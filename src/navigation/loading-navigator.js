import { createStackNavigator } from 'react-navigation-stack';
import LoadingScreen from '../screens/LoadingScreen';


const AuthenLoading = createStackNavigator({
  Loading: { screen: LoadingScreen},
},{
    defaultNavigationOptions: {
        headerShown: false,
    }
});


 export default AuthenLoading;