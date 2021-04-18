import * as React from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text} from 'react-native-paper';
import LinearGradient from "react-native-linear-gradient";
import {useNavigation} from '@react-navigation/core';

const ProductButton = () => {
    const navigation = useNavigation();

    return (
        <View>


                <TouchableOpacity  onPress={() => navigation.navigate('SubmitComplaint')}>
                    <LinearGradient
                        colors={['#3263f8', '#00055b']}
                        style={styles.signIn}>
                        <Text style={styles.textSign}>Report </Text>
                    </LinearGradient>
                </TouchableOpacity>


        </View>
    );
};
export default ProductButton;

const styles =StyleSheet.create({


    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row',
        marginBottom:10,
        marginLeft:200,
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold',
    },


});
