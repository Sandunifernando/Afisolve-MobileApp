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
import DashboardPage from './app/components/Dashboard/DashboardScreen';
import HomeScreen from './app/components/Home/HomeScreen';
import SigninPage from './app/components/Authentication/Signin';
import ComplaintSubmision from './app/components/Complaint/ComplaintScreen';
import NotificationsScreen from './app/components/Notification/NotificationScreen';
import {createStackNavigator} from '@react-navigation/stack';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Signin" component={SigninPage} />
        <Drawer.Screen name="Dashboard" component={DashboardPage} />
        <Drawer.Screen name="SubmitComplaint" component={ComplaintSubmision} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Drawer = createDrawerNavigator();
//
// export function () {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Signin" component={SigninPage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
//
// const Stack = createStackNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View
//       style={{
//         backgroundColor: '#000000',
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}>
//       <Button
//         onPress={() => navigation.navigate('Signin')}
//         title="Go to Sign in page"
//       />
//     </View>
//   );
// }

// function SigninPage({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         onPress={() => navigation.navigate('Signin')}
//         title="Go to Dashboard"
//       />
//     </View>
//   );
// }

// function DashboardPage({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         onPress={() => navigation.navigate('SubmitComplaint')}
//         title="Go to SubmitComplaint"
//       />
//     </View>
//   );
// }

// function ComplaintSubmision({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }
