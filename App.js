import 'react-native-gesture-handler';
import React from 'react';
import { createAppContainer } from 'react-navigation';

import switchNavigator from './src/navigation';


const NaviStacks = createAppContainer(switchNavigator);


   class App extends React.Component {
     render(){
       return (
         <NaviStacks />
       )
     }
   }

export default App