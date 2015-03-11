"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var _components = require("../components/");

var CheckBox = _components.CheckBox;
var List = _components.List;
var ListItem = _components.ListItem;
var Subheader = _components.Subheader;

var ListView = React.createClass({
  displayName: "ListView",

  render: function render() {
    return React.createElement(
      "div",
      { style: { margin: "0 -20px" } },
      React.createElement(
        List,
        null,
        React.createElement(
          Subheader,
          null,
          "Single line"
        ),
        React.createElement(
          ListItem,
          null,
          "Bottom sheets"
        ),
        React.createElement(
          ListItem,
          null,
          "Button"
        ),
        React.createElement(
          ListItem,
          null,
          "Progress and Activity"
        ),
        React.createElement(
          ListItem,
          null,
          "Switches"
        ),
        React.createElement(
          ListItem,
          null,
          "Tabs"
        ),
        React.createElement(
          ListItem,
          null,
          "Text fields"
        )
      ),
      React.createElement(
        List,
        null,
        React.createElement(
          Subheader,
          null,
          "Single line with icon"
        ),
        React.createElement(
          ListItem,
          { icon: "post-facebook" },
          "Facebook"
        ),
        React.createElement(
          ListItem,
          { icon: "post-github" },
          "Github"
        ),
        React.createElement(
          ListItem,
          { icon: "post-twitter" },
          "Twitter"
        )
      ),
      React.createElement(
        "h2",
        null,
        "Two lines"
      ),
      React.createElement(
        List,
        null,
        React.createElement(
          ListItem,
          null,
          "Bottom sheets"
        ),
        React.createElement(
          ListItem,
          null,
          "Button"
        ),
        React.createElement(
          ListItem,
          null,
          "Progress and Activity"
        ),
        React.createElement(
          ListItem,
          null,
          "Switches"
        ),
        React.createElement(
          ListItem,
          null,
          "Tabs"
        ),
        React.createElement(
          ListItem,
          null,
          "Text fields"
        )
      ),
      React.createElement(
        "h2",
        null,
        "Two lines with checkbox"
      ),
      React.createElement(
        List,
        null,
        React.createElement(
          ListItem,
          { disableRipple: true },
          React.createElement(
            CheckBox,
            null,
            "Bottom sheets",
            React.createElement("br", null),
            " line 2"
          )
        ),
        React.createElement(
          ListItem,
          { disableRipple: true },
          React.createElement(
            CheckBox,
            null,
            "Bottom sheets",
            React.createElement("br", null),
            " line 2"
          )
        ),
        React.createElement(
          ListItem,
          { disableRipple: true },
          React.createElement(
            CheckBox,
            null,
            "Bottom sheets",
            React.createElement("br", null),
            " line 2"
          )
        ),
        React.createElement(
          ListItem,
          { disableRipple: true },
          React.createElement(
            CheckBox,
            null,
            "Bottom sheets",
            React.createElement("br", null),
            " line 2"
          )
        ),
        React.createElement(
          ListItem,
          { disableRipple: true },
          React.createElement(
            CheckBox,
            null,
            "Bottom sheets",
            React.createElement("br", null),
            " line 2"
          )
        )
      ),
      React.createElement(
        "h2",
        null,
        "Three lines"
      ),
      React.createElement(
        List,
        null,
        React.createElement(
          ListItem,
          null,
          "Bottom sheets"
        ),
        React.createElement(
          ListItem,
          null,
          "Button"
        ),
        React.createElement(
          ListItem,
          null,
          "Progress and Activity"
        ),
        React.createElement(
          ListItem,
          null,
          "Switches"
        ),
        React.createElement(
          ListItem,
          null,
          "Tabs"
        ),
        React.createElement(
          ListItem,
          null,
          "Text fields"
        )
      )
    );
  }

});

module.exports = ListView;