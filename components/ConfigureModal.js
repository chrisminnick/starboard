import React, { Component } from 'react';
import {AppRegistry, Image, Modal, Platform, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

export default class ConfigureModal extends Component{

    changeModalVisibility(){
        this.props.setModalVisible(!this.props.visible);
    }

    render(){

        return(
            <Modal
                animationType="slide"
                transparent={false}
                visible={this.props.visible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                }}>
                <View style={{marginTop: 22}}>
                    <View>
                        <Text>Hello World!</Text>

                        <TouchableHighlight
                            onPress={() => {
                                this.changeModalVisibility;
                            }}>
                            <Text>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>
        )
    }

}
