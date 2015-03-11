"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var RadioButton = _interopRequire(require("./RadioButton"));

var FormRow = _interopRequire(require("./FormRow"));

var RadioButtonGroup = (function (_React$Component) {
  function RadioButtonGroup() {
    _classCallCheck(this, RadioButtonGroup);

    this.selectedValue = null;
    this.state = {
      selectedIndex: -1
    };
  }

  _inherits(RadioButtonGroup, _React$Component);

  _createClass(RadioButtonGroup, {
    render: {
      value: function render() {
        var _this = this;

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
              onChange: function (e) {
                return _this.onChange(e);
              },
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
      }
    },
    onChange: {
      value: function onChange(e) {
        var selectedIndex = e.ref.props.position;
        this.selectedValue = e.ref.props.value || selectedIndex;
        this.setState({ selectedIndex: selectedIndex });
        this.props.onChange(e);
      }
    }
  });

  return RadioButtonGroup;
})(React.Component);

var RadioButtonGroupStyles = StyleSheet.create({

  rowStyle: {
    padding: "20px 0" }

});

module.exports = RadioButtonGroup;

//':first-child': {
//  paddingTop: 0
//},
//':last-child': {
//  paddingBottom: 0
//}