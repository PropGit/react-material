"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var RadioButton = require("./RadioButton");
var FormRow = require("./FormRow");

var RadioButtonGroupStyles = {

  rowStyle: ReactStyle({
    padding: "20px 0",
    ":first-child": {
      paddingTop: 0
    },
    ":last-child": {
      paddingBottom: 0
    }
  })

};

var RadioButtonGroup = React.createClass({
  displayName: "RadioButtonGroup",

  selectedValue: null,

  getInitialState: function getInitialState() {
    return {
      selectedIndex: -1
    };
  },

  render: function render() {
    var props = this.props;
    var styles = RadioButtonGroupStyles;
    var radioButtons = [];
    var children = this.props.children;
    for (var i = 0, l = children.length; i < l; i++) {
      var child = children[i];
      var radioButton = React.createElement(
        RadioButton,
        { key: i,
          value: child.props.value,
          position: i,
          onChange: this.onChange,
          checked: this.state.selectedIndex === i },
        child.props.children
      );

      radioButtons[i] = React.createElement(
        "div",
        { key: "d_" + i, styles: styles.rowStyle },
        radioButton
      );
    }
    return React.createElement(
      "div",
      null,
      radioButtons
    );
  },

  onChange: function onChange(e) {
    var selectedIndex = e.ref.props.position;
    this.selectedValue = e.ref.props.value || selectedIndex;
    this.setState({ selectedIndex: selectedIndex });
    this.props.onChange(e);
  }

});

module.exports = RadioButtonGroup;