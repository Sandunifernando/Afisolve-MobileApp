import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image,StyleSheet} from 'react-native';
import {useState} from 'react';
// const FeedbackScreen = ({route}) => {
const FeedbackScreen = () => {
const [defaultRating, setdefaultRating] = useState(1)
const [maxRating, setmaxRating] = useState([1,2,3,4,5])

const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'

const CustomerRatingBar =() => {
    return (
        <View style = {styles.customRatingBarStyle}>
            {
                maxRating.map((item,key) => {
                    return (
                        <TouchableOpacity
                        activeOpacity={0.7}
                        key={item}
                        onPress={ () => setdefaultRating(item)}
                        >
                            <Image
                            style={styles.starImgStyle}
                            source={
                                item <= defaultRating
                                ? {uri : starImgFilled}
                                : {uri : starImgCorner}
                            }
                            />

                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>Please rate US!</Text>
        <CustomerRatingBar/>
        <Text style={styles.textStyle}>
            {defaultRating + ' / ' + maxRating.length}
        </Text>
        <TouchableOpacity
        activeOpacity={0.7}
        style={styles.buttonStyle}
        onPress={() => alert(defaultRating)}
        >
            <Text>Get Selected value</Text>

        </TouchableOpacity>
    </View>
);


  // return (
  //   <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
  //     <Text>This is Notification screen</Text>
  //     {/*<Button onPress={() => navigation.goBack()} title="Go back home" />*/}
  //
  //       <Text >
  //           Values passed from First page: {route.params.paramKey}
  //       </Text>
  //
  //   </View>
  // );
};
export default FeedbackScreen;
const  styles = StyleSheet.create({
    container : {
        flex : 1,
        margin: 10,
        justifyContent : 'center'
    },
    testStyle: {
        textAlign:'center',
        fontSize: 23,
        marginTop: 20
    },
    customRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30
    },
    starImgStyle:{
        width: 40,
        height: 40,

    },
    buttonStyle:{
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 30,
        padding:15,
        backgroundColor:'green'
    }


})
