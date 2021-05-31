import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import {Appbar} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ProductPicker from './ProductPicker';
import {useNavigation} from '@react-navigation/core';
import Button from 'react-native-paper/src/components/Button';

const SubComplaintSubmission = ({route}) => {
    const navigation = useNavigation();
    let complaintID = route.params.paramKey;
    const [description , setdescription] = useState('');
    const [token, setToken] = useState('');

    useEffect(() => {
        saveToken();

    }, []);


    const saveToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        console.log('token from storage', token);
        setToken(token);
    }

    const send = () =>{

        fetch("http://10.0.2.2:3000/customer/lodge-sub-complaint", {

            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body:JSON.stringify( {

                complaintID : complaintID,
                description : description

            })

        })

    }

    const openAlert = () => {
        Alert.alert(
            "Sub-Complaint Successfully Submitted",
            "We review it as soon as possible. Thank you for reaching for us!",
            [{
                text: "OK",
                onPress : () => navigation.navigate("DashboardDrawer" ),
            }]
        );
    }

    return (
        <ScrollView>


            <Text style={styles.Firstline}>Please submit your issue still facing!</Text>



            <TextInput
                style={styles.PIDstyle}
                label="Description"
                multiline={true}
                onChangeText = {(description) => setdescription(description)}
            />
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                {/*<Button style={styles.lodgeButton}  onPress={() => {send(); openAlert();}} title="Submit Complaint" />*/}

                <Button
                    mode="contained" color='#1a2175'
                    style={{marginTop:30, marginBottom:30}}
                    onPress={() => {send(); openAlert();}}>
                    Lodge Sub-Complaint
                </Button>

            </View>
        </ScrollView>
    );
};
export default SubComplaintSubmission;
const styles = StyleSheet.create({
    PIDstyle: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20,
        height : 200,
    },
    Firstline:{
        marginLeft: 25,
        marginTop: 15,
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Cochin'
    },
});
