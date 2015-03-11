"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var transitionEnd = _interopRequire(require("./TransitionEndName"));

var isTransform = _interopRequire(require("./isTransform"));

var CircleShadow = _interopRequire(require("./CircleShadow"));

var CheckBox = (function (_React$Component) {
  function CheckBox(props) {
    _classCallCheck(this, CheckBox);

    _get(Object.getPrototypeOf(CheckBox.prototype), "constructor", this).call(this, props);
    var checked = this.props.checked || false;
    this.isChecked = checked;
    this.state = {
      checked: checked
    };
  }

  _inherits(CheckBox, _React$Component);

  _createClass(CheckBox, {
    render: {
      value: function render() {
        var _this = this;

        var state = this.state;
        var props = this.props;
        var styles = CheckBoxStyles;
        var stylesX = [styles.normalStyle];
        var containerStyles = [styles.containerStyle];
        if (props.containerStyles) {
          containerStyles = containerStyles.concat(props.containerStyles);
        }
        if (state.transitioning) {
          stylesX.push(styles.transitionStyle);
        } else if (state.checked && !state.transitioning) {
          stylesX.push(styles.transitionStyle);
          stylesX.push(styles.checkedStyle);
        }

        return React.createElement(
          "div",
          { tabIndex: 0, styles: containerStyles, onClick: function () {
              return _this.onToggle();
            }, onMouseDown: function () {
              return _this.onMouseDown();
            }, onMouseUp: function () {
              return _this.onMouseUp();
            } },
          React.createElement("div", { ref: "checkbox", styles: stylesX }),
          React.createElement(
            "div",
            { styles: styles.circleContainerStyle },
            React.createElement(CircleShadow, { styles: styles.circleStyle, active: this.state.mouseDown })
          ),
          React.createElement(
            "div",
            { styles: props.children && props.children.length ? styles.childBigStyle : styles.childStyle },
            props.children
          )
        );
      }
    },
    onMouseDown: {
      value: function onMouseDown() {
        if (!transitionEnd) {
          return;
        }
        this.setState({ mouseDown: true });
      }
    },
    onMouseUp: {
      value: function onMouseUp() {
        if (!transitionEnd) {
          return;
        }
        this.setState({ mouseDown: false });
      }
    },
    onToggle: {
      value: function onToggle() {
        if (!this.state.checked) {
          this.setState({ transitioning: true });
          this.isChecked = true;
        } else {
          this.setState({ checked: false });
          this.isChecked = false;
        }
        var props = this.props;
        if (props.onChange) {
          props.onChange({ checked: this.isChecked });
        }
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        var _this = this;

        if (!transitionEnd) {
          return;
        }

        React.findDOMNode(this.refs.checkbox).addEventListener(transitionEnd, function () {
          return _this.onTransitionEnd;
        });
      }
    },
    componentWillUnmount: {
      value: function componentWillUnmount() {
        var _this = this;

        if (!transitionEnd) {
          return;
        }

        React.findDOMNode(this.refs.checkbox).removeEventListener(transitionEnd, function () {
          return _this.onTransitionEnd;
        });
      }
    },
    onTransitionEnd: {
      value: function onTransitionEnd(e) {
        var state = this.state;
        if (state.transitioning) {
          if (isTransform(e.propertyName) && !state.checked) {
            this.setState({ checked: true, transitioning: false });
          }
        }
      }
    },
    toggle: {
      value: function toggle() {
        this.onToggle();
      }
    }
  });

  return CheckBox;
})(React.Component);

module.exports = CheckBox;

var CheckBoxStyles = StyleSheet.create({

  containerStyle: {
    cursor: "pointer",
    display: "block",
    outline: "none",
    position: "relative",
    webkitTapHighlightColor: "rgba(0,0,0,0)"
  },

  childStyle: {
    paddingLeft: "16px"
  },

  childBigStyle: {
    paddingLeft: "32px"
  },

  normalStyle: {
    borderColor: Colors.grey.P700,
    borderStyle: "solid",
    borderWidth: "2px",
    boxSizing: "border-box",
    cursor: "pointer",
    height: "18px",
    left: 0,
    marginTop: 0,
    outline: "none",
    position: "absolute",
    top: 0,
    transform: "translateZ(0)",
    transition: "transform .1s linear, " + "width .1s linear, " + "height .1s linear, " + "margin-top .1s linear, " + "left .1s linear",
    width: "18px",
    willChange: "width, height, margin-top, left"
  },

  transitionStyle: {
    height: 0,
    left: "8px",
    marginTop: "16px",
    transform: "translateZ(0) rotate(45deg)",
    width: 0
  },

  checkedStyle: {
    borderWidth: "0 2px 2px 0",
    borderColor: Colors.green.P600,
    height: "21px",
    marginTop: "-2px",
    width: "10px"
  },

  circleContainerStyle: {
    position: "absolute",
    height: "20px",
    width: "20px"
  },

  circleStyle: {
    backgroundColor: Colors.green.P600
  }

});