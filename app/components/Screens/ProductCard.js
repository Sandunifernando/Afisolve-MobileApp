import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, Button, Text} from 'react-native-paper';

const ProductCard = ({item}) => {

    return (
        <View>
            <View style={ styles.cardView}>
                <Text style={styles.productName}> Product Name :{item.productName}</Text>
                <Text style={styles.category}> Category :{item.category} </Text>
            </View>
        </View>
    );
};
export default ProductCard;
const { width } =Dimensions.get('screen');
const styles =StyleSheet.create({
    cardView :{
        backgroundColor: '#a8b1ff',
        margin : width * 0.03,
        shadowColor : '#000000',
        shadowOpacity: 0.5,
        // height : 0.5,
        // width: 0.5


    },

    productName :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.03,
        color :'#000000',
        fontSize: 20,
        fontWeight:'bold'
    },

    category :{
        marginHorizontal:width * 0.05,
        marginVertical: width * 0.03,
        color :'#000000',
        fontSize: 15
    },

    Button:{
        backgroundColor: '#344569'
    }


});
