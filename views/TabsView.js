"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var _components = require("../components/");

var Tabs = _components.Tabs;
var Tab = _components.Tab;

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