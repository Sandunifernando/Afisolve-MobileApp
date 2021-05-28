import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import { Text} from 'react-native-paper';
import {Card} from 'react-native-shadow-cards';

const PendingComplaintCard = ({item} )=> {
    return (
        <View>
            <Card style={{padding: 10, margin: 10}}>
                <Text style={styles.productName}> Your Complaint Refecrence No : <Text style={{fontWeight:"bold"}}>{item.complaintID}</Text> will be get into process as soon as possible!  </Text>
                <Text style={styles.category}> Description          :   <Text style={{fontWeight:"bold"}}>{item.description} </Text></Text>
                <Text style={styles.category}> Lodge Date          :   <Text style={{fontWeight:"bold"}}>{item.submittedDate} </Text></Text>
            </Card>
        </View>
    );
};
export default PendingComplaintCard;
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
