"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var RippleContainer = _interopRequire(require("../components/RippleContainer"));

var Tabs = (function (_React$Component) {
  function Tabs() {
    _classCallCheck(this, Tabs);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Tabs, _React$Component);

  _createClass(Tabs, {
    render: {

      //constructor(props) {
      //  super(props);
      //}

      value: function render() {
        var _this = this;

        var props = this.props;
        var styles = TabsStyles;
        var titles = [];
        var children = props.children;
        var selectedTab;
        var selectedIndex = 0;
        for (var i = 0, l = children.length; i < l; i++) {
          var child = children[i];
          var childProps = child.props;
          var tabTitleStyles = [styles.tabTitleStyle];
          if (childProps.selected) {
            tabTitleStyles.push(styles.tabTitleSelectedStyle);
            selectedTab = child;
            selectedIndex = i;
          }
          tabTitleStyles.push({ width: 100 / children.length + "%" });
          titles[i] = React.createElement(
            "li",
            { key: i, styles: tabTitleStyles },
            React.createElement(RippleContainer, { onClick: function (e) {
                return _this.onTabHeaderClick(e);
              } }),
            childProps.title
          );
        }
        var normalStyles = [styles.normalStyle];
        if (props.styles) {
          normalStyles = normalStyles.concat(props.styles);
        }
        return React.createElement(
          "div",
          { styles: normalStyles },
          React.createElement(
            "ul",
            { styles: styles.tabTitlesContainerStyle },
            titles,
            React.createElement("div", { styles: [styles.selectionBarStyle, {
                width: 100 / children.length + "%",
                left: 100 / children.length * selectedIndex + "%"
              }] })
          ),
          selectedTab
        );
      }
    },
    onTabHeaderClick: {
      value: function onTabHeaderClick(e) {
        var props = this.props;
        if (props.onChange) {
          var position = 0;
          var target = e.target;

          while (target = target.previousSibling) {
            position++;
          }

          // enhance the event with the position of the blind
          e.position = position;
          props.onChange(e);
        }
      }
    }
  });

  return Tabs;
})(React.Component);

module.exports = Tabs;

var TabsStyles = StyleSheet.create({
  normalStyle: {
    position: "relative",
    width: "100%"
  },

  tabTitlesContainerStyle: {
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    backgroundColor: Colors.cyan.P500,
    lineHeight: "48px",
    margin: 0,
    padding: 0,
    height: 48,
    position: "relative",
    cursor: "pointer",
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    boxShadow: "0px 3px 2px rgba(0, 0, 0, 0.2)"
  },

  tabTitleStyle: {
    height: "100%",
    display: "inline-block",
    textAlign: "center",
    userSelect: "none",
    position: "relative",
    overflow: "hidden",
    opacity: ".6",
    transition: "opacity .38s linear"
  },

  tabTitleSelectedStyle: {
    opacity: "1"
  },

  selectionBarStyle: {
    backgroundColor: Colors.yellow.A100,
    height: 2,
    transition: "left .28s linear",
    position: "absolute",
    bottom: 0
  }
});