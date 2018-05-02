import React, { Component } from 'react';
import {
    Alert, AsyncStorage, AppRegistry, Button, Image, Platform, Share, StyleSheet, Text, TextInput, TouchableHighlight,
    TouchableOpacity, View, Linking
} from 'react-native';
import Modal from 'react-native-modal';

import {styles} from "./ConfigModal.style";

class ConfigModal extends Component {
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

                <Text style={styles.modalHeading}>Configure Starboard</Text>
                <Image source={require('../images/animated-pirate-image-0043.gif')} />
                <Text style={styles.bodytext}>Congratulations on finishing a sprint! How many words did ye' write?</Text>
                <TextInput
                    style={styles.configInput}
                    autoFocus ="true"
                    keyboardType="number"
                    placeholder="Words"
                    value={this.props.sprint}
                    onChangeText={(value) => this.props.saveKey(value)}
                    onSubmitEditing={() => {
                        this.props._setModalVisible(false);
                    }}
                />
                <TouchableOpacity onPress={() => this.props._setModalVisible(false)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
            </Modal>
        )
    }
}

export default ConfigModal;