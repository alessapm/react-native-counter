import React from 'react';
import {
  Navigator,
  Text,
  TouchableHighlight,
  View,
  StyleSheet
} from 'react-native';

export default class Mulitply extends React.Component {
  goBack(){
    this.props.navigator.pop()
  }


  render() {
    return (
      <View style={this.props.styles.container}>
        <TouchableHighlight onPress={this.goBack.bind(this)}>
          <Text style={this.props.styles.option}>Back</Text>
        </TouchableHighlight>
        <Text>{this.props.number}</Text>
        <TouchableHighlight onPress={this.props.multiply} style={this.props.styles.operator}>
          <Text>Multiply</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
