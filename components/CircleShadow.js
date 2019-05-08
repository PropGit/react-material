"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style").Colors;

var CircleShadow = (function (_React$Component) {
  function CircleShadow(props) {
    _classCallCheck(this, CircleShadow);

    _get(Object.getPrototypeOf(CircleShadow.prototype), "constructor", this).call(this, props);
    this.state = {
      active: false
    };
  }

  _inherits(CircleShadow, _React$Component);

  _createClass(CircleShadow, {
    render: {
      value: function render() {
        var _this = this;

        var props = this.props;
        var state = this.state;
        var styles = [CircleShadowStyles.normalStyle];
        if (state.active) {
          styles.push(CircleShadowStyles.pressedStyle);
        }
        if (props.active && props.styles) {
          styles = styles.concat(props.styles);
        }

        return React.createElement("div", { styles: styles, onMouseUp: function () {
            return _this.onMouseUp();
          }, onMouseDown: function () {
            return _this.onMouseDown();
          } });
      }
    },
    onMouseUp: {
      value: function onMouseUp() {
        this.setState({ active: false });
      }
    },
    onMouseDown: {
      value: function onMouseDown() {
        this.setState({ active: true });
      }
    }
  });

  return CircleShadow;
})(React.Component);

module.exports = CircleShadow;

var CircleShadowStyles = StyleSheet.create({

  normalStyle: {
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    backgroundColor: Colors.grey.P700,
    opacity: "0",
    borderRadius: "50%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transform: "scale(1) translateZ(0)",
    transition: "opacity .48s ease .1s , transform .001s ease .6s",
    willChange: "opacity, transform"
  },

  pressedStyle: {
    opacity: ".3",
    transform: "scale(3) translateZ(0)",
    transition: "opacity ease 0s, transform ease 0s"
  }

});