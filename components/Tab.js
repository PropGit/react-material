"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Tab = React.createClass({
  displayName: "Tab",

  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function render() {
    return React.createElement(
      "div",
      null,
      this.props.children
    );
  }

});

module.exports = Tab;