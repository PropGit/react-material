"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var CheckBox = require("../components/CheckBox");
var List = require("../components/List");
var ListItem = require("../components/ListItem");

var Subheader = require("../components/Subheader");

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