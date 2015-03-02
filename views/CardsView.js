"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Colors = require("../style/Colors");

var Cards = require("../components/CardCollection");
var Card = require("../components/Card");

var Button = require("../components/Button");
var Checkbox = require("../components/CheckBox");
var ProgressBar = require("../components/ProgressBar");

var CardsView = React.createClass({
  displayName: "CardsView",

  styles: {

    normalStyle: ReactStyle({
      margin: "0 auto",
      width: "300px"
    })

  },

  render: function render() {
    var styles = this.styles;
    return React.createElement(
      "div",
      { styles: styles.normalStyle },
      React.createElement(
        Cards,
        null,
        React.createElement(
          Card,
          null,
          React.createElement(
            "h2",
            null,
            "Not yet responsive or anything, best viewed on Nexus 5 for now"
          )
        ),
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
            { raised: true, styles: [ReactStyle({ backgroundColor: Colors.amber.P500, color: Colors.grey.P50 })] },
            "Raised button"
          ),
          React.createElement(
            "div",
            null,
            React.createElement(Checkbox, null)
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