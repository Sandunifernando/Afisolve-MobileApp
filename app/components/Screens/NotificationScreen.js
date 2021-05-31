import * as React from 'react';
import { Dimensions,View, Text, ScrollView, StyleSheet, Alert, TouchableOpacity} from 'react-native';
import {Appbar} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ProductPicker from './ProductPicker';
import LinearGradient from "react-native-linear-gradient";
import Button from 'react-native-paper/src/components/Button';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationScreen = ({navigation}) => {


    const [token, setToken] = useState('');

    useEffect(() => {
        saveToken();

    }, []);


    const saveToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        console.log('token from storage', token);
        setToken(token);
    }




  return (
    <ScrollView>
      <Appbar.Header style={{backgroundColor:'#1a2175'}}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Notification" />

      </Appbar.Header>

      <View>
                  <Card style={{padding: 5, margin: 10,flexDirection:'row'}}>
                  <Icon
                              name="checkmark-done-circle"
                              size={25}
                              color='#20CB1A'
                              />
                    <Text style={styles.category}> Dear Customer, Your Complaint Referance number 10 get in to process.Please see it under In-progress complaints.</Text>
                  </Card>
                  <Card style={{padding: 5, margin: 10,flexDirection:'row'}}>
                  <Icon
                                                name="checkmark-done-circle"
                                                size={25}
                                                color='#20CB1A'
                                                />
                    <Text style={styles.category}> Dear Customer, Your Complaint Referance number 30 has been resolved. Please see it under completed complaints.</Text>
                  </Card>

              </View>


    </ScrollView>
  );
};
export default NotificationScreen;
const { width } =Dimensions.get('screen');
const styles =StyleSheet.create({



    category :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.008,
        color :'#000000',
        paddingRight :10,
        textAlign:'justify',
        fontSize: 15,
        fontWeight:'bold'
    },
});
