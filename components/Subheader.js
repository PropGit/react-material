"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Typography = require("../style/").Typography;

var Subheader = (function (_React$Component) {
  function Subheader() {
    _classCallCheck(this, Subheader);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Subheader, _React$Component);

  _createClass(Subheader, {
    render: {
      value: function render() {
        var styles = SubheaderStyles;
        return React.createElement(
          "div",
          { styles: [Typography.subhead, styles.normalStyle] },
          this.props.children
        );
      }
    }
  });

  return Subheader;
})(React.Component);

var SubheaderStyles = StyleSheet.create({

  normalStyle: {
    height: 48,
    lineHeight: "48px",
    padding: "0 16px",
    position: "relative"
  }

});

module.exports = Subheader;