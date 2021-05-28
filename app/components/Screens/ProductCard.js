import * as React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text} from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";
import ProductButton from './ProductButton';
import {Card} from 'react-native-shadow-cards';
const ProductCard = ({item} )=> {

    return (
        <View>
            <Card style={{padding: 10, margin: 10}}>

                <Text style={styles.productName}> Product Name     :  <Text>{item.productName}</Text></Text>
                <Text style={styles.category}> Category                   :   <Text>{item.category} </Text></Text>
                <View style={{alignItems: 'center'}}>
                <ProductButton />
                </View>
            </Card>

        </View>
    );
};
export default ProductCard;
const { width } =Dimensions.get('screen');
const styles =StyleSheet.create({


    productName :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.008,
        color :'#000000',
        fontSize: 17,
        fontWeight:'bold'
    },

    category :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.008,
        color :'#000000',
        fontSize: 15,
        fontWeight:'bold'
    },

    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },


});
