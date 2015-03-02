"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var TextField = require("./TextField");

// on select go to top + full width + show suggestions
var AutoComplete = React.createClass({
  displayName: "AutoComplete",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        null,
        React.createElement(TextField, null)
      )
    );
  }

});

module.exports = AutoComplete;