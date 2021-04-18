/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './app/components/Authentication/HomeScreen';
import SigninPage from './app/components/Authentication/Signin';
import NotificationsScreen from './app/components/Screens/NotificationScreen';
import ComplaintSubmission from './app/components/Screens/ComplaintSubmission';
import MainTabNavigator from './app/components/Navigations/MainTabNavigator';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Signin" component={SigninPage} />
        <Drawer.Screen name="DashboardDrawer" component={MainTabNavigator} />
        <Drawer.Screen name="SubmitComplaint" component={ComplaintSubmission} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Sign Out" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
