import * as React from 'react';
import {Button, View, Text} from 'react-native';

const ComplaintTrackSceen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Complaint track</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};
export default ComplaintTrackSceen;
