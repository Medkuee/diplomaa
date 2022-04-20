import React from 'react';
import {Stack, Tab} from './Navigations';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Activity from '../screens/Activity';

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{animationEnabled: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{animationEnabled: false}}
      />
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Activity" component={Activity} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
