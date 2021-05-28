import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../Authentication/HomeScreen';
import DashboardPage from '../Screens/DashboardScreen';
import React from 'react';
import ComplaintSubmision from '../Screens/ComplaintScreen';
import {createStackNavigator} from '@react-navigation/stack';
import MypurchaseSceen from '../Screens/MypurchaseScreen';
import ComplaintTrackSceen from '../Screens/ComplaintTrack';
import ComplaintHistory from '../Screens/ComplaintScreen';
import ProfileScreen from '../Screens/ProfileScreen';

const DashboardStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const MypurchaseStack = createStackNavigator();
const ComplaintTrackStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#1a59ff"
      barStyle={{backgroundColor: '#0c0837'}}>
      <Tab.Screen
        name="Dashboard"
        component={DashboardStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
        }}
      />

      <Tab.Screen
        name="MyPurchase"
        component={MypurchaseStackScreen}
        options={{
          tabBarLabel: 'Purchase',
          tabBarIcon: ({color}) => (
            <Icon name="pricetags-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Complaint Track"
        component={ComplaintTrackStackScreen}
        options={{
          tabBarLabel: 'Track',
          tabBarIcon: ({color}) => (
            <Icon name="sync-circle-outline" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Submit_Complaint"
        // name="SubmitComplaint" --- kalin thibba eka wenas karanna kalin

        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

const DashboardStackScreen = ({navigation}) => (
  <DashboardStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0c0837',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <DashboardStack.Screen
      name="Dashboard"
      component={DashboardPage}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#0c0837"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </DashboardStack.Navigator>
);

const MypurchaseStackScreen = ({navigation}) => (
  <MypurchaseStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0c0837',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <MypurchaseStack.Screen
      name="My Purchase"
      component={MypurchaseSceen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#0c0837"
            onPress={() => navigation.openDrawer()}
          />

        ),
      }}
    />
  </MypurchaseStack.Navigator>
);

const ComplaintTrackStackScreen = ({navigation}) => (
  <ComplaintTrackStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0c0837',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ComplaintTrackStack.Screen
      name="ComplaintTrack"
      component={ComplaintTrackSceen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#0c0837"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ComplaintTrackStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0c0837',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ProfileStack.Screen
      name="Profile" //complaint history view
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="menu"
            size={25}
            backgroundColor="#0c0837"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </ProfileStack.Navigator>
);
