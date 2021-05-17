import * as React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    StatusBar,
    Image, FlatList,
} from 'react-native';
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';


const PendingComplaintScreen= () => {

const [token,setToken] = useState('');
const [complaintDetails,setcomplaintDetails] =useState([]);

    useEffect(() => {
        saveToken();
        send();

    }, []);


    const saveToken = async () => {
        const token = await AsyncStorage.getItem('userToken');
        console.log('token from storage', token);
        setToken(token);
    }

    const send = () =>{

        fetch("http://10.0.2.2:3000/customer/get-complaints-by-statusID", {

            method: "post",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`
            },
            body:JSON.stringify( {
                statusID : 0,
            })
        })
            .then((response) => response.json())
              .then((json) => setcomplaintDetails(json))
            .then((responseJson => {
                console.log(responseJson);
            })
            .catch((error) => console.error(error))


    };

    return (

        <View>
            <Text>hello</Text>
        {/*    <FlatList  data = {complaintDetails.data}*/}
        {/*               keyExtractor={(item, index) => 'key' + index}*/}
        {/*               renderItem={({item}) =>{*/}
        {/*                   return (*/}
        {/*                       <View>*/}
        {/*    <View style={ styles.cardView}>*/}

        {/*        <Text style={styles.productName}> Product Name :{item.productName}</Text>*/}
        {/*        <Text style={styles.category}> Category :{item.category} </Text>*/}


        {/*    </View>*/}
        {/*</View>*/}

        {/*                   )*/}

        {/*               }}*/}

        {/*    />*/}
        </View>
    );

};

export default PendingComplaintScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

