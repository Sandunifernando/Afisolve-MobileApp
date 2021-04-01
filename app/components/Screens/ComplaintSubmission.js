import * as React from 'react';
import {Button, View, Text, ScrollView, StyleSheet, Alert} from 'react-native';
import {Appbar} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ProductPicker from './ProductPicker';


const ComplaintSubmission = ({navigation}) => {

    const [productID , setproductID] = useState('');
    const [description , setdescription] = useState('');
    const [token, setToken] = useState('');
    // const [token, setToken] = useState('initial state');


    const saveToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        console.log('token from storage', token);
        setToken(token);
    }

    useEffect(() => {
        saveToken();
        fetch("http://10.0.2.2:3000/customer/lodge-complaint", {

            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body: JSON.stringify({
                productID,
                description,
            })

        })

    }, []);

    // const complaintSubmit = async () => {
        // const token = await AsyncStorage.getItem('userToken');
        // setToken(token);
        // console.log(token,'____TOKEN FROM COMPLAINT SUBMISSION____');
        // fetch("http://10.0.2.2:3000/customer/lodge-complaint", {
        //
        //     method: "post",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authentication': `Bearer ${token}`
        //     },
        //     body: JSON.stringify({
        //         productID,
        //         description,
        //     })
        //
        // })

    // }
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
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Submit Complaint" />
        <Appbar.Action icon="magnify" onPress={() => navigation.openDrawer()} />
      </Appbar.Header>
      <Text>Plese Fill the following</Text>
      <View>
          {console.log('renderer token', token)}
       <ProductPicker />

        <TextInput

          style={styles.PIDstyle}
          label="Product ID"
          onChangeText = {(productID) => setproductID(productID)}

        />
        <HelperText type="error">
          {/*<HelperText type="error" visible={hasErrors()}>*/}
          Product ID Required
        </HelperText>
      </View>
      <TextInput
        style={styles.PIDstyle}
        label="Subject"
      />
      <TextInput
        style={styles.PIDstyle}
        label="Description"
        onChangeText = {(description) => setdescription(description)}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is submittion</Text>
        <Button onPress={() => openAlert()} title="Submit Complaint" />
      </View>
    </ScrollView>
  );
};
export default ComplaintSubmission;
const styles = StyleSheet.create({
  PIDstyle: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});
