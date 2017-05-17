import Expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import App from './Components/App';

class Main extends React.Component {
  render() {
    return <App />;
  }
}

Expo.registerRootComponent(App);
