import React from 'react';
import { Navigator, StyleSheet } from 'react-native';
// import add, mulitply and splash


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    }
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
