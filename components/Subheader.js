"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Typography = require("../style/Typography");

var SubheaderStyles = {

  normalStyle: ReactStyle({
    height: 48,
    lineHeight: "48px",
    padding: "0 16px",
    position: "relative"
  })

};

var Subheader = React.createClass({
  displayName: "Subheader",

  render: function render() {
    var styles = SubheaderStyles;
    return React.createElement(
      "div",
      { styles: [Typography.subhead, styles.normalStyle] },
      this.props.children
    );
  }

});

module.exports = Subheader;