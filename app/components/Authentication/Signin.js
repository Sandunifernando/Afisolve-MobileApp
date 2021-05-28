import React, {useState} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Dimensions, Alert
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

      const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");

      if (!strongRegex.test(email)) {
          return(Alert.alert(
              "Login Error! ",
              "Please enter valid email address! ",
              [{
                  text: "OK",
                  onPress : () => navigation.navigate("Signin" ),
              }]
          ))
          // return false;
      } else if (password.length > 4) {
          return(Alert.alert(
              "Login Error ",
              "Invalid login, Your Username or Password  incorrect \nPlease try again ",
              [{
                  text: "OK",
                  onPress : () => navigation.navigate("Signin" ),
              }]
          ))
          // return false;
      }

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
          Alert.alert(
              "Login Error! ",
              "Invalid login, Please try to login via www.Afisolve.lk \n Thank you! ",
              [{
                text: "OK",
                onPress : () => navigation.navigate("Signin" ),
              }]
          )

        }

      })
      .catch(() => {

        Alert.alert(
            "Login Error! ",
            "Invalid login, Your Password or Username did not match!!! \nPlease try again ",
            [{
              text: "OK",

            }]
        )

      });

  };

  return (
    <View style={{flex: 1, backgroundColor: '#0c0837'}}>
      <StatusBar backgroundColor="#0c0837" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/img/logo1.png')}
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
            placeholder="E-mail"
            placeholderTextColor="white"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>

        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="white"
            secureTextEntry={true}
            keyboardType="numeric"
            value={password}
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
      resizeMode: 'cover',
      width: height * 0.2,
      height: height * 0.2,
      borderRadius: (height * 0.2)/2,
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
      borderRadius: 50,
      color :'#ffffff',
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
