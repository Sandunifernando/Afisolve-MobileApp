import * as React from 'react';
import NotificationsScreen from './NotificationScreen';
import HomeScreen from '../Authentication/HomeScreen';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View} from 'react-native';
import Text from 'react-native-paper';
import PendingComplaintScreen from './PendingComplaintScreen';
import InProgressComplaintScreen from './InProgressComplaintScreen';
import ClosedComplaintScreen from './ClosedComplaintScreen';
import FinishedComplaintScreen from './FinishedComplaintScreen';


const Tab = createMaterialTopTabNavigator();
const ComplaintTrackSceen  = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Pending " component={PendingComplaintScreen}/>
            <Tab.Screen name="In-Progress " component={InProgressComplaintScreen}/>
            <Tab.Screen name="Closed " component={ClosedComplaintScreen}/>
            <Tab.Screen name="Finished " component={FinishedComplaintScreen}/>
        </Tab.Navigator>

    );
};

export default ComplaintTrackSceen ;
