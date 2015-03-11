"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

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
        "Error indication"
      ),
      React.createElement(TextField, { error: "Well that sucks" })
    );
  }

});

module.exports = TextFieldsView;
/*<h2>Multi-line-text field</h2>
TODO
<h2>Full-width text field</h2>
TODO
<h2>Character Counter</h2>
TODO
<h2>Auto-complete text field</h2>
TODO
<h2>Search Filter</h2>
TODO*/