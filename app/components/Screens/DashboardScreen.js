import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {Appbar} from 'react-native-paper';
import {ScrollView} from 'react-native';


const DashboardPage = ({navigation}) => {

  return (
    <ScrollView>
      {/*<Appbar.Header>*/}
      {/*  <Appbar.BackAction onPress={_goBack} />*/}
      {/*  <Appbar.Content title="afiSolve" />*/}
      {/*  <Appbar.Action icon="magnify" onPress={_handleSearch} />*/}
      {/*  <Appbar.Action icon="dots-vertical" onPress={_handleMore} />*/}
      {/*</Appbar.Header>*/}
      <View
        style={{
          flex: 1,
          backgroundColor: '#c2c2f8',
        }}>
        <Card>
          <Card.Cover source={require('../../assets/img/dash.jpg')} />
        </Card>

        <Card style={styles.maincard}>
          <Text style={styles.cardtitle}> My Purchases </Text>

          <Button
            mode="contained"
            onPress={() => navigation.navigate('MyPurchase')}>
            View Store
          </Button>
        </Card>
        <Card style={styles.maincard}>
          <Text style={styles.cardtitle}> Open Complaint </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('SubmitComplaint')}>
            Submit Complaint
          </Button>
        </Card>
        <Card style={styles.maincard}>
          <Text style={styles.cardtitle}> Track Complaints</Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Complaint Track')}>
            Track Complaint
          </Button>
          {/*</Button>*/}
        </Card>
        <Card style={styles.maincard}>
          <Text style={styles.cardtitle}> Profile </Text>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Profile')}>
            View Profile
          </Button>
        </Card>
      </View>
    </ScrollView>
  );
};
export default DashboardPage;
const styles = StyleSheet.create({
  surface: {
    height: 150,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 5,
    marginBottom: 20,
    shadowColor: 'white',
  },
  cardtitle: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
  },
  maincard: {
    padding: 20,
    margin: 15,
    height: 80,
    backgroundColor: '#6b72ea',
  },
});
