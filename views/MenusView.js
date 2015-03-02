"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Button = require("../components/Button");

var MenusView = React.createClass({
  displayName: "MenusView",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        Button,
        null,
        "Does nothing"
      )
    );
  }

});

module.exports = MenusView;