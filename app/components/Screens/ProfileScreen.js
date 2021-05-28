import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
     Image,
} from 'react-native';


const ProfileScreen = () => {

    return (
//--------------------------------------------Profile
        <View style={styles.container}>
        <View>
            <Image
                animation="bounceIn"
                duraton="1500"
                source={require('../../assets/img/logo1.png')}
                style={styles.logo}
                resizeMode="stretch"
            />
        </View>


{/*//--------------------------------------------First name*/}

                    <Text style={[styles.text_footer]}>Username</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Your Username"
                            style={styles.textInput}
                            autoCapitalize="none"
                        />

                    </View>

{/*//--------------------------------------------Last name*/}
            <Text style={[styles.text_footer]}>Password</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Your Password"
                            style={styles.textInput}
                            autoCapitalize="none"

                        />
                    </View>


 {/*//--------------------------------------------email name*/}
            <Text style={[styles.text_footer]}>Password</Text>
            <View style={styles.action}>

                <TextInput
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"

                />
            </View>


 {/*//-------------------------------------------- contact no*/}
            <Text style={[styles.text_footer]}>Password</Text>
            <View style={styles.action}>

                <TextInput
                    placeholder="Your Password"
                    style={styles.textInput}
                    autoCapitalize="none"

                />
            </View>

        </View>
    );
};

export default ProfileScreen;
const {height} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
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
        paddingBottom: 50
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
        paddingBottom: 5
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
