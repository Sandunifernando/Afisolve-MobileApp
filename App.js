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
import DashboardPage from './app/components/Screens/DashboardScreen';
import HomeScreen from './app/components/Authentication/HomeScreen';
import SigninPage from './app/components/Authentication/Signin';
import ComplaintSubmision from './app/components/Screens/ComplaintScreen';
import NotificationsScreen from './app/components/Screens/NotificationScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ComplaintSubmission from './app/components/Screens/ComplaintSubmission';
import MainTabNavigator from './app/components/Navigations/MainTabNavigator';




const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/*<RootStackScreen />*/}
      <Drawer.Navigator initialRouteName="Home">
        {/*<Drawer.Screen name="Tabbottom" component={MainTabNavigator} />*/}
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Signin" component={SigninPage} />
        <Drawer.Screen name="DashboardDrawer" component={MainTabNavigator} />
        {/*<Drawer.Screen name="Dashboard" component={DashboardPage} />*/}
        <Drawer.Screen name="SubmitComplaint" component={ComplaintSubmission} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Sign Out" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
