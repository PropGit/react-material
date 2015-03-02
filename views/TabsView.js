"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Tabs = require("../components/Tabs");
var Tab = require("../components/Tab");

var TabsView = React.createClass({
  displayName: "TabsView",

  getInitialState: function getInitialState() {
    return {
      view: 0
    };
  },

  render: function render() {
    var state = this.state;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Example"
      ),
      React.createElement(
        Tabs,
        { onChange: this.onChange },
        React.createElement(
          Tab,
          { title: "tab1", selected: state.view === 0 },
          "Contents of tab 1"
        ),
        React.createElement(
          Tab,
          { title: "tab2", selected: state.view === 1 },
          "Contents of tab 2"
        )
      )
    );
  },

  onChange: function onChange(e) {
    this.setState({ view: e.position });
  }

});

module.exports = TabsView;