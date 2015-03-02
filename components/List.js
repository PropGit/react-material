"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var ListStyles = {

  normalListStyle: ReactStyle({
    overflow: "auto",
    overflowY: "auto",
    overflowX: "none"
  })

};

var List = React.createClass({
  displayName: "List",

  render: function render() {
    var styles = ListStyles;
    var listStyle = styles.normalListStyle;
    return React.createElement(
      "div",
      { styles: listStyle },
      this.props.children
    );
  }

});

module.exports = List;