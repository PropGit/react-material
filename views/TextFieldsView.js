"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var TextField = require("../components/TextField");

var TextFieldsView = React.createClass({
  displayName: "TextFieldsView",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h2",
        null,
        "Single line text fields"
      ),
      React.createElement(TextField, { placeHolder: "Name" }),
      React.createElement(
        "h2",
        null,
        "Floating Labels"
      ),
      React.createElement(TextField, { placeHolder: "Surname", floatingLabel: true }),
      React.createElement(
        "h2",
        null,
        "Multi-line-text field"
      ),
      "TODO",
      React.createElement(
        "h2",
        null,
        "Full-width text field"
      ),
      "TODO",
      React.createElement(
        "h2",
        null,
        "Character Counter"
      ),
      "TODO",
      React.createElement(
        "h2",
        null,
        "Auto-complete text field"
      ),
      "TODO",
      React.createElement(
        "h2",
        null,
        "Search Filter"
      ),
      "TODO",
      React.createElement(
        "h2",
        null,
        "Error indication"
      ),
      React.createElement(TextField, { error: "Well that sucks" })
    );
  }

});

module.exports = TextFieldsView;