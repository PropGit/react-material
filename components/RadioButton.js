"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = _interopRequire(require("../style/Colors"));

var CircleShadow = _interopRequire(require("./CircleShadow"));

var RadioButton = (function (_React$Component) {
  function RadioButton(props) {
    _classCallCheck(this, RadioButton);

    _get(Object.getPrototypeOf(RadioButton.prototype), "constructor", this).call(this, props);
    var checked = this.props.checked || false;
    this.isChecked = checked;
    return {
      checked: checked
    };
  }

  _inherits(RadioButton, _React$Component);

  _createClass(RadioButton, {
    render: {
      value: function render() {
        var _this = this;

        var props = this.props;
        var styles = RadioButtonStyles;
        var checked = this.state.checked || props.checked;
        var normalStyles = styles.normalStyle;
        var propStyles = props.styles || {};

        return React.createElement(
          "div",
          { tabIndex: 0,
            styles: [styles.normalStyle, propStyles.normalStyle],
            onClick: function () {
              return _this.onClick();
            },
            onMouseDown: function () {
              return _this.onMouseDown();
            } },
          React.createElement("div", { styles: [styles.offButtonStyle, propStyles.offButtonStyle] }),
          React.createElement("div", { styles: [styles.onButtonStyle, propStyles.onButtonStyle, checked && styles.onButtonFillStyle] }),
          React.createElement(
            "div",
            { styles: [props.children && props.children.length ? styles.childBigStyle : styles.childStyle, propStyles.childStyle] },
            props.children
          )
        );
      }
    },
    onClick: {
      value: function onClick() {
        var props = this.props;
        var position = 0;
        var el = React.findDOMNode(this);
        while (el = el.previousSibling) {
          position++;
        }
        var state = this.state;
        if (props.onChange) {
          props.onChange({ checked: state.checked, ref: this, position: position });
          return;
        }

        var isChecked = !state.checked;
        this.setState({ checked: isChecked });
        this.isChecked = isChecked;
      }
    },
    onMouseDown: {
      value: function onMouseDown() {
        this.setState({ mouseDown: !this.state.checked });
      }
    }
  });

  return RadioButton;
})(React.Component);

module.exports = RadioButton;

var RadioButtonStyles = StyleSheet.create({

  normalStyle: {
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    cursor: "pointer",
    position: "relative",
    display: "block",
    outline: "none"
  },

  childStyle: {
    paddingLeft: "16px"
  },

  childBigStyle: {
    paddingLeft: "32px"
  },

  offButtonStyle: {
    border: "solid 2px",
    borderColor: Colors.grey.P700,
    borderRadius: "50%",
    height: "16px",
    left: 0,
    position: "absolute",
    top: 0,
    width: "16px"
  },

  onButtonStyle: {
    backgroundColor: Colors.grey.P700,
    borderRadius: "50%",
    height: "20px",
    left: 0,
    position: "absolute",
    top: 0,
    transform: "scale(0)",
    transition: "transform ease 0.28s",
    width: "20px",
    willChange: "transform"
  },

  onButtonFillStyle: {
    transform: "scale(.6)"
  },

  circleContainerStyle: {
    position: "absolute",
    width: "16px",
    height: "16px",
    top: "2px",
    left: "2px"
  }

});