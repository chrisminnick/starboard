import React, { Component } from 'react';
import {
    Alert, AsyncStorage, AppRegistry, Button, Image, Platform, Share, StyleSheet, Text, TextInput, TouchableHighlight,
    TouchableOpacity, View, Linking
} from 'react-native';
import Modal from 'react-native-modal';

import {styles} from "./ConfigModal.style";

class EndModal extends Component {

    render(){
        return(
            <Modal
                backdropColor={"black"}
                backdropOpacity={1}
                animationIn={"slideInDown"}
                animationOut={"slideOutUp"}
                animationInTiming={300}
                animationOutTiming={300}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={1000}
                avoidKeyboard={true}
                isVisible={this.props.modalVisible}
            >
                <View style={styles.modalContent}>

                    <Text style={styles.modalHeading}>Welcome Back!</Text>
                    <Image source={require('../images/animated-pirate-image-0043.gif')} />
                    <Text style={styles.bodytext}>Ahoy! How many words ya got in the bank now?</Text>
                    <TextInput
                        style={styles.configInput}
                        autoFocus ={true}
                        keyboardType="numeric"
                        placeholder="Total Words"
                        value={this.props.totalWords}
                        onChangeText={(value) => this.props.setTotal(value)}
                    />
                    <TouchableOpacity onPress={() => this.props.endSprint()}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

export default EndModal;