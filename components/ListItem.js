"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Icon = require("./Icon");
var RippleContainer = require("./RippleContainer");

var Typography = require("../style/Typography");

var ListItemStyles = {

  normalListItemStyle: ReactStyle({
    webkitTapHighlightColor: "rgba(0,0,0,0)",
    boxSizing: "border-box",
    cursor: "pointer",
    overflow: "hidden",
    padding: "14px 16px 15px",
    position: "relative"
  }),

  singleLineWithIconTitleStyle: ReactStyle({
    padding: "11px 16px"
  }),

  iconStyle: ReactStyle({
    display: "inline-block",
    padding: "0 16px 0 0",
    width: 30,
    verticalAlign: "middle",
    position: "relative",
    pointerEvents: "none"
  })

};

var ListItem = React.createClass({
  displayName: "ListItem",

  render: function render() {
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
      !props.disableRipple && React.createElement(RippleContainer, { onClick: this.onClick }),
      props.icon && React.createElement(
        "div",
        { styles: styles.iconStyle },
        React.createElement(Icon, { icon: props.icon })
      ),
      props.children
    );
  },

  onClick: (function (_onClick) {
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

});

module.exports = ListItem;