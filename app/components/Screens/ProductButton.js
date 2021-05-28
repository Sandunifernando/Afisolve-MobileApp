import * as React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text} from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from '@react-navigation/core';
import Button from 'react-native-paper/src/components/Button';

const ProductButton = () => {
    const navigation = useNavigation();

    return (
        <View>


                <Button
                    mode="contained" color='#1a2175' style={{width:120}}
                    onPress={() => navigation.navigate('Lodge Complaint')}>
                    Report
                </Button>


        </View>
    );
};
export default ProductButton;

