import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card, Button, Text} from 'react-native-paper';
import ComplaintSubmission from './ComplaintSubmission';

const MypurchaseSceen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Card style={styles.maincard}>
        <Text>Product No. : P01</Text>
        <Text>Product : Loadstar</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => navigation.navigate('SubmitComplaint')}>
          Report Problem
        </Button>
      </Card>

      <Card style={styles.maincard}>
        <Text>Product No. : P02</Text>
        <Text>Product : Planner</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => console.log('Pressed')}>
          Report Problem
        </Button>
      </Card>

      <Card style={styles.maincard}>
        <Text>Product No. : P01</Text>
        <Text>Product : FixedIT</Text>
        <Button
          icon="camera"
          mode="contained"
          onPress={() => navigation.navigate('SubmitComplaint')}>
          Report Problem
        </Button>
      </Card>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};
export default MypurchaseSceen;

const styles = StyleSheet.create({
  maincard: {
    padding: 20,
    margin: 10,
    height: 150,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 110,
    },
    shadowOpacity: 1,
    shadowRadius: 16,

    elevation: 12,
  },
});
