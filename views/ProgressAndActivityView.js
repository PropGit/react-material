"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = _interopRequire(require("../style/"));

var _components = require("../components/");

var ProgressBar = _components.ProgressBar;
var FloatingActionButton = _components.FloatingActionButton;

var ProgressAndActivityView = React.createClass({
  displayName: "ProgressAndActivityView",

  getInitialState: function getInitialState() {
    return {
      uploadPercentage: 0
    };
  },

  render: function render() {
    var state = this.state;
    var uploadPercentage = state.uploadPercentage;
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Determinate"
      ),
      React.createElement(ProgressBar, { percentage: 20 }),
      React.createElement(
        "h2",
        null,
        "Indeterminate"
      ),
      "Animation is not correct.",
      React.createElement(ProgressBar, { type: "indeterminate" }),
      React.createElement(
        "h2",
        null,
        "Buffer"
      ),
      React.createElement(ProgressBar, { percentage: 30, bufferPercentage: 60 }),
      React.createElement(
        "h2",
        null,
        "Query indeterminate and determinate"
      ),
      "TODO",
      React.createElement(
        "h2",
        null,
        "Circular"
      ),
      React.createElement(FloatingActionButton, {
        icon: uploadPercentage === "100%" ? "done" : "cloud-upload",
        styles: [{ backgroundColor: uploadPercentage === "100%" ? Colors.orange.P500 : Colors.indigo.P500 }],
        progressCircleStyle: { stroke: Colors.orange.P500 },
        percentage: state.uploadPercentage,
        onClick: this.uploadSomething }),
      "TODO"
    );
  },

  uploadSomething: function uploadSomething() {
    this.setState({ uploadPercentage: "20%" });
    var self = this;
    setTimeout(function () {
      self.setState({ uploadPercentage: "90%" });
    }, 1000);

    setTimeout(function () {
      self.setState({ uploadPercentage: "100%" });
    }, 2000);
  }

});

module.exports = ProgressAndActivityView;