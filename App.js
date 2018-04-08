import 'expo';
import React, { Component } from 'react';
import { Alert, AsyncStorage, AppRegistry, Button, Image, Modal, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import Communications from 'react-native-communications';
import { FontAwesome } from '@expo/vector-icons';

export default class Starboard extends Component {

constructor(props){
    super(props);

    this._onPressButton = this._onPressButton.bind(this);
    this.setModalVisible = this.setModalVisible.bind(this);
    this._help = this._help.bind(this);
    this.getKey = this.getKey.bind(this);
    this.saveKey = this.saveKey.bind(this);

    this.state = {
        modalVisible: false,
        myKey: 'Set a contact'
    };
}

    _onPressButton() {
        Communications.text(this.state.myKey,'I\'m Writing!')
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _help() {
        Alert.alert('Not yet implemented.')
    }
    async getKey() {
        try {
            const value = await AsyncStorage.getItem('@MySuperStore:key');
            this.setState({myKey: value});
        } catch (error) {
            console.log("Error retrieving data" + error);
        }
    }

    async saveKey(value) {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', value);

        } catch (error) {
            console.log("Error saving data" + error);
        }


    }

    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    >
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text>Configure Starboard</Text>
                            <Text>Who should be notified when you're writing?</Text>
                            <TextInput
                                style={{height: 40}}
                                placeholder="Phone Number"
                                onSubmitEditing={(myKey) => this.saveKey(myKey)}
                                onChangeText={(myKey) => this.setState({myKey})}
                            />
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(false);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                <Image source={{uri: 'data:image/png;base64,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'}}
                       style={{width: 200, height: 200}} />
                <Text style={styles.heading}>Ahoy!</Text>
                <Text style={styles.bodytext}>It's time to write.</Text>
                <Text style={styles.bodytext}>Press the button to notify your writing crew({this.state.myKey}).</Text>
                <TouchableHighlight
                    onPress={this._onPressButton}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>I'm Writing!</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <FontAwesome name="gear" size={32} color="green" />

                </TouchableHighlight>

                <Button
                    style={styles.formButton}
                    onPress={this.getKey}
                    title="Get Key"
                    color="#2196f3"
                    accessibilityLabel="Get Key"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 36,
        color: 'red'
    },
    bodytext: {
        fontSize: 18,
        textAlign:'center'
    },
    button: {
        marginBottom: 30,
        marginTop: 100,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white',
        fontSize: 24

    }
})
