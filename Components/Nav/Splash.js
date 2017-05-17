import React from 'react';
import {
  TouchableHighlight,
  Text,
  Navigator,
  View,
  StyleSheet
} from 'react-native';

export default class Splash extends React.Component {





  render() {
    return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  option: {
    height: 200,
    width: 200,
    backgroundColor: 'palegoldenrod'
  }
});
