import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import InProgressComplaintCard from './InProgressComplaintCard';


const InProgressComplaintScreen= () => {
    const [complaintDetails, setcomplaintDetails] = useState('');

    useEffect(() => {
        send();
    }, []);

    const send = async() => {
        const token = await AsyncStorage.getItem('userToken');
        fetch("http://10.0.2.2:3000/customer/get-complaints-by-statusID", {
            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body: JSON.stringify({
                statusID: 1,
            })
        })
            .then((response) => response.json())
            .then((json) => setcomplaintDetails(json))
            .catch((error) => console.error(error))
    };
    console.log('*******' + complaintDetails.data);

    return (
        <View>
            <FlatList data={complaintDetails.data}
                      keyExtractor={( item ,index) => 'key' + index}
                      renderItem={({item}) => {
                          return (
                              <InProgressComplaintCard item = {item}/>
                          )
                      }} />
        </View>
    );
};
export default InProgressComplaintScreen;



