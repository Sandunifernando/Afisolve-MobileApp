import * as React from 'react';
import {Dimensions, StyleSheet, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ProductCard from './ProductCard';
import {hostName} from '../../constants/constants';

const MypurchaseSceen = () => {
  const [productDetails , setproductDetails] = useState([]);


  useEffect(() => {
    getProductDetails();
  }, []);


  const getProductDetails = async () => {
    const token = await AsyncStorage.getItem('userToken');


    fetch(hostName +"/customer/get-all-products", {

      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Authentication': `Bearer ${token}`
      },
    })
        .then((response) => response.json())
        .then((json) => setproductDetails(json))
        .catch((error) => console.error(error))

  };


  return (
      <View>
          <FlatList data={productDetails.data}
                    keyExtractor={( item ,index) => 'key' + index}
                    renderItem={({item}) => {
                      return (
                          <ProductCard item = {item}/>

                          )
                    }} />


      </View>
  );
};
export default MypurchaseSceen;
const styles =StyleSheet.create({


  Button:{
    backgroundColor: '#344569'
  },

  // signIn: {
  //   width: 150,
  //   height: 40,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 50,
  //   flexDirection: 'row',
  // },
  // textSign: {
  //   color: 'white',
  //   fontWeight: 'bold',
  // },


});
