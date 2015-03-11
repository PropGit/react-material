"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var ShadowStyle = _interopRequire(require("../style/Shadow"));

var Shadow = (function (_React$Component) {
  function Shadow() {
    _classCallCheck(this, Shadow);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Shadow, _React$Component);

  _createClass(Shadow, {
    render: {

      //propTypes: {
      //  size: React.PropTypes.number.isRequired
      //},

      value: function render() {
        var props = this.props;
        var styles = ShadowStyles;
        var size = props.size;
        var shadowTopStyle;
        var shadowBottomStyle;

        if (size === 1) {
          shadowTopStyle = ShadowStyle.z1top;
          shadowBottomStyle = ShadowStyle.z1bottom;
        } else if (size === 2) {
          shadowTopStyle = ShadowStyle.z2top;
          shadowBottomStyle = ShadowStyle.z2bottom;
        } else if (size === 3) {
          shadowTopStyle = ShadowStyle.z3top;
          shadowBottomStyle = ShadowStyle.z3bottom;
        } else if (size === 4) {
          shadowTopStyle = ShadowStyle.z4top;
          shadowBottomStyle = ShadowStyle.z4bottom;
        } else if (size === 5) {
          shadowTopStyle = ShadowStyle.z5top;
          shadowBottomStyle = ShadowStyle.z5bottom;
        }

        var bottomStyles = [styles.normalShadowStyle, shadowBottomStyle];
        var topStyles = [styles.normalShadowStyle, shadowTopStyle];
        if (props.styles) {
          bottomStyles = bottomStyles.concat(props.styles);
          topStyles = topStyles.concat(props.styles);
        }
        return React.createElement(
          "div",
          null,
          React.createElement("div", { styles: bottomStyles }),
          React.createElement("div", { styles: topStyles }),
          this.props.children
        );
      }
    }
  });

  return Shadow;
})(React.Component);

module.exports = Shadow;

var ShadowStyles = StyleSheet.create({

  normalShadowStyle: {
    bottom: 0,
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    willChange: "box-shadow",
    transition: "box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1)"
  }

});