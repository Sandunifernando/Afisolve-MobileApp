import * as React from 'react';
import {Button, View, Text} from 'react-native';
import SigninPage from '../Authentication/Signin';
const DashboardPage = ({navigation}) => {
  // function DashboardPage(navigation) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
      }}>
      <Text>this is dashboard</Text>
      <Button
        onPress={() => navigation.navigate('SubmitComplaint')}
        title="Go to SubmitComplaint"
      />
    </View>
  );
};
export default DashboardPage;
