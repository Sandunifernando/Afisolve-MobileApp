import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ProductPicker from './ProductPicker';
import LinearGradient from "react-native-linear-gradient";
import Button from 'react-native-paper/src/components/Button';



const ComplaintSubmission = ({navigation}) => {

    const [productID , setproductID] = useState('');
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

        fetch("http://10.0.2.2:3000/customer/lodge-complaint", {

            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body:JSON.stringify( {

                productID : productID,
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
      <Appbar.Header style={{backgroundColor:'#1a2175'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Lodge Complaint" />

      </Appbar.Header>

      <Text style={styles.Firstline}>Please fill the following details to lodge a complaint!</Text>

      <View style={{justifyContent:'center'}}>
          {/*Firstly set the initial states in the Product picker and send them to child component to update as a props*/}
          <ProductPicker productID={productID} setproductID={setproductID} />

        <HelperText type="info">
          Make sure select the correct Product
        </HelperText>
      </View>

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
             Lodge Complaint
          </Button>

      </View>
    </ScrollView>
  );
};
export default ComplaintSubmission;
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
    signIn: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginTop:20,

    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },

});

