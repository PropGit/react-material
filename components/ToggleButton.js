"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Colors = require("../style/").Colors;

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var RadioButton = require("./").RadioButton;

var ToggleButton = (function (_React$Component) {
  function ToggleButton(props) {
    _classCallCheck(this, ToggleButton);

    _get(Object.getPrototypeOf(ToggleButton.prototype), "constructor", this).call(this, props);
    this.state = {
      checked: false
    };
  }

  _inherits(ToggleButton, _React$Component);

  _createClass(ToggleButton, {
    render: {
      value: function render() {
        var props = this.props;
        var circleStyle = [ToggleButtonStyles.circleStyle];
        var checked = this.state.checked;

        if (checked) {
          circleStyle.push(ToggleButtonStyles.checkedStyle);
        }

        var onButtonStyle = [ToggleButtonStyles.onButtonStyle];
        if (props.onButtonStyle) {
          onButtonStyle = onButtonStyle.concat(props.onButtonStyle);
        }
        if (checked) {
          onButtonStyle.push(ToggleButtonStyles.onButtonFillStyle);
        }

        return React.createElement(
          "div",
          { styles: ToggleButtonStyles.normalStyle, onClick: this.onClick },
          props.children,
          React.createElement(
            "div",
            { styles: ToggleButtonStyles.circlePositionStyle },
            React.createElement("div", { styles: ToggleButtonStyles.lineStyle }),
            React.createElement(
              "div",
              { styles: circleStyle },
              React.createElement("div", { styles: onButtonStyle })
            )
          )
        );
      }
    },
    onClick: {
      value: function onClick() {
        var props = this.props;
        var checked = !this.state.checked;
        this.isChecked = checked;
        this.setState({ checked: checked });
        if (props.onChange) {
          props.onChange({ checked: this.isChecked });
        }
      }
    }
  });

  return ToggleButton;
})(React.Component);

module.exports = ToggleButton;

var ToggleButtonStyles = StyleSheet.create({

  normalStyle: {
    webkitTapHighlightColor: "rgba(0,0,0,0)",
    cursor: "pointer",
    display: "block",
    position: "relative"
  },

  lineStyle: {
    backgroundColor: Colors.grey.P700,
    height: "1px",
    webkitTapHighlightColor: "rgba(0,0,0,0)",
    left: 0,
    position: "absolute",
    top: "10px",
    width: "38px"
  },

  circleStyle: {
    border: "solid 2px",
    borderColor: Colors.grey.P700,
    borderRadius: "50%",
    height: "16px",
    backgroundColor: Colors.grey.P100,
    left: 0,
    position: "absolute",
    top: 0,
    width: "16px",
    transition: "left .28s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "left"
  },

  childStyle: {
    paddingLeft: "16px"
  },

  childBigStyle: {
    paddingLeft: "32px"
  },

  checkedStyle: {
    left: "20px"
  },

  circlePositionStyle: {
    display: "inline-block",
    position: "absolute",
    right: 0,
    top: 0,
    width: "40px"
  },

  onButtonStyle: {
    backgroundColor: Colors.grey.P700,
    borderRadius: "50%",
    height: "20px",
    left: "-2px",
    position: "absolute",
    top: "-2px",
    transform: "scale(0)",
    transition: "transform ease 0.28s",
    width: "20px",
    willChange: "transform"
  },

  onButtonFillStyle: {
    transform: "scale(1)"
  }

});