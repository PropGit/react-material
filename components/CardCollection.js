"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var CardCollectionStyles = {
  normalCardCollectionStyle: ReactStyle({})
};

var CardCollection = React.createClass({
  displayName: "CardCollection",

  render: function render() {
    var styles = CardCollectionStyles;
    return React.createElement(
      "div",
      { styles: styles.normalCardCollectionStyle },
      this.props.children
    );
  }

});

module.exports = CardCollection;