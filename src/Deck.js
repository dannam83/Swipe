import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const panResponder = PanResponder.create({
      // boolean to determine if PanResponder is active on a screen press
      onStartShouldSetPanResponder: () => true,

      // the function invoked on screen press movements
      // always takes an event, is an object with info on what was pressed
      // second arg is gesture, has info on what info is doing with finger on screen
      onPanResponderMove: (event, gesture) => {
      },

      // the function on the screen press release
      onPanResponderRelease: () => {}
    });

    this.state = { panResponder };
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View {...this.state.panResponder.panHandlers}>
        {this.renderCards()}
      </View>
    );
  }
}

export default Deck;
