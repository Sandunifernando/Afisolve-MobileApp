import * as React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text} from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";
import CommentScreen from './CommentScreen';
import {useNavigation} from '@react-navigation/core';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import InProgressComplaintScreen from './InProgressComplaintScreen';
import Button from 'react-native-paper/src/components/Button';
import {Card} from 'react-native-shadow-cards';



const InProgressComplaintCard = ({item} )=> {
    const navigation = useNavigation();
    return (
        <View>
            <Card style={{padding: 10, margin: 10}}>
                <Text style={styles.productName}> Your Complaint Refecrence No : <Text style={{fontWeight:"bold"}}>{item.complaintID}</Text> has been processing! </Text>
                <Text style={styles.category}> Description          :   <Text style={{fontWeight:"normal"}}>{item.description} </Text></Text>
                <Text style={styles.category}> Lodge Date          :   <Text style={{fontWeight:"normal"}}>{item.submittedDate} </Text></Text>
                <Text style={styles.category}> Accepted Date    :   <Text style={{fontWeight:"normal"}}>{item.lastDateOfPending} </Text></Text>
                <Button mode="contained" color='#1a2175'
                        style={{width:180}}
                        onPress={() => navigation.navigate('Comment')}>
                    Add Comment
                </Button>
            </Card>
//----------------contribution
<Card style={{padding: 10, margin: 10}}>
                <Text style={styles.Rate}> Your Complaint Refecrence No : <Text style={{fontWeight:"bold"}}>{item.complaintID}</Text> has been processing! </Text>
                <Text style={styles.category}> Description          :   <Text style={{fontWeight:"normal"}}>{item.description} </Text></Text>
                <Text style={styles.category}> Complaint Ref:   :   <Text style={{fontWeight:"normal"}}>{item.ComplaintNo} </Text></Text>
                <Button mode="contained" color='#1a2175'
                        style={{width:180}}
                        onPress={() => navigation.navigate('Comment')}>
                    Add Comment
                </Button>
            </Card>
//----------------------------------
        </View>
    );
};
export default InProgressComplaintCard;






const { width } =Dimensions.get('screen');
const styles =StyleSheet.create({
    cardView :{
        backgroundColor: '#a8b1ff',
        margin : width * 0.03,
        shadowColor : '#000000',
        shadowOpacity: 0.5,
        borderRadius: 40,
        height: 200,
        // height : 0.5,
        // width: 0.5


    },

    productName :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.008,
        color :'#000000',
        fontSize: 15,
        fontStyle: 'italic'
    },

    category :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.008,
        color :'#000000',
        fontSize: 15,
        fontWeight:'bold'
    },


});
