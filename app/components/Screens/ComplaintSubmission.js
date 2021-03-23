import * as React from 'react';
import {Button, View, Text, ScrollView, StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {TextInput, HelperText} from 'react-native-paper';

const ComplaintSubmission = ({navigation}) => {
  const [text, setText] = React.useState('');
  const onChangeText = (text) => setText(text);
  const hasErrors = () => {
    return !text.includes('@');
  };

  return (
    <ScrollView>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Submit Complaint" />
        <Appbar.Action icon="magnify" onPress={() => navigation.openDrawer()} />
      </Appbar.Header>
      <Text>Plese Fill the following</Text>
      <View>
        <TextInput
          style={styles.PIDstyle}
          label="Product ID"
          value={text}
          onChangeText={onChangeText}
        />
        <HelperText type="error" visible={hasErrors()}>
          Product ID Required
        </HelperText>
      </View>
      <TextInput
        style={styles.PIDstyle}
        label="Subject"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TextInput
        style={styles.PIDstyle}
        label="Description"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>This is submittion</Text>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </ScrollView>
  );
};
export default ComplaintSubmission;
const styles = StyleSheet.create({
  PIDstyle: {
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
  },
});
