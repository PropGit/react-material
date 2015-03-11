"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var _components = require("../components/");

var Button = _components.Button;
var Dialog = _components.Dialog;
var Overlay = _components.Overlay;

var DialogsView = React.createClass({
  displayName: "DialogsView",

  styles: StyleSheet.create({
    buttonBarStyle: {
      position: "absolute",
      bottom: -12,
      right: -8,
      display: "inline-block"
    },

    textStyle: {
      paddingBottom: 40
    }
  }),

  getInitialState: function getInitialState() {
    return {
      show: false
    };
  },

  render: function render() {
    var styles = this.styles;
    var state = this.state;
    return React.createElement(
      "div",
      null,
      React.createElement(
        Button,
        { ref: "button", onClick: this.onOpenDialogClick },
        "Open dialog"
      ),
      React.createElement(Overlay, { show: state.show, onClick: this.onOverlayClick }),
      React.createElement(
        Dialog,
        { title: "Permissions", triggerElement: this.refs.button, width: 300, show: state.show },
        React.createElement(
          "div",
          { styles: styles.textStyle },
          "This app determines your phone's location and shares it with Hypnotoad in order to serve personalized ads for you. This allows for a better overall app experience."
        ),
        React.createElement(
          "div",
          { styles: styles.buttonBarStyle },
          React.createElement(
            Button,
            { onClick: this.onOverlayClick },
            "Decline"
          ),
          React.createElement(
            Button,
            { onClick: this.onOverlayClick, styles: { color: Colors.blue.P500 } },
            "Accept"
          )
        )
      )
    );
  },

  onOpenDialogClick: function onOpenDialogClick() {
    this.setState({ show: true });
  },

  onOverlayClick: function onOverlayClick() {
    this.setState({ show: false });
  }

});

module.exports = DialogsView;