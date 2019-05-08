"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Icon = _interopRequire(require("./Icon"));

var RippleContainer = _interopRequire(require("./RippleContainer"));

var ListItem = (function (_React$Component) {
  function ListItem() {
    _classCallCheck(this, ListItem);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(ListItem, _React$Component);

  _createClass(ListItem, {
    render: {
      value: function render() {
        var _this = this;

        var props = this.props;
        var styles = ListItemStyles;
        var listItemStyles = [styles.normalListItemStyle];
        if (props.icon) {
          listItemStyles.push(styles.singleLineWithIconTitleStyle);
        }

        if (props.styles) {
          listItemStyles = listItemStyles.concat(props.styles);
        }

        return React.createElement(
          "div",
          { styles: listItemStyles },
          !props.disableRipple && React.createElement(RippleContainer, { onClick: function (e) {
              return _this.onClick(e);
            } }),
          props.children
        );
      }
    },
    onClick: {
      value: (function (_onClick) {
        var _onClickWrapper = function onClick(_x) {
          return _onClick.apply(this, arguments);
        };

        _onClickWrapper.toString = function () {
          return _onClick.toString();
        };

        return _onClickWrapper;
      })(function (e) {
        var onClick = this.props.onClick;
        if (onClick) {
          onClick(e);
        }
      })
    }
  });

  return ListItem;
})(React.Component);

module.exports = ListItem;

var ListItemStyles = StyleSheet.create({

  normalListItemStyle: {
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    boxSizing: "border-box",
    cursor: "pointer",
    overflow: "hidden",
    padding: "14px 16px 15px",
    position: "relative"
  },

  singleLineWithIconTitleStyle: {
    padding: "11px 16px"
  },

  iconStyle: {
    display: "inline-block",
    padding: "0 16px 0 0",
    width: 30,
    verticalAlign: "middle",
    position: "relative",
    pointerEvents: "none"
  }

});