import * as React from 'react';
import {Alert, Dimensions, StyleSheet, View} from 'react-native';
import { Text} from 'react-native-paper';

import {useNavigation} from '@react-navigation/core';
import FeedbackScreen from './FeedbackScreen';
import {Card} from 'react-native-shadow-cards';
import Button from 'react-native-paper/src/components/Button';
const ClosedComplaintCard =  ({item} )=> {

    const navigation = useNavigation();

    return (
        <View>
            <Card style={{padding: 10, margin: 10}}>
                <Text style={styles.productName}> Your Complaint Refecrence No : <Text style={{fontWeight:"bold"}}>{item.complaintID}</Text> has been resolved!  </Text>

                {/*<Text style={styles.productName}> Complaint ID   :   {item.complaintID}</Text>*/}
                <Text style={styles.category}> Description          :   <Text style={{fontWeight:"normal"}}>{item.description} </Text></Text>
                <Text style={styles.category}> Lodge Date          :   <Text style={{fontWeight:"normal"}}>{item.submittedDate} </Text></Text>
                <Text style={styles.category}> Accepted Date    :   <Text style={{fontWeight:"normal"}}>{item.lastDateOfPending} </Text></Text>
                <Text style={styles.category}> Completed Date :   <Text style={{fontWeight:"normal"}}>{item.finishedDate} </Text></Text>

                    <View style={{ flexDirection:'row', paddingTop:10}}>

                        <Button  mode="contained" color='#4cb340'
                            onPress={() =>
                                Alert.alert(
                                "You Seem to be satisfied! ",
                                "Your Feedback on our satisfication with our service is greatly appreciated! \n Please Rate our service. ",
                                [

                            {
                                text: "Cancel",
                                onPress: () => navigation.goBack(),
                                style: "cancel"
                            },

                            { text: "Give Feedback", onPress: () => navigation.navigate("Feedback", {
                                    paramKey: item.complaintID,
                                } ) }
                                ]
                                )}
                                >
                            I'm satisfied
                        </Button>
                        <Button  mode="contained" color='#ffc107'
                            onPress={() =>
                                Alert.alert(
                                    "You Seem to be not satisfied! ",
                                    "You can re-lodge the issue still you are facing! \n We reach your issue as soon as possible. ",
                                    [

                                        {
                                            text: "Cancel",
                                            onPress: () => navigation.goBack(),
                                            style: "cancel"
                                        },

                                        { text: "Loadge Sub-Complaint", onPress: () => navigation.navigate("SubComplaint" ,{
                                                paramKey: item.complaintID,
                                            }) }
                                    ]
                                )} >
                            I'm not satisfied
                        </Button>
                    </View>
            </Card>
        </View>
    );




};
export default ClosedComplaintCard;



const { width } =Dimensions.get('screen');
const styles =StyleSheet.create({


    productName :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.008,
        color :'#000000',
        fontSize: 15,
        fontStyle: 'italic'

    },


    SatisfiedButton:{
        paddingLeft: 45,
    },

    category :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.008,
        color :'#000000',
        fontSize: 15,
        fontWeight:'bold'
    },



});
