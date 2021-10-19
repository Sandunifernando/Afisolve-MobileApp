import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';


import InProgressComplaintScreen from './InProgress_Complaint/InProgressComplaintScreen';
import ClosedComplaintScreen from './Closed_Complaints/ClosedComplaintScreen';
import FinishedComplaintScreen from './Finished_Complaints/FinishedComplaintScreen';
import PendingComplaintScreen from './Pending_Complaints/PendingComplaintScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import FeedbackScreen from './Closed_Complaints/FeedbackScreen';
import CommentScreen from './InProgress_Complaint/CommentScreen';
import SubComplaintSubmission from './SubComplaintSubmission';

const ColosedComplaintStack = createStackNavigator();
const InProgressComplaintStack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();
const ComplaintTrackSceen  = () => {
    return (

        <Tab.Navigator  tabBarOptions={{
                           labelStyle: { textTransform: "none", },
                             style: {
                               fontSize: 10,
                               fontWeight:'bold'
                             },
                       }}>
            <Tab.Screen name="Pending" component={PendingComplaintScreen}/>
            <Tab.Screen name="Progress " component={ InProgressComplaintStackScreen}/>
            <Tab.Screen name="Completed " component={ColosedComplaintStackScreen }/>
            <Tab.Screen name="Finished " component={FinishedComplaintScreen}/>
        </Tab.Navigator>

    );
};
//------------------------------------------------------track function 
const ComplaintLatencyTrack  = () => {
    return (

        <Tab.Navigator  tabBarOptions={{
                           labelStyle: { textTransform: "none", },
                             style: {
                               fontSize: 10,
                               fontWeight:'bold'
                             },
                       }}>
            <Tab.Screen name="rating" component={RatingComplaintScreen}/>
           
        </Tab.Navigator>

    );
}
export default ComplaintTrackSceen ;

//-----------------------------------------------------------

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

         <ColosedComplaintStack.Screen
             name="SubComplaint"
             component={SubComplaintSubmission}
             options={{
                 headerTintColor: 'black',
                 headerTitleStyle: {
                     fontWeight: 'bold',
                 },

             }}
         />
    </ColosedComplaintStack.Navigator>
);

//---------------------------------------------------------------------
const InProgressComplaintStackScreen = ({navigation}) => (
    <InProgressComplaintStack.Navigator>

        <InProgressComplaintStack.Screen
            name=" "
            component={InProgressComplaintScreen}
        />

        <InProgressComplaintStack.Screen
            name="Comment"
            component={CommentScreen}
            options={{
                headerTintColor: 'black',
                headerTitleStyle: {
                    fontWeight: 'bold',
                }
            }}
        />
    </InProgressComplaintStack.Navigator>
);
