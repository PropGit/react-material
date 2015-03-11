"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Colors = _interopRequire(require("../style/Colors"));

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Shadow = _interopRequire(require("./Shadow"));

var Typography = _interopRequire(require("../style/Typography"));

var merge = _interopRequire(require("../vendor/merge"));

var transitionEnd = _interopRequire(require("./TransitionEndName"));

// warning: this code is fugly - did several attempts of getting
// the effects right, which was a challenge

var Dialog = (function (_React$Component) {
  function Dialog(props) {
    _classCallCheck(this, Dialog);

    _get(Object.getPrototypeOf(Dialog.prototype), "constructor", this).call(this, props);
    this.state = {
      expand: false
    };
  }

  _inherits(Dialog, _React$Component);

  _createClass(Dialog, {
    render: {
      value: function render() {
        var props = this.props;
        var styles = DialogStyles;
        var node;
        var dimensions;
        var normalStyles = [Typography.body2, styles.normalStyle];
        if (props.triggerElement && (node = React.findDOMNode(props.triggerElement))) {
          var domNode = React.findDOMNode(this);

          if (!this.originalDimensions) {
            var width = domNode.getBoundingClientRect().width;

            var scaleX = 1 / (domNode.offsetWidth / node.offsetWidth);
            var scaleY = 1 / (domNode.offsetHeight / node.offsetHeight);
            var x = -domNode.getBoundingClientRect().left + width / 2 + node.getBoundingClientRect().left;
            var y = -domNode.getBoundingClientRect().top + domNode.offsetHeight / 2 + node.getBoundingClientRect().top;
            dimensions = this.originalDimensions = {
              height: domNode.offsetHeight,
              marginLeft: -(width / 2),
              marginTop: -(domNode.offsetHeight / 2),
              width: width,
              transform: "translate(" + x + "px, " + y + "px) scale(" + scaleX + ", " + scaleY + ")"
            };
          }

          if (this.state.expand) {
            normalStyles.push(styles.expandStyle);
            dimensions = merge(this.originalDimensions, {
              transition: "visibility 0s linear 0s, opacity .4s cubic-bezier(.4, 0, .2, 1) 0.02s, transform .4s cubic-bezier(.4, 0, .2, 1) 0.02s"
            });
            delete dimensions.transform;
          } else {
            dimensions = this.originalDimensions;
          }
        }
        var shadow = 3;

        if (props.show) {
          this.wasVisible = true;
        } else if (this.wasVisible) {
          delete dimensions.transition;
          normalStyles.push(styles.slideDownStyle);
        }

        if (dimensions) {
          normalStyles.push(dimensions);
        }
        if (props.width) {
          normalStyles.push({ width: props.width });
        }

        return React.createElement(
          "div",
          { ref: "dialog", styles: normalStyles },
          React.createElement(Shadow, { size: shadow }),
          props.title && React.createElement(
            "div",
            { styles: [Typography.title, styles.titleStyle] },
            props.title
          ),
          React.createElement(
            "div",
            { styles: styles.childrenStyle },
            props.children
          )
        );
      }
    },
    onTransitionEnd: {
      value: function onTransitionEnd(e) {
        if (e.propertyName === "visibility") {
          this.wasVisible = false;
          this.reset = true;
          this.setState({ expand: false });
        }
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        var _this = this;

        if (!transitionEnd) {
          return;
        }

        React.findDOMNode(this.refs.dialog).addEventListener(transitionEnd, function () {
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

        React.findDOMNode(this.refs.dialog).removeEventListener(transitionEnd, function () {
          return _this.onTransitionEnd;
        });
      }
    },
    componentDidUpdate: {
      value: function componentDidUpdate() {
        var self = this;
        setTimeout(function () {

          if (self.reset) {
            self.reset = false;
            return;
          }

          if (!self.state.expand && self.props.show) {
            self.setState({ expand: true });
          }
        }, 10);
      }
    }
  });

  return Dialog;
})(React.Component);

module.exports = Dialog;

var DialogStyles = StyleSheet.create({

  normalStyle: {
    backgroundColor: Colors.grey.P50,
    boxSizing: "border-box",
    lineHeight: "24px",
    opacity: "0",
    padding: 24,
    left: "50%",
    top: "50%",
    visibility: "hidden",
    position: "fixed",
    transform: "translate(0,0) scale(1, 1)",
    transformOrigin: "0 0",
    zIndex: "3",
    willChange: "transform, opacity, left, top"
  },

  titleStyle: {
    paddingBottom: 10
  },

  expandStyle: {
    visibility: "visible",
    opacity: "1"
  },

  childrenStyle: {
    position: "relative" // to re-enable text selection
  },

  slideDownStyle: {
    opacity: "0",
    transform: "translate(0, 100%) scale(.5,.5)",
    transition: "transform .56s cubic-bezier(.4, 0, .2, 1)," + "opacity .56s cubic-bezier(.4, 0, .2, 1), " + "visibility 0s linear .57s",
    visibility: "hidden"
  }

});