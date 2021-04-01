import * as React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

const ComplaintHistory = ({navigation}) => {

  return (
    <View style={{flex: 1}}>
      <Card style={styles.maincard}>
        <Text>Complaint ID : 456AB</Text>

        <Button
          style={styles.buttonContainer}
          color="blue"
          title="Pending"
          onPress={() => {}}
        />
        <Button
          style={styles.buttonContainer}
          color="red"
          title="Open Complaint"
          onPress={() => {}}
        />
      </Card>
      <Card style={styles.maincard}>
        <Text>Complaint ID : 456AB</Text>

        <Button
          style={styles.buttonContainer}
          color="green"
          title="Completed"
          onPress={() => {}}
        />
        <Button
          style={styles.buttonContainer}
          color=""
          title="Not Satisfy?"
          onPress={() => {}}
        />
        <Button
          style={styles.buttonContainer}
          color=""
          title="Rate US"
          onPress={() => {}}
        />
      </Card>

      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
};
export default ComplaintHistory;

const styles = StyleSheet.create({
  maincard: {
    padding: 20,
    margin: 10,
    height: 150,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 110,
    },
    shadowOpacity: 1,
    shadowRadius: 16,

    elevation: 12,
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 50,
    width: 3,
    marginTop: 3,
  },
});
