"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = _interopRequire(require("../style/Colors"));

var CircleShadow = _interopRequire(require("./CircleShadow"));

var Icon = _interopRequire(require("./Icon"));

var IconButton = (function (_React$Component) {
  function IconButton() {
    _classCallCheck(this, IconButton);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(IconButton, _React$Component);

  _createClass(IconButton, {
    render: {
      value: function render() {
        var props = this.props;
        var styles = IconButtonStyles;
        return React.createElement(
          "div",
          { styles: styles.normalStyle, onClick: function () {
              return props.onClick();
            } },
          React.createElement(CircleShadow, { active: true, styles: [styles.circleShadowStyle] }),
          React.createElement(Icon, { icon: props.icon, styles: props.styles ? props.styles.iconStyles : null })
        );
      }
    }
  });

  return IconButton;
})(React.Component);

module.exports = IconButton;

var IconButtonStyles = StyleSheet.create({

  normalStyle: {
    cursor: "pointer",
    display: "inline-block",
    height: 24,
    padding: 8,
    position: "relative",
    width: 24,
    webkitTapHighlightColor: "rgba(0,0,0,0)",
    outline: "none"
  },

  circleShadowStyle: {
    backgroundColor: Colors.grey.P400,
    height: 24,
    left: 7,
    padding: 0,
    top: 8,
    transform: "scale(2) translateZ(0)",
    width: 24
  }

});