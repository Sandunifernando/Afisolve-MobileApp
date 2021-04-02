import * as React from 'react';
import {Dimensions, StyleSheet, View, FlatList, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, Button, Text} from 'react-native-paper';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ProductCard from './ProductCard';

const MypurchaseSceen = ({navigation}) => {
  const [productDetails , setproductDetails] = useState([]);
  console.log('productDetails Array',productDetails);

  useEffect(() => {
    getProductDetails();
  }, []);


  const getProductDetails = async () => {
    const token = await AsyncStorage.getItem('userToken');
    console.log('token from storage', token);

    fetch("http://10.0.2.2:3000/customer/get-all-products", {

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
//----------------
// if(!productDetails){
//   return null
// }
//  If there is an empty array try this, it will occur may be due to initiate the empty array in setproductDetails()
//-----------------


  return (
      <ScrollView>
          <FlatList data={productDetails.data}
                    keyExtractor={( item ,index) => 'key' + index}
                    renderItem={({item}) => {
                      return <ProductCard item = {item}/>
                    }} />
        <Button style={styles.Button} onPress={() => navigation.goBack()} title="Go back home" />
        {/*<ProductCard/>*/}
      </ScrollView>
  );
};
export default MypurchaseSceen;
const styles =StyleSheet.create({


  Button:{
    backgroundColor: '#344569'
  }


});
