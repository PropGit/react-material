"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var _components = require("../components/");

var Button = _components.Button;
var FloatingActionButton = _components.FloatingActionButton;
var IconButton = _components.IconButton;

var ButtonsView = React.createClass({
  displayName: "ButtonsView",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Main buttons"
      ),
      React.createElement(
        "h3",
        null,
        "Floating action buttons"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(FloatingActionButton, { ref: "fab1", icon: "undo", styles: [{ backgroundColor: Colors.red.P600 }] }),
        "  ",
        React.createElement(FloatingActionButton, { ref: "fab2", icon: "arrow-forward", mini: true, styles: [{ backgroundColor: Colors.blue.P500 }] })
      ),
      React.createElement(
        "h3",
        null,
        "Raised button"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          Button,
          { raised: true },
          "Button 1"
        ),
        " ",
        React.createElement(
          Button,
          { raised: true, styles: { marginLeft: 10 } },
          "Button 2"
        )
      ),
      React.createElement(
        "h3",
        null,
        "Flat buttons"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(
          Button,
          null,
          "Button 1"
        ),
        "  ",
        React.createElement(
          Button,
          null,
          "Button 2"
        )
      ),
      React.createElement(
        "h3",
        null,
        "Icon buttons"
      ),
      React.createElement(
        "div",
        null,
        React.createElement(IconButton, { icon: "error", onClick: this.onClick }),
        React.createElement(IconButton, { icon: "event", onClick: this.onClick }),
        React.createElement(IconButton, { icon: "markunread", onClick: this.onClick })
      )
    );
  },

  onClick: function onClick() {
    console.log("click");
  }

});

module.exports = ButtonsView;