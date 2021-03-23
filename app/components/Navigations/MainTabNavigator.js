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

const DashboardStack = createStackNavigator();
const ComplaintStack = createStackNavigator();
const MypurchaseStack = createStackNavigator();
const ComplaintTrackStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#1a53ff"
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
        name="SubmitComplaint"
        component={ComplaintStackScreen}
        options={{
          tabBarLabel: 'History',
          tabBarIcon: ({color}) => (
            <Icon name="hourglass-outline" color={color} size={26} />
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

const ComplaintStackScreen = ({navigation}) => (
  <ComplaintStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#0c0837',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <ComplaintStack.Screen
      name="History" //complaint history view
      component={ComplaintHistory}
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
  </ComplaintStack.Navigator>
);
