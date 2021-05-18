import * as React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text} from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";

const InProgressComplaintCard = ({item} )=> {
    return (
        <View>
            <View style={ styles.cardView}>
                <View style={{ flexDirection:'row', paddingTop:10}}>
                    <Text style={styles.productName}> Complaint ID :{item.complaintID}</Text>
                    <TouchableOpacity  >
                        <LinearGradient
                            colors={['#3263f8', '#00055b']}
                            style={styles.signIn}>
                            <Text style={styles.textSign}>Add Comment </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <Text style={styles.category}> Description :{item.description} </Text>
                <Text style={styles.category}> Lodge Date :{item.submittedDate} </Text>
                <Text style={styles.category}> Accepted Date :{item. lastDateOfPending} </Text>
            </View>
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
        marginVertical: width * 0.03,
        color :'#000000',
        fontSize: 20,
        fontWeight:'bold'
    },

    category :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.03,
        color :'#000000',
        fontSize: 15
    },

    signIn: {
        width: 150,
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
