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
import {DrawerContent} from './app/components/Navigations/DrawerContent';
import MypurchaseSceen from './app/components/Screens/MypurchaseScreen';
import FeedbackScreen from './app/components/Screens/Closed_Complaints/FeedbackScreen';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      {/*<Drawer.Navigator initialRouteName="Home">*/}
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props}/>}>

      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Signin" component={SigninPage} />
        <Drawer.Screen name="DashboardDrawer" component={MainTabNavigator} />
        <Drawer.Screen name="Lodge Complaint" component={ComplaintSubmission} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name=" My Purchase" component={MypurchaseSceen}/>
        <Drawer.Screen name="Sign Out" component={HomeScreen} />
        <Drawer.Screen name="Feedback" component={FeedbackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default App;
