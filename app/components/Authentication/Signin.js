import * as React from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import {useTheme} from '@react-navigation/native';

const SigninPage = ({navigation}) => {
  // function SigninPage(navigation) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>this is sign in</Text>
      <Button
        onPress={() => navigation.navigate('Dashboard')}
        title="Go to Dashboard"
      />
    </View>
  );
};

export default SigninPage;
