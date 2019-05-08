"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var _style = require("../style/");

var Colors = _style.Colors;
var Typography = _style.Typography;

var Icon = _interopRequire(require("./Icon"));

var AppBar = (function (_React$Component) {

  //propTypes: {
  //  actionButtons: React.PropTypes.array,
  //  boxShadow: React.PropTypes.bool,
  //  expanded: React.PropTypes.bool,
  //  onBackButtonClick: React.PropTypes.func,
  //  onMenuButtonCLick: React.PropTypes.func,
  //  onNavButtonClick: React.PropTypes.func,
  //  onTitleClick: React.PropTypes.func,
  //  title: React.PropTypes.string
  //},

  function AppBar(props) {
    _classCallCheck(this, AppBar);

    _get(Object.getPrototypeOf(AppBar.prototype), "constructor", this).call(this, props);
    this.acceptingScrollValue = true;
    this.finalCheckTimeout = null;
    this.state = {
      scrollListenerAttached: false,
      showShadow: true
    };
  }

  _inherits(AppBar, _React$Component);

  _createClass(AppBar, {
    render: {
      value: function render() {
        var props = this.props;
        var state = this.state;
        var styles = AppBarStyles;
        var propsStyles = props.styles || {};
        var appBarStyles = [styles.normalAppBarStyle, state.showExpanded && props.expanded && styles.expandedAppBarStyle];
        if (props.styles) {
          appBarStyles = appBarStyles.concat(propsStyles.normalAppBarStyle);
        }

        if (props.shadow && !props.expanded || state.showShadow === true) {
          appBarStyles.push(styles.boxShadowStyle);
        }
        var expandedTitleStyle;
        var headLineStyle;
        if (state.showExpanded && props.expanded) {
          expandedTitleStyle = styles.expandedTitleStyle;
          headLineStyle = Typography.headline;
        }
        return React.createElement(
          "div",
          null,
          props.expanded && React.createElement("div", { styles: [styles.placeHolderStyle, propsStyles.placeHolderStyle] }),
          React.createElement(
            "nav",
            { styles: [appBarStyles, propsStyles.appBarStyles] },
            props.onNavButtonClick && React.createElement(
              "div",
              { styles: styles.navButtonStyle, onClick: function () {
                  return props.onNavButtonClick();
                } },
              React.createElement(Icon, { icon: "menu" })
            ),
            props.onBackButtonClick && React.createElement(
              "div",
              { styles: styles.navButtonStyle, onClick: function () {
                  return props.onBackButtonClick();
                } },
              React.createElement(Icon, { icon: "arrow-back" })
            ),
            props.title && React.createElement(
              "div",
              { styles: [Typography.title, styles.titleStyle, expandedTitleStyle, headLineStyle, propsStyles.titleStyle], onClick: function () {
                  return props.onTitleClick();
                } },
              props.title
            ),
            props.children
          )
        );
      }
    },
    componentDidUpdate: {
      value: function componentDidUpdate() {
        this.initializeScrollListener();
        this.onBodyScroll();
      }
    },
    componentWillMount: {
      value: function componentWillMount() {
        this.initializeScrollListener();
      }
    },
    onBodyScroll: {
      value: function onBodyScroll() {
        if (!this.acceptingScrollValue) {
          return;
        }
        this.scroll = true;
        var self = this;
        function checkExpanded() {
          if (typeof window === "undefined") {
            return;
          }
          var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 30) {
            self.setState({ showExpanded: false });
          } else {
            self.setState({ showExpanded: true });
          }

          if (scrollTop >= 75) {
            self.setState({ showShadow: true });
          } else {
            self.setState({ showShadow: false });
          }

          self.scroll = false;
          if (self.finalCheckTimeout) {
            clearTimeout(self.finalCheckTimeout);
          }
          self.finalCheckTimeout = setTimeout(finalCheck, 100);
        }

        function finalCheck() {
          if (!self.scroll) {
            checkExpanded();
          }
        }

        checkExpanded();

        setTimeout(function () {
          self.acceptingScrollValue = true;
        }, 100);

        this.acceptingScrollValue = false;
      }
    },
    initializeScrollListener: {
      value: function initializeScrollListener() {
        if (typeof window === "undefined") {
          return;
        }

        var props = this.props;
        var state = this.state;
        // fugly
        if (props.expanded && !state.scrollListenerAttached) {
          window.addEventListener("scroll", this.onBodyScroll);
        } else if (!props.expanded && state.scrollListenerAttached) {
          window.removeEventListener("scroll", this.onBodyScroll);
        }
      }
    },
    componentWillUnmount: {
      value: function componentWillUnmount() {
        window.removeEventListener("scroll", this.onBodyScroll);
      }
    }
  });

  return AppBar;
})(React.Component);

module.exports = AppBar;

var AppBarStyles = StyleSheet.create({

  normalAppBarStyle: {
    backgroundColor: Colors.cyan.P500,
    boxSizing: "border-box",
    position: "fixed",
    height: 56,
    top: 0,
    width: "100%",
    zIndex: "1"
  },

  expandedAppBarStyle: {
    height: 128,
    position: "relative",
    marginTop: -128
  },

  navButtonStyle: {
    height: 26,
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    position: "fixed",
    width: 24,
    display: "inline-block",
    padding: "14px 16px",
    cursor: "pointer",
    verticalAlign: "top",
    top: 0
  },

  titleStyle: {
    display: "inline-block",
    opacity: "inherit",
    cursor: "default",
    lineHeight: "56px",
    position: "absolute",
    top: 0,
    left: 72
  },

  expandedTitleStyle: {
    position: "relative",
    left: 14,
    top: 65
  },

  boxShadowStyle: {
    boxShadow: "0 2px 5px rgba(0, 0, 0, .26)"
  },

  placeHolderStyle: {
    backgroundColor: Colors.cyan.P500,
    position: "relative",
    height: 128,
    width: "100%"
  }
});