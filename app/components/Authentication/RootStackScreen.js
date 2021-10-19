import * as React from 'react';
import SigninPage from '../Authentication/Signin';
import createStackNavigator from '@react-navigation/stack/src/navigators/createStackNavigator';
import HomeScreen from './HomeScreen';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Home" component={HomeScreen} />
    <RootStack.Screen name="Signin" component={SigninPage} />
//------------- contribution
    <RootStack.Screen name="" component={ComplaintScreen} />
    <RootStack.Screen name="Signin" component={SignoutPage} />
  </RootStack.Navigator>;
};

export default RootStackScreen;
