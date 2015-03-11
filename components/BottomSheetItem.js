"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var ListItem = _interopRequire(require("./ListItem"));

var BottomSheetItem = (function (_React$Component) {
  function BottomSheetItem() {
    _classCallCheck(this, BottomSheetItem);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(BottomSheetItem, _React$Component);

  _createClass(BottomSheetItem, {
    render: {
      value: function render() {
        return React.createElement(
          ListItem,
          _extends({ styles: BottomSheetItemStyles.normalStyle }, this.props),
          this.props.children
        );
      }
    }
  });

  return BottomSheetItem;
})(React.Component);

module.exports = BottomSheetItem;

var BottomSheetItemStyles = StyleSheet.create({
  normalStyle: {
    height: 48
  }
});