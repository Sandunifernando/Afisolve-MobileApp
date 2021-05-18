import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';


import InProgressComplaintScreen from './InProgress_Complaint/InProgressComplaintScreen';
import ClosedComplaintScreen from './Closed_Complaints/ClosedComplaintScreen';
import FinishedComplaintScreen from './Finished_Complaints/FinishedComplaintScreen';
import PendingComplaintScreen from './Pending_Complaints/PendingComplaintScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FeedbackScreen from './Closed_Complaints/FeedbackScreen';

const ColosedComplaintStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const ComplaintTrackSceen  = () => {
    return (

        <Tab.Navigator>
            <Tab.Screen name="Pending" component={PendingComplaintScreen}/>
            <Tab.Screen name="In-Progress " component={InProgressComplaintScreen}/>
            <Tab.Screen name="Closed " component={ColosedComplaintStackScreen }/>
            <Tab.Screen name="Finished " component={FinishedComplaintScreen}/>
        </Tab.Navigator>

    );
};

export default ComplaintTrackSceen ;

const ColosedComplaintStackScreen = ({navigation}) => (
     <ColosedComplaintStack.Navigator>
        <ColosedComplaintStack.Screen
name={' '}
            component={ClosedComplaintScreen}

        />
         <ColosedComplaintStack.Screen
             name="Feedback"
             component={FeedbackScreen}
             options={{
                 headerTintColor: 'black',
                 headerTitleStyle: {
                     fontWeight: 'bold',
                 },

             }}
         />
    </ColosedComplaintStack.Navigator>
);
