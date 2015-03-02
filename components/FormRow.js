"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var FormRowStyles = {

  normalStyle: ReactStyle({
    padding: "20px"
  })

};

var FormRow = React.createClass({
  displayName: "FormRow",

  render: function render() {
    var props = this.props;
    var styles = FormRowStyles;
    return React.createElement(
      "div",
      { styles: styles.normalStyle },
      props.children
    );
  }

});

module.exports = FormRow;