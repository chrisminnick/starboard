import React from 'react';
import ViewStats from '../components/ViewStats';
import * as stats from '../utils/stats';
import {AsyncStorage} from "react-native";
import {totalSprints} from "../utils/stats";
import {shortestSprint} from "../utils/stats";
import {averageSprint} from "../utils/stats";
import {longestSprint} from "../utils/stats";

export default class StatsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endModalVisible: false,
            startModalVisible: false,
            lastSprintStartTotal: 0,
            lastSprintStart: undefined,
            lastSprintEnd: undefined,
            lastSprintWords: 0,
            totalWords: "0",
            writing: false,
            lastSprint: undefined,
            sprints: [{start: Date.now(), end: Date.now(), words: 0}],
            shortestSprint: 0,
            longestSprint: 0,
            totalSprints: 0,
            averageSprint: 0,
            debug: 'none'
        };
    }

    async componentDidMount() {
        let sprints = await AsyncStorage.getItem('sprints');

        let total = await AsyncStorage.getItem('totalWords');
        if (!total) {
            total = "0";
        }
        if (!sprints) {
            sprints = [{start: Date.now(), end: Date.now(), words: 0}];
        }
        await this.setState({sprints: JSON.parse(sprints), totalWords: total});
        this.calculateSprintStats();
    }
    calculateSprintStats(){

        let sprintArray = this.state.sprints;

        let sprintDurs = sprintArray.filter(sprint => (sprint.words > 0) && (sprint.end - sprint.start > 1000))
            .map(function(sprint){
                return (sprint.end - sprint.start);

            });



        this.setState({
            shortestSprint:shortestSprint(sprintDurs),
            longestSprint:longestSprint(sprintDurs),
            totalSprints:totalSprints(sprintDurs),
            averageSprint:averageSprint(sprintDurs)
        });

    }
    static navigationOptions = {
        title: 'Yer Starboard Stats',
    };


    render() {
        return (<ViewStats data={this.state}/>);
    }
}
