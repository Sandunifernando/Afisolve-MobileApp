import * as React from 'react';
import {Button, View, Text} from 'react-native';
import SigninPage from '../Authentication/Signin';
const ComplaintSubmision = ({navigation}) => {
// function ComplaintSubmision(navigation) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>this is complaint screen</Text>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}
export default ComplaintSubmision;
