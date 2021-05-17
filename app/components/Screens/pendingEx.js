import * as React from 'react';
import {View, FlatList} from 'react-native';
import {useState,useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import ComplaintCard from './ComplaintCard';
import PendingComplaintScreen from './PendingComplaintScreen';


const pendingEx= () => {
    return(
    <PendingComplaintScreen statusID={0}/>
    )
};
export default pendingEx;



