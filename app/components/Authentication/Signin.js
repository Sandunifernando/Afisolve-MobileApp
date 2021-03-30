import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';

import {useTheme} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {login} from '../../services/authService';
import AsyncStorage from '@react-native-community/async-storage';

const SigninPage = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {colors} = useTheme();

  const signIn =  () => {
    login(email, password)
      .then((res) => {

        AsyncStorage.setItem('userData', JSON.stringify(res.data.dbResult[0]));
        AsyncStorage.setItem('userRole', res.data.defaultRole);
        console.log('res.data.token: '+res.data.token);
        console.log('res.data.role: '+res.data.defaultRole);


        AsyncStorage.setItem('userToken', res.data.token);
        console.log(res.data.defaultRole);// find role of the combination of credentials and allow if role==customer
        if (res.data.defaultRole === 'customer') {
          navigation.navigate('DashboardDrawer');
          console.log('successfully logged!');

        } else {
          console.log('User type not matched!');
        }

      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000e60'}}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/img/afisolve_logo.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <Text style={styles.signinTop}>Sign in with your account</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>

        <TouchableOpacity
          onPress={() => signIn() }>
          <LinearGradient colors={['#730018', '#00085b']} style={styles.signIn}>
            <Text style={styles.textSign}>SIGN IN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text>Fogot Your Password?</Text>
      </Animatable.View>
    </View>
  );
};

export default SigninPage;
const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;
const styles = StyleSheet.create({
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: height_logo,
    height: height_logo,
    borderRadius: 150 / 3,
  },

  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    backgroundColor: '#2937f6',

    width: '70%',
    height: 45,
    marginBottom: 20,
    alignItems: 'center',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  signinTop: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 25,
  },
});
