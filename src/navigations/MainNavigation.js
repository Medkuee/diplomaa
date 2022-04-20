import React from 'react';
import {Stack, Tab} from './Navigations';

//screens

// import Verify from '../screens/Verify';
import Home from '../screens/Home';
// import Search from '../screens/Search';
// import List from '../screens/List';
// import DetailNews from '../screens/DetailNews';
import Profile from '../screens/Profile';
// import ChangeProfile from '../screens/ChangeProfile';
// import AddCard from '../screens/AddCard';
// import UpdateCard from '../screens/UpdateCard';

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: 'none'},
      }}>
      <Tab.Screen name="Home" component={Home} />
      {/* <Tab.Screen name="Search" component={Search} /> */}
      {/* <Tab.Screen name="List" component={List} /> */}
    </Tab.Navigator>
  );
};

const StackNavigations = () => {
  return (
    <Stack.Navigator
      initialRouteName="TabNavigation"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {display: 'none'},
        animationEnabled: false,
      }}>
      <Stack.Screen name="TabNavigation" component={TabNavigation} />

      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen name="Verify" component={Verify} /> */}
      {/* <Stack.Screen name="ChangeProfile" component={ChangeProfile} /> */}

      {/* <Stack.Screen name="DetailNews" component={DetailNews} /> */}

      {/* <Stack.Screen name="AddCard" component={AddCard} /> */}
      {/* <Stack.Screen name="UpdateCard" component={UpdateCard} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigations;
