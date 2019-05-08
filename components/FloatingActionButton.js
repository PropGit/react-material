"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Icon = _interopRequire(require("./Icon"));

var RippleContainer = _interopRequire(require("./RippleContainer"));

var Shadow = _interopRequire(require("./Shadow"));

var Colors = _interopRequire(require("../style/Colors"));

var isTouchDevice;
if (typeof window !== "undefined") {
  isTouchDevice = "ontouchstart" in window;
}

var FloatingActionButton = (function (_React$Component) {

  //propTypes: {
  //  icon: React.PropTypes.string.isRequired
  //},

  function FloatingActionButton(props) {
    _classCallCheck(this, FloatingActionButton);

    _get(Object.getPrototypeOf(FloatingActionButton.prototype), "constructor", this).call(this, props);
    this.state = {
      active: false
    };
  }

  _inherits(FloatingActionButton, _React$Component);

  _createClass(FloatingActionButton, {
    render: {
      value: function render() {
        var _this = this;

        var props = this.props;
        var styles = FloatingActionButtonStyles;
        var state = this.state;
        var containerStyles = [styles.containerStyle];
        var normalStyles = [styles.normalStyle];
        if (props.styles) {
          normalStyles = normalStyles.concat(props.styles);
        }
        if (props.mini) {
          containerStyles.push(styles.miniStyle);
        }
        var shadowSize = 1;
        if (state.active && !props.percentage) {
          shadowSize = 2;
        }
        var percentageStyling = [styles.percentageStyle];
        if (props.percentage) {
          var percentage = props.percentage;
          percentageStyling.push(styles.percentageStyleVisible);
          var r = "29";
          var c = Math.PI * (r * 2);

          if (percentage < 0) {
            percentage = 0;
          }
          if (percentage > 100) {
            percentage = 100;
          }

          var pct = (100 - percentage) / 100 * c;

          // react doesn't support this yet :(
          //percentageStyling.push({ strokeDashoffset: pct});
        }

        var progressCircleStyles = [styles.progressCircleStyle, props.progressCircleStyle];

        var overlayStyles = [styles.overlayStyle];
        if (state.active) {
          overlayStyles.push(styles.overlayPressedStyle);
        }

        return React.createElement(
          "div",
          { role: "button",
            tabIndex: 0,
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
              return !isTouchDevice && _this.onMouseLeave();
            },
            styles: containerStyles },
          React.createElement(Shadow, { size: shadowSize, styles: styles.shadowStyle }),
          React.createElement(
            "div",
            { styles: percentageStyling },
            props.percentage ? React.createElement(
              "svg",
              { width: 60, height: 60 },
              React.createElement("circle", { id: "bar", r: "29", cx: "30", cy: "30", styles: progressCircleStyles, fill: "transparent" })
            ) : React.createElement("div", null)
          ),
          React.createElement(
            "div",
            { styles: normalStyles },
            React.createElement("div", { styles: overlayStyles }),
            React.createElement(Icon, { icon: props.icon, styles: props.mini ? styles.miniIconStyle : styles.defaultIconStyle })
          )
        );
      }
    },
    onMouseUp: {
      value: function onMouseUp() {
        var props = this.props;
        this.onMouseLeave();
        if (props.onClick) {
          props.onClick();
        }
      }
    },
    onMouseLeave: {
      value: function onMouseLeave() {
        var props = this.props;
        if (props.disabled || props.percentage) {
          return;
        }
        this.setState({ active: false });
      }
    },
    onMouseDown: {
      value: function onMouseDown() {
        var props = this.props;
        if (props.disabled || props.percentage) {
          return;
        }
        this.setState({ active: true });
      }
    }
  });

  return FloatingActionButton;
})(React.Component);

module.exports = FloatingActionButton;

var FloatingActionButtonStyles = StyleSheet.create({

  containerStyle: {
    cursor: "pointer",
    position: "relative",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    borderRadius: "50%",
    display: "inline-block",
    fill: "white",
    height: 56,
    outline: "none",
    userSelect: "none",
    width: 56
  },

  normalStyle: {
    borderRadius: "50%",
    outline: "none",
    width: "100%",
    userSelect: "none",
    height: "100%",
    position: "absolute",
    WebkitTapHighlightColor: "rgba(0,0,0,0)"
  },

  shadowStyle: {
    borderRadius: "50%"
  },

  miniStyle: {
    height: 40,
    width: 40
  },

  overlayStyle: {
    background: "rgba(0, 0, 0, 0.08)",
    borderRadius: "50%",
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: "0",
    transition: "opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1)"
  },

  overlayPressedStyle: {
    opacity: "1"
  },

  miniIconStyle: {
    position: "absolute",
    width: 24,
    left: 8
  },

  defaultIconStyle: {
    position: "absolute",
    width: 24,
    left: 16
  },

  percentageStyle: {
    borderRadius: "50%",
    backgroundColor: "transparent",
    position: "absolute",
    opacity: "0",
    top: -2,
    left: -2,
    right: -2,
    bottom: -2,
    cursor: "default"
  },

  percentageStyleVisible: {
    backgroundColor: Colors.amber.P500,
    opacity: "1",
    transition: "opacity .5s ease-in"
  },

  progressCircleStyle: {
    strokeWidth: 2
  }

});