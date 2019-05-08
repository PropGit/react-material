"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var _style = require("../style");

var Colors = _style.Colors;
var Sizes = _style.Sizes;
var Typography = _style.Typography;

var RippleContainer = _interopRequire(require("./RippleContainer"));

var Shadow = _interopRequire(require("./Shadow"));

var isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

var Button = (function (_React$Component) {

  //propTypes: {
  //  raised: React.PropTypes.bool,
  //  disabled: React.PropTypes.bool
  //},

  function Button(props) {
    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), "constructor", this).call(this, props);
    this.state = {
      active: false
    };
  }

  _inherits(Button, _React$Component);

  _createClass(Button, {
    render: {
      value: function render() {
        var _this = this;

        var props = this.props;
        var state = this.state;
        var styles = [Typography.button, ButtonStyles.normalButtonStyle];
        var shadowSize = -1;
        if (props.styles) {
          styles = styles.concat(props.styles);
        }
        if (props.disabled) {
          styles.push(ButtonStyles.disabledButtonStyle);
        } else if (props.raised) {
          styles.push(ButtonStyles.raisedButtonStyle);
          shadowSize = 1;

          if (state.active) {
            shadowSize = 2;
          }
        }

        return React.createElement(
          "div",
          { role: "button",
            tabIndex: "0",
            styles: styles,
            onTouchStart: function () {
              return isTouchDevice && _this.onMouseDown();
            },
            onTouchEnd: function () {
              return isTouchDevice && _this.onMouseUp();
            },
            onTouchCancel: function () {
              return isTouchDevice && _this.onMouseUp();
            },
            onMouseDown: function () {
              return !isTouchDevice && _this.onMouseDown();
            },
            onMouseUp: function () {
              return !isTouchDevice && _this.onMouseUp();
            },
            onMouseLeave: function () {
              return !isTouchDevice && _this.onMouseUp();
            } },
          React.createElement(
            Shadow,
            { size: shadowSize, styles: ButtonStyles.shadowStyle },
            !props.disabled && React.createElement(RippleContainer, { styles: ButtonStyles.rippleContainerStyle, onClick: function () {
                return props.onClick && props.onClick();
              } }),
            props.children
          )
        );
      }
    },
    onMouseUp: {
      value: function onMouseUp() {
        if (this.props.disabled) {
          return;
        }
        this.setState({ active: false });
      }
    },
    onMouseDown: {
      value: function onMouseDown() {
        if (this.props.disabled) {
          return;
        }
        this.setState({ active: true });
      }
    }
  });

  return Button;
})(React.Component);

module.exports = Button;

var ButtonStyles = StyleSheet.create({

  normalButtonStyle: {
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    cursor: "pointer",
    position: "relative",
    height: Sizes.Button.height - 2 * 9,
    borderRadius: 3,
    display: "inline-block",
    outline: "none",
    padding: 9,
    textAlign: "center",
    userSelect: "none",
    minWidth: Sizes.Button.minWidth,
    lineHeight: "19px"
  },

  raisedButtonStyle: {
    backgroundColor: Colors.grey.P300
  },

  raisedButtonPressedStyle: {
    boxShadow: "0 8px 17px 0 rgba(0, 0, 0, 0.2)"
  },

  disabledButtonStyle: {
    backgroundColor: Colors.grey.P300,
    color: Colors.grey.P500,
    cursor: "default"
  },

  shadowStyle: {
    borderRadius: "3px"
  },

  rippleContainerStyle: {
    overflow: "hidden",
    borderRadius: "3px"
  }

});