import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image, StyleSheet, Alert} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {TextInput} from 'react-native-paper';

const FeedbackScreen = ({route}) => {

const [defaultRating, setdefaultRating] = useState(1)
const [maxRating, setmaxRating] = useState([1,2,3,4,5])
const [feedbackDescription, setfeedbackDescription] = useState('')
const [token, setToken] = useState('');
const complaintID = route.params.paramKey;
const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
console.log('***********'+ complaintID);


    useEffect(() => {
        saveToken();

    }, []);


    const saveToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        console.log('token from storage', token);
        setToken(token);
    }

    const feedbackSubmission = () =>{

        fetch("http://10.0.2.2:3000/customer/create-feedback", {

            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body:JSON.stringify( {
                complaintID : complaintID,
                feedback : feedbackDescription,
                ratedValue : defaultRating

            })

        })

    }


const CustomerRatingBar =() => {
    return (
        <View style = {styles.customRatingBarStyle}>
            {
                maxRating.map((item,key) => {
                    return (
                        <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={ () => setdefaultRating(item)}
                        >
                            <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaultRating
                                ? {uri : starImgFilled}
                                : {uri : starImgCorner}
                            }
                            />

                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

return (
    <View style={styles.container}>

        <Text style={styles.textStyle}>Please rate US!</Text>
        <CustomerRatingBar/>
        <Text style={styles.textStyle}>
            {defaultRating + ' / ' + maxRating.length}
        </Text>

        <TextInput
            style={styles.PIDstyle}
            label="Description"
            onChangeText = {(feedbackDescription) => setfeedbackDescription(feedbackDescription)}
        />

        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.buttonStyle}
            onPress={() => feedbackSubmission()
                }
        >
            <Text style={{color: 'white', justifyContent:'center',alignItems:'center'}}>Submit Feedback</Text>

        </TouchableOpacity>
    </View>
);

};
export default FeedbackScreen;
const  styles = StyleSheet.create({
    container : {
        flex : 1,
        margin: 10,
        justifyContent : 'center'
    },
    PIDstyle: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },
    testStyle: {
        textAlign:'center',
        fontSize: 23,
        marginTop: 20
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle:{
        width: 40,
        height: 40,

    },
    buttonStyle:{
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 30,
        marginHorizontal:20,
        padding:15,
        backgroundColor:'green'
    }


})
