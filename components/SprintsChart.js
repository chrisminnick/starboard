import React, { Component } from "react";

import { VictoryBar } from "victory-native";

class SprintsChart extends Component {
    render() {
        return (
            <VictoryBar
                data={this.props.data}/>
        );
    }
}

export default SprintsChart;