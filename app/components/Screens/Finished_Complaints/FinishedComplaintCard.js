import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import { Text} from 'react-native-paper';
import {Card} from 'react-native-shadow-cards';

const FinishedComplaintCard = ({item} )=> {
    return (
        <View>
            <Card style={{padding: 10, margin: 10}}>

                <Text style={styles.productName}> Your Complaint Refecrence No : <Text style={{fontWeight:"bold"}}>{item.complaintID}</Text> has been Closed!  </Text>

                <Text style={styles.category}> Description          :   <Text style={{fontWeight:"bold"}}>{item.description} </Text></Text>
                <Text style={styles.category}> Lodge Date          :   <Text style={{fontWeight:"bold"}}>{item.submittedDate} </Text></Text>
                <Text style={styles.category}> Accepted Date    :   <Text style={{fontWeight:"bold"}}>{item.lastDateOfPending} </Text></Text>
                <Text style={styles.category}> Completed Date :   <Text style={{fontWeight:"bold"}}>{item.finishedDate} </Text></Text>

            </Card>
        </View>
    );
};
export default FinishedComplaintCard;
const { width } =Dimensions.get('screen');
const styles =StyleSheet.create({

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
