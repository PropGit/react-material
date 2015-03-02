"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Colors = require("../style/Colors");
var Typography = require("../style/Typography");
var Icon = require("./Icon");

var AppBarStyles = {

  normalAppBarStyle: ReactStyle({
    backgroundColor: Colors.cyan.P500,
    boxSizing: "border-box",
    position: "fixed",
    height: 56,
    top: 0,
    width: "100%",
    zIndex: "1"
  }),

  expandedAppBarStyle: ReactStyle({
    height: 128,
    position: "relative",
    marginTop: -128
  }),

  navButtonStyle: ReactStyle({
    height: 26,
    webkitTapHighlightColor: "rgba(0,0,0,0)",
    position: "fixed",
    width: 24,
    display: "inline-block",
    padding: "14px 16px",
    cursor: "pointer",
    verticalAlign: "top",
    top: 0
  }),

  titleStyle: ReactStyle({
    display: "inline-block",
    opacity: "inherit",
    cursor: "default",
    lineHeight: "56px",
    position: "absolute",
    top: 0,
    left: 72
  }),

  expandedTitleStyle: ReactStyle({
    position: "relative",
    left: 14,
    top: 65
  }),

  boxShadowStyle: ReactStyle({
    boxShadow: "0 2px 5px rgba(0, 0, 0, .26)"
  }),

  placeHolderStyle: ReactStyle({
    backgroundColor: Colors.cyan.P500,
    position: "relative",
    height: 128,
    width: "100%"
  })
};

var AppBar = React.createClass({
  displayName: "AppBar",

  propTypes: {
    actionButtons: React.PropTypes.array,
    boxShadow: React.PropTypes.bool,
    expanded: React.PropTypes.bool,
    onBackButtonClick: React.PropTypes.func,
    onMenuButtonCLick: React.PropTypes.func,
    onNavButtonClick: React.PropTypes.func,
    onTitleClick: React.PropTypes.func,
    title: React.PropTypes.string
  },

  getInitialState: function getInitialState() {
    return {
      scrollListenerAttached: false,
      showShadow: true
    };
  },

  render: function render() {
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
          { styles: styles.navButtonStyle, onClick: props.onNavButtonClick },
          React.createElement(Icon, { icon: "menu" })
        ),
        props.onBackButtonClick && React.createElement(
          "div",
          { styles: styles.navButtonStyle, onClick: props.onBackButtonClick },
          React.createElement(Icon, { icon: "arrow-back" })
        ),
        props.title && React.createElement(
          "div",
          { styles: [Typography.title, styles.titleStyle, expandedTitleStyle, headLineStyle, propsStyles.titleStyle], onClick: props.onTitleClick },
          props.title
        ),
        props.children
      )
    );
  },

  componentDidUpdate: function componentDidUpdate() {
    this.initializeScrollListener();
    this.onBodyScroll();
  },

  componentWillMount: function componentWillMount() {
    this.initializeScrollListener();
  },

  acceptingScrollValue: true,
  finalCheckTimeout: null,
  onBodyScroll: function onBodyScroll() {
    if (!this.acceptingScrollValue) {
      return;
    }
    this.scroll = true;
    var self = this;
    function checkExpanded() {
      if (typeof window === "undefined" || !self.isMounted()) {
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
  },

  initializeScrollListener: function initializeScrollListener() {
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
  },

  componentWillUnmount: function componentWillUnmount() {

    window.removeEventListener("scroll", this.onBodyScroll);
  }

});

module.exports = AppBar;