import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-community/async-storage';


const ProductPicker = ({token}) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [productDetails , setproductDetails] = useState([]);



        console.log(token, '____TOKEN FROM PRODUCT PICKER____'); //async eka athule thiyeddi awa
        console.log(selectedValue, '____PRODUCT NAME FROM PRODUCT PICKER____');
        console.log(productDetails, '____PRODUCT DETAILS FROM PRODUCT PICKER____');

    useEffect(() => {
        console.log('token eka------',token);

        // fetch('http://10.0.2.2:3000/customer/get-all-products', {
        //
        //     method: 'post',
        //     headers: {
        //         'Content-Type': 'application/json',
        //          'Authentication': `Bearer ${token}`
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => setproductDetails(json))
        //     .catch((error) => console.error(error))
    }, []);



    // const ProductPickerfunction = async () => {
    //
    //
    //
    //     console.log(token, '____TOKEN FROM PRODUCT PICKER____');
    //     console.log(ProductName, '____PRODUCT NAME FROM PRODUCT PICKER____');
    //     console.log(productDetails, '____PRODUCT DETAILS FROM PRODUCT PICKER____');
    //
    //
    // };
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={selectedValue}
                style={{height: 40, width: 150}}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedValue(itemValue);

                }}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
                {/*{productDetails.map((item, index) => {*/}
                {/*    return (<Picker.Item label={item.productName} value={index} key={index}/>)*/}
                {/*})}*/}


            </Picker>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
    },
});

export default ProductPicker;
