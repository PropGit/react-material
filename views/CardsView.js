"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var _components = require("../components/");

var Button = _components.Button;
var Card = _components.Card;
var CardCollection = _components.CardCollection;
var CheckBox = _components.CheckBox;
var ProgressBar = _components.ProgressBar;

var CardsView = React.createClass({
  displayName: "CardsView",

  styles: StyleSheet.create({

    normalStyle: {
      margin: "0 auto",
      width: "300px"
    }

  }),

  render: function render() {
    var styles = this.styles;
    return React.createElement(
      "div",
      { styles: styles.normalStyle },
      React.createElement(
        CardCollection,
        null,
        React.createElement(
          Card,
          { title: "Basic components" },
          React.createElement(
            Button,
            null,
            "A simple button"
          ),
          React.createElement(
            Button,
            { raised: true, styles: [{ backgroundColor: Colors.amber.P500, color: Colors.grey.P50 }] },
            "Raised button"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(CheckBox, null)
          )
        ),
        React.createElement(
          Card,
          { title: "Text fields  and dialogs" },
          "..."
        ),
        React.createElement(
          Card,
          { title: "Progress and sliders" },
          React.createElement(ProgressBar, { percentage: 70 })
        ),
        React.createElement(Card, { title: "Tabs" }),
        React.createElement(Card, null)
      )
    );
  }
});

module.exports = CardsView;