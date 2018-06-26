import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    ScrollView,
    Text,
    View
} from 'react-native';
import {styles} from "../App.style";

export default class ViewStats extends Component {
    render(){
        return(
            <ScrollView style={styles.container}>
                <Text>This doesn't work quite right yet. I need to fix it. Stats need to be refreshed when the screen is navigated to, not when the component loads.</Text>
            <Text style={styles.bodytext}>Yer total words so far: {this.props.data.totalWords}</Text>
            <Text style={styles.bodytext}>Yer shortest sprint: {this.props.data.shortestSprint} minutes</Text>
            <Text style={styles.bodytext}>Yer longest sprint: {this.props.data.longestSprint} minutes</Text>
            <Text style={styles.bodytext}>Yer average sprint length: {this.props.data.averageSprint} minutes</Text>
            <Text style={styles.bodytext}>Yer total writin' time: {this.props.data.totalSprints} minutes</Text>
            </ScrollView>
    );

    }
}