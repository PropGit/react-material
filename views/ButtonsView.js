"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Button = require("../components/Button");
var Colors = require("../style/Colors");
var FloatingActionButton = require("../components/FloatingActionButton");
var IconButton = require("../components/IconButton");

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
        React.createElement(FloatingActionButton, { ref: "fab1", icon: "undo", styles: [ReactStyle({ backgroundColor: Colors.red.P600 })] }),
        "  ",
        React.createElement(FloatingActionButton, { ref: "fab2", icon: "arrow-forward", mini: true, styles: [ReactStyle({ backgroundColor: Colors.blue.P500 })] })
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
          { raised: true, styles: ReactStyle({ marginLeft: 10 }) },
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