"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var isTransform = _interopRequire(require("./isTransform"));

var rippleUniqueId = 0;

var transitionEnd = _interopRequire(require("./TransitionEndName"));

var isTouchDevice = typeof window !== "undefined" && "ontouchstart" in window;

var RippleContainer = (function (_React$Component) {
  function RippleContainer() {
    _classCallCheck(this, RippleContainer);

    this.state = {
      ripples: []
    };
  }

  _inherits(RippleContainer, _React$Component);

  _createClass(RippleContainer, {
    render: {
      value: function render() {
        var _this = this;

        var props = this.props;
        var state = this.state;
        var styles = RippleContainerStyles;
        var ripples = state.ripples;
        var rippleComponents = [];
        for (var i = 0, l = ripples.length; i < l; i++) {
          var ripple = ripples[i];
          var rippleStyles = [styles.rippleStyle];
          if (ripple.transitioning || ripple.transitionComplete) {
            rippleStyles.push(styles.rippleAnimationStyle);
          }
          if (i < l - 1 || ripple.transitionComplete && ripple.fadeOut) {
            rippleStyles.push({ opacity: "0" });
          }

          rippleStyles.push({ left: ripple.x, top: ripple.y, width: ripple.width, height: ripple.height });
          var rippleComponent = React.createElement("div", { key: ripple.id,
            ref: "ripple_" + ripple.id,
            styles: rippleStyles });
          rippleComponents.push(rippleComponent);
        }

        return React.createElement(
          "div",
          { styles: [styles.normalStyle, props.styles],
            onTouchStart: function (e) {
              return isTouchDevice && _this.onMouseDown(e);
            },
            onTouchEnd: function (e) {
              return isTouchDevice && _this.onMouseUp(e);
            },
            onTouchCancel: function (e) {
              return isTouchDevice && _this.onMouseLeave(e);
            },
            onMouseDown: function (e) {
              return !isTouchDevice && _this.onMouseDown(e);
            },
            onMouseLeave: function (e) {
              return !isTouchDevice && _this.onMouseLeave(e);
            },
            onMouseUp: function (e) {
              return !isTouchDevice && _this.onMouseUp(e);
            }
          },
          rippleComponents
        );
      }
    },
    onMouseDown: {
      value: function onMouseDown(e) {
        var _this = this;

        var domNode = React.findDOMNode(this);
        var height = domNode.offsetHeight;
        var width = domNode.offsetWidth;
        if (width > height) {
          height = width;
        } else {
          width = height;
        }
        var boundingRect = domNode.getBoundingClientRect();
        var x = e.clientX - boundingRect.left - width / 2;
        var y = e.clientY - boundingRect.top - height / 2;

        var ripples = this.state.ripples;
        var ripple = {
          id: rippleUniqueId++,
          height: height,
          width: width,
          x: x,
          y: y
        };
        ripples.push(ripple);

        // messes up click event :-(
        this.setState({ ripples: ripples });

        setTimeout(function () {
          return _this.startRipple();
        }, 0);
      }
    },
    onMouseUp: {
      value: function onMouseUp(e) {
        this.onMouseLeave();
        var onClick = this.props.onClick;
        if (onClick) {
          e.preventDefault();
          onClick({ target: React.findDOMNode(this).parentNode, originalEvent: e });
        }
      }
    },
    onMouseLeave: {
      value: function onMouseLeave() {
        // fade out
        var ripples = this.state.ripples;
        for (var i = 0, l = ripples.length; i < l; i++) {
          ripples[i].fadeOut = true;
          ripples[i].transitioning = false;
          ripples[i].transitionComplete = true;
        }
        this.setState({ ripples: ripples });
      }
    },
    startRipple: {
      value: function startRipple() {
        var ripples = this.state.ripples;
        ripples[ripples.length - 1].transitioning = true;
        this.setState({ ripples: ripples });
      }
    },
    endRipple: {
      value: function endRipple(e) {
        var ripples = this.state.ripples;
        if (isTransform(e.propertyName)) {
          ripples[0].transitioning = false;
          ripples[0].transitionComplete = true;
          this.setState({ ripples: ripples });
        } else if (e.propertyName === "opacity") {
          ripples.shift();
          this.setState({ ripples: ripples });
        }
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        var _this = this;

        var self = this;
        var domNode = React.findDOMNode(this);

        if (!transitionEnd) {
          return;
        }

        //TODO: make sure we only do this once, instead of all the time...
        domNode.addEventListener(transitionEnd, function (e) {
          return _this.endRipple(e);
        });
      }
    }
  });

  return RippleContainer;
})(React.Component);

var RippleContainerStyles = StyleSheet.create({

  normalStyle: {
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%"
  },

  rippleStyle: {
    display: "block",
    position: "absolute",
    background: "rgba(0, 0, 0, 0.04)",
    borderRadius: "50%",
    transform: "scale(0)",
    transition: "transform .25s linear, opacity .25s linear .2s"
  },

  rippleAnimationStyle: {
    transform: "scale(2)"
  },

  rippleFadeoutStyle: {
    opacity: "0"
  }

});

module.exports = RippleContainer;