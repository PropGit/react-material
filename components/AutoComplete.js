"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var TextField = require("./TextField").TextField;

// on select go to top + full width + show suggestions

var AutoComplete = (function (_React$Component) {
  function AutoComplete() {
    _classCallCheck(this, AutoComplete);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(AutoComplete, _React$Component);

  _createClass(AutoComplete, {
    render: {
      value: function render() {
        return React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            null,
            React.createElement(TextField, null)
          )
        );
      }
    }
  });

  return AutoComplete;
})(React.Component);

module.exports = AutoComplete;