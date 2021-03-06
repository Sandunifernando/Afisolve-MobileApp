import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AsyncStorage from '@react-native-community/async-storage';
import {hostName} from '../../constants/constants';
import {PickerItem} from 'react-native/Libraries/Components/Picker/Picker';

const ProductPicker = ({productID, setproductID}) => {
    const [productDetails, setproductDetails] = useState([]);


    useEffect(() => {
        getProductList();
    }, []);



    const getProductList = async () => {
        const token = await AsyncStorage.getItem('userToken');

        fetch(hostName+'/customer/get-all-products', {

            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((json) => setproductDetails(json.data))
            .catch((error) => console.error(error));
    };

    return (

        <View style={styles.container}>

                <Picker
                    selectedValue={productID}
                    style={{height: 40, width: 150, justifyContent:'center'}}
                    itemStyle={{ backgroundColor: "grey", color: "blue", fontFamily:"Ebrima", fontSize:17 }}
                    onValueChange={(itemValue, itemIndex) => {
                        setproductID(itemValue);
                    }}
                >
    {/*map the extracted product deatils*/}
                {productDetails.map((item, index) => {
                    return (
                        <Picker.Item label={item.productName} value={item.productID} key={index}/>);

                })}

            </Picker>

        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding :10,
        width:150,
marginLeft : 120,
        marginTop:50,
        borderWidth: 2,
justifyContent:'center',
       alignContent:'center',
        borderColor: '#0337c3',
        borderRadius: 4
    },

});

export default ProductPicker;
