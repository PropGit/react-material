'use strict';

import React from 'react';
import StyleSheet from 'react-style';

export default class List extends React.Component {

  render() {
    var props = this.props;
    var styles = ListStyles;
    return <div styles={[styles.normalListStyle, props.styles]}>
      {this.props.children}
    </div>;
  }

}

var ListStyles = StyleSheet.create({

  normalListStyle: {
    overflow: 'auto',
    overflowY: 'auto',
    overflowX: 'none'
  }

});
