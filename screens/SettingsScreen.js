import React from 'react';
import {
    Alert,
    AsyncStorage,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import {styles} from "../App.style";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  eraseData() {
      let keys = ['sprints','totalWords'];
      AsyncStorage.multiRemove(keys, (err) => {
          if(err){
            Alert.alert(err);
          } else {
            Alert.alert("All Data Removed");
          }
      });
  }
  render() {

    return (
        <TouchableHighlight
        onPress={this.eraseData}>
          <View style={styles.button}>

                <Text style={styles.buttonText}>Erase All Sprints</Text>:


          </View>
        </TouchableHighlight>);
  }
}
