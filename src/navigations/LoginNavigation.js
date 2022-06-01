import React from 'react';
import {Stack, Tab} from './Navigations';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

import Home from '../screens/Home';
import Schedule from '../screens/Schedule';
import Profile from '../screens/Profile';
import AddSchedule from '../screens/AddSchedule';
import ProfileDetail from '../screens/ProfileDetail';
import Activity from '../screens/Activity';

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false, animationEnabled: false}}>
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
      <Stack.Screen name="ProfileDetail" component={ProfileDetail} />
      <Stack.Screen name="AddSchedule" component={AddSchedule} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
