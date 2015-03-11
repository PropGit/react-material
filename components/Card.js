"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Shadow = _interopRequire(require("./Shadow"));

var Card = (function (_React$Component) {
  function Card() {
    _classCallCheck(this, Card);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Card, _React$Component);

  _createClass(Card, {
    render: {
      value: function render() {
        var props = this.props;
        var styles = CardStyles;
        return React.createElement(
          "div",
          { styles: styles.normalCardStyle },
          React.createElement(Shadow, { size: 1 }),
          props.title && React.createElement(
            "h3",
            { styles: styles.headerStyle },
            props.title
          ),
          this.props.children
        );
      }
    }
  });

  return Card;
})(React.Component);

module.exports = Card;

var CardStyles = StyleSheet.create({

  normalCardStyle: {
    backgroundColor: "white",
    borderRadius: 2,
    margin: 8,
    height: 250,
    padding: 16,
    position: "relative"
  },

  headerStyle: {
    cursor: "default",
    marginBottom: 35,
    marginTop: 0
  }

});