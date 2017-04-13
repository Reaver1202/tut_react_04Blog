import React, { Component } from 'react';

export default class App extends Component {
  render() {
    //
    return (
      // we cann add now Header, Footer, ... and place the children (Rotue Childs) where we want
      <div>
        {this.props.children}
      </div>
    );
  }
}
