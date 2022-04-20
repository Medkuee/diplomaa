import React, {useRef, useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {GlobalContext} from '../providers/store';
import MainNavigator from './MainNavigation';
import LoginNavigator from './LoginNavigation';
import Splash from '../screens/Splash';

export default props => {
  const navigation = useRef();

  return (
    <NavigationContainer ref={navigation}>
      <LoginNavigator></LoginNavigator>
    </NavigationContainer>
  );
};
