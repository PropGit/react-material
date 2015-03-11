"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var _components = require("../components/");

var FormRow = _components.FormRow;
var CheckBox = _components.CheckBox;
var RadioButton = _components.RadioButton;
var RadioButtonGroup = _components.RadioButtonGroup;
var ToggleButton = _components.ToggleButton;

var SwitchesView = React.createClass({
  displayName: "SwitchesView",

  styles: StyleSheet.create({
    containerStyle: {
      marginTop: "60px"
    }
  }),

  getInitialState: function getInitialState() {
    return {
      checked: false
    };
  },

  render: function render() {
    var props = this.props;
    var styles = this.styles;
    var state = this.state;
    return React.createElement(
      "div",
      { styles: styles.containerStyle },
      React.createElement(
        FormRow,
        null,
        React.createElement(
          CheckBox,
          { onChange: this.onChange, ref: "checkbox" },
          "I'm inside the checkbox ",
          React.createElement("br", null),
          " line 2 ",
          React.createElement("br", null),
          " line 3"
        )
      ),
      React.createElement(
        FormRow,
        null,
        React.createElement(
          RadioButtonGroup,
          { ref: "rbgroup", onChange: this.onRadioButtonGroupChange },
          React.createElement(
            RadioButton,
            { ref: "radioButton1", value: "a" },
            "radio button 1"
          ),
          React.createElement(
            RadioButton,
            { ref: "radioButton2", value: "b" },
            "radio button 2"
          ),
          React.createElement(
            RadioButton,
            { ref: "radioButton3" },
            "radio button 3"
          )
        )
      ),
      React.createElement(
        FormRow,
        null,
        React.createElement(
          ToggleButton,
          { ref: "toggleButton", onChange: this.onToggleButtonChange },
          "A toggle button"
        )
      ),
      React.createElement(
        "div",
        null,
        "The checkbox is ",
        state.checked ? "checked" : "unchecked",
        " ",
        React.createElement("br", null),
        "The radio button group value is ",
        state.rbValue,
        " ",
        React.createElement("br", null),
        "The toggle is ",
        state.swChecked ? "checked" : "unchecked"
      )
    );
  },

  onChange: function onChange() {
    this.setState({ checked: this.refs.checkbox.isChecked });
  },

  onRadioButtonGroupChange: function onRadioButtonGroupChange() {
    this.setState({ rbValue: this.refs.rbgroup.selectedValue });
  },

  onToggleButtonChange: function onToggleButtonChange() {
    this.setState({ swChecked: this.refs.toggleButton.isChecked });
  }

});

module.exports = SwitchesView;