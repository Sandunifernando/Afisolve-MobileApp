import * as React from 'react';
import {Alert, Button, Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text} from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from '@react-navigation/core';
import FeedbackScreen from './FeedbackScreen';



const ClosedComplaintCard =  ({item} )=> {


    const navigation = useNavigation();







    return (
        <View>
            <View style={ styles.cardView}>
                <Text style={styles.productName}> Complaint ID :{item.complaintID}</Text>
                <Text style={styles.category}> Description :{item.description} </Text>
                <Text style={styles.category}> Lodge Date :{item.submittedDate} </Text>
                <Text style={styles.category}> Accepted Date :{item.lastDateOfPending} </Text>
                <Text style={styles.category}> Completed Date :{item.finishedDate} </Text>
                <Text > Are You Satisfied ? </Text>
                    <View style={{ flexDirection:'row', paddingTop:10}}>

                        <TouchableOpacity
                            style={styles.SatisfiedButton}
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

                            { text: "Loadge Sub-Complaint", onPress: () => navigation.navigate("Signin" ) }
                                ]
                                )}
                                >
                            <LinearGradient
                                colors={['#3263f8', '#00055b']}
                                style={styles.signIn}>
                                <Text style={styles.textSign}>Yes </Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.SatisfiedButton}
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

                                        { text: "Loadge Sub-Complaint", onPress: () => navigation.navigate("Signin" ) }
                                    ]
                                )} >
                            <LinearGradient
                                colors={['#3263f8', '#00055b']}
                                style={styles.signIn}>
                                <Text style={styles.textSign}>No</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
            </View>
        </View>
    );




};
export default ClosedComplaintCard;



const { width } =Dimensions.get('screen');
const styles =StyleSheet.create({
    cardView :{
        backgroundColor: '#a8b1ff',
        margin : width * 0.03,
        shadowColor : '#000000',
        shadowOpacity: 0.5,
        borderRadius: 40,
        height: 350,
        // height : 0.5,
        // width: 0.5


    },

    productName :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.03,
        color :'#000000',
        fontSize: 20,
        fontWeight:'bold'
    },


    SatisfiedButton:{
        paddingLeft: 45,
    },

    category :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.03,
        color :'#000000',
        fontSize: 15
    },

    signIn: {
        width: 100,
        height: 40,

        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },


});
