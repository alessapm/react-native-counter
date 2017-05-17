import React from 'react';
import { Navigator, StyleSheet } from 'react-native';

//link to other components
import Add from './Operators/Add';
import Multiply from './Operators/Multiply';
import Splash from './Nav/Splash';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      number: 0
    };
  }

  goBack() {
    console.log('goBack working');
    this.props.navigator.pop();
  }

  add() {
    let newCount = (this.state.number += 1);
    this.setState({
      number: newCount
    }, ()=>{ console.log('setting state in add') }
    );
  }

  subtract() {
    let newCount = (this.state.number -= 1);
    this.setState(
      {
        number: newCount
      },
      () => {
        console.log('in subtract')
      }
    );
  }

  multiply(){
    let newCount = (this.state.number * 2);
    this.setState({number: newCount})
  }



  render() {
    return(
      <Navigator
        initialRoute={{
          id: 'Splash'
        }}
        renderScene={(route, navigator) => {
          _navigator = navigator;
          if (route.id === 'Splash'){
            return(
              <Splash
                number={this.state.number}
                navigator={navigator}
                styles={styles}
              />
            );
          }
          if (route.id === 'Add'){
            return (
              <Add
                number={this.state.number}
                navigator={navigator}
                styles={styles}
                goBack={this.goBack}
                add={this.add.bind(this)}
                subtract={this.subtract.bind(this)}
              />
            )
          } //closes if Add
          if (route.id === 'Multiply'){
            return(
              <Multiply
                number={this.state.number}
                navigator={navigator}
                styles={styles}
                goBack={this.goBack}
                multiply={this.multiply.bind(this)}
              />
            );
          }
        }}
      />
    )
  }
} // closes App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option: {
    height: 50,
    width: 100,
    backgroundColor: 'navy',
    color: 'palegoldenrod',
  },
  operator: {
    height: 200,
    width: 200,
    backgroundColor: 'tomato',
  }
});
