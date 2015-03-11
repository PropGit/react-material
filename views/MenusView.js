"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Button = require("../components/").Button;

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