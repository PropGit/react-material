"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var SideNavigation = (function (_React$Component) {
  function SideNavigation() {
    _classCallCheck(this, SideNavigation);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(SideNavigation, _React$Component);

  _createClass(SideNavigation, {
    render: {
      value: function render() {
        var props = this.props;
        var styles = SideNavigationStyles;
        var sideNavigationStyles = [styles.normalSideNavStyle];
        if (props.show) {
          sideNavigationStyles.push(styles.showSideNavStyle);
        }
        if (props.styles) {
          sideNavigationStyles.push(props.styles);
        }
        return React.createElement(
          "div",
          { styles: sideNavigationStyles },
          this.props.children
        );
      }
    }
  });

  return SideNavigation;
})(React.Component);

module.exports = SideNavigation;

var SideNavigationStyles = StyleSheet.create({

  normalSideNavStyle: {
    backgroundColor: "white",
    borderRight: "1px solid " + Colors.grey.P300,
    bottom: 0,
    left: 0,
    overflow: "auto",
    position: "fixed",
    top: 0,
    width: 240,
    transform: "translateX(-241px)",
    transition: "transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear .21s",
    zIndex: "4",
    visibility: "hidden"
  },

  showSideNavStyle: {
    transform: "translateX(0)",
    transition: "transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear 0s",
    visibility: "visible"
  }

});