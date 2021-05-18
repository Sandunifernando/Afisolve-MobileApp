import * as React from 'react';
import {Button, View, Text} from 'react-native';

const FeedbackScreen = ({navigation}) => {
  // export default function NotificationsScreen(navigation) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>This is Notification screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};
export default FeedbackScreen;
