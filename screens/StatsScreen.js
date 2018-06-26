import React from 'react';
import ViewStats from '../components/ViewStats';

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    title: 'Yer Starboard Stats',
  };

  render() {
    return(<ViewStats />);
  }
}
