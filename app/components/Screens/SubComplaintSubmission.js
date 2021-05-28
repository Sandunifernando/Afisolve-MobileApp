import * as React from 'react';
import {Button, View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import {Appbar} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ProductPicker from './ProductPicker';
import {useNavigation} from '@react-navigation/core';

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
            "Complaint Successfully Submitted",
            "We review it as soon as possible. Thank you for reaching for us!",
            [{
                text: "OK",
                onPress : () => navigation.navigate("DashboardDrawer" ),
            }]
        );
    }

    return (
        <ScrollView>
            {/*<Appbar.Header>*/}
            {/*    <Appbar.BackAction onPress={() => navigation.goBack()} />*/}
            {/*    <Appbar.Content title="Submit Complaint" />*/}
            {/*    <Appbar.Action icon="magnify" onPress={() => navigation.openDrawer()} />*/}
            {/*</Appbar.Header>*/}

            <Text>Please submit your issue still facing!</Text>

            {/*<View>*/}
            {/*    /!*Firstly set the initial states in the Product picker and send them to child component to update as a props*!/*/}
            {/*    <ProductPicker productID={productID} setproductID={setproductID} />*/}

            {/*    <HelperText type="info">*/}
            {/*        Make sure select the correct Product*/}
            {/*    </HelperText>*/}
            {/*</View>*/}

            <TextInput
                style={styles.PIDstyle}
                label="Description"


                onChangeText = {(description) => setdescription(description)}
            />

            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>This is submittion</Text>
                <Button onPress={() => {send(); openAlert();}} title="Lodge Sub-Complaint" />
            </View>
        </ScrollView>
    );
};
export default SubComplaintSubmission;
const styles = StyleSheet.create({
    PIDstyle: {
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
    },
});
