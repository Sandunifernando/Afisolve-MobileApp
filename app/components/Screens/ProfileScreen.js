import React, {useState} from 'react';
import {
    View,
    Text,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
     Image,Alert
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import { HelperText} from 'react-native-paper';
import Button from 'react-native-paper/src/components/Button';
import DialogInput from 'react-native-dialog-input';

const ProfileScreen = () => {
const navigation = useNavigation();
const [password, setPassword] = useState('');
const onChangeText = password => setPassword(password);
const [confirmPassword, setconfirmPassword] = useState('');
const onChangeText2 = confirmPassword => setconfirmPassword(confirmPassword);
const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
const [email, setemail] = useState('');
const onChangeText3 = email => setemail(email);

const hasErrors = () => {
    return (password.length < 4) ;
  };

 const comparePassword = () => {
    return  (!password.match(confirmPassword));
  };

   const checkEmail= () => {
      return  (!strongRegex.test(email));
    };

    const [visible, setVisible] = useState(false);

    const showDialog = () => {
        setVisible(true);
    };

    const handleCancel = () => {
        setVisible(false);
    };

    const handleDelete = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        setVisible(false);
    };

    return (
//--------------------------------------------Profile
<ScrollView>
        <View style={styles.container}>
        <View style={{justifyContent:'center', alignItems:'center',marginTop:10, marginBottom:20}}>
            <Image
                animation="bounceIn"
                duraton="1500"
                source={require('../../assets/img/profile-1.jpg')}
                style={styles.logo}
                resizeMode="stretch"
            />
        </View>


{/*//--------------------------------------------First name*/}

                    <Text style={[styles.text_footer]}>First name</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Hiruni"
                            placeholderTextColor="black"
                            style={styles.textInput}
                            autoCapitalize="none"
                        />

                    </View>

{/*//--------------------------------------------Last name*/}
            <Text style={[styles.text_footer]}>Last Name</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Fernando"
                            placeholderTextColor="black"
                            style={styles.textInput}
                            autoCapitalize="none"

                        />
                    </View>

   {/*//-------------------------------------------- contact no*/}
               <Text style={[styles.text_footer]}>Contact Number</Text>
               <View style={styles.action}>

                   <TextInput
                       placeholder="0710893124"
                       placeholderTextColor="black"
                       style={styles.textInput}
                       autoCapitalize="none"
                       keyboardType="numeric"
                   />
               </View>


 {/*//--------------------------------------------email name*/}
            <Text style={[styles.text_footer]}>E-mail</Text>
            <View style={styles.action}>

                <TextInput
                    placeholder="hirunimfernando2002@gmail.com"
                    placeholderTextColor="black"
                    value={email}
                    style={styles.textInput}
                    autoCapitalize="none"
                    onChangeText={onChangeText3}

                />
                {/*<HelperText type="error" visible={checkEmail()}>*/}
                {/*                        Please insert valid email address!*/}
                {/*                      </HelperText>*/}
            </View>


 {/*//--------------------------------------------password*/}
            <Text style={[styles.text_footer]}>Password</Text>
            <View style={styles.action}>

                <TextInput
                    placeholder=" ******"
                    placeholderTextColor="black"
                    style={styles.textInput}
                    value={password}
                    keyboardType='numeric'
                    autoCapitalize="none"
                    secureTextEntry={true}
                    onChangeText={onChangeText}
                />
                {/*<HelperText type="error" visible={hasErrors()}>*/}
                {/*        Password should include more than 5 characters!*/}
                {/*      </HelperText>*/}


            </View>
            <Text style={[styles.text_footer]}>Confirm Password</Text>
                        <View style={styles.action}>

                            <TextInput
                                placeholder="****** "
                               placeholderTextColor="black"
                                style={styles.textInput}
                                value={confirmPassword}
                                keyboardType='numeric'
                                autoCapitalize="none"
                                secureTextEntry={true}
                                onChangeText={onChangeText2}
                            />
                             {/*<HelperText type="error" visible={comparePassword ()}>*/}
                             {/*                       Password must be same!*/}
                             {/*                     </HelperText>*/}


                        </View>
<View style={{ flexDirection: 'row' }}>
        <Button mode="contained" color='#1a2175'
                                        style={{width:100,marginTop:30,marginBottom:30,marginLeft:10 }}
                                        > Edit  </Button>
        {/*<Button*/}
        {/*mode="contained"*/}
        {/*color='#1a2175'*/}
        {/*onPress={() => Alert.alert(*/}
        {/*'Done!',*/}
        {/*'Please Enter OTP.',*/}
        {/*[{*/}
        {/*text : "OK",*/}
        {/*onPress:() => navigation.navigate('DashboardDrawer')}])}*/}
        {/*style={{width:100,marginTop:30,marginBottom:30,marginLeft:150}}*/}
        {/*  > Save </Button>*/}
    <Button
        mode="contained"
        color='#1a2175'
        onPress={() => showDialog()}

        style={{width:100,marginTop:30,marginBottom:30,marginLeft:150}}
    >Save</Button>

    <DialogInput isDialogVisible={visible}
                 title={"Please enter OTP"}
                 message={"We have sent an OTP to 'vdsanduni@gmail.com' to verify email."}
                 hintInput ={"Enter OTP"}
                 submitInput={ (inputText) => {this.sendInput(inputText)} }
                 closeDialog={ () => {this.showDialog(false)}}>
    </DialogInput>



</View>


        </View>
</ScrollView>
    );
};

export default ProfileScreen;
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingLeft :20
    },
    logo: {
        resizeMode: 'cover',
        width: height * 0.2,
        height: height * 0.2,
        borderRadius: (height * 0.2)/2,
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',

    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
});
