"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var CircleShadow = require("./CircleShadow");
var Colors = require("../style/Colors");
var Icon = require("./Icon");

var IconButtonStyles = {

  normalStyle: ReactStyle({
    cursor: "pointer",
    display: "inline-block",
    height: 24,
    padding: 8,
    position: "relative",
    width: 24,
    webkitTapHighlightColor: "rgba(0,0,0,0)",
    outline: "none"
  }),

  circleShadowStyle: ReactStyle({
    backgroundColor: Colors.grey.P400,
    height: 24,
    left: 7,
    padding: 0,
    top: 8,
    transform: "scale(2) translateZ(0)",
    width: 24
  })

};

var IconButton = React.createClass({
  displayName: "IconButton",

  render: function render() {
    var props = this.props;
    var styles = IconButtonStyles;
    return React.createElement(
      "div",
      { styles: styles.normalStyle, onClick: props.onClick },
      React.createElement(CircleShadow, { active: true, styles: [styles.circleShadowStyle] }),
      React.createElement(Icon, { icon: props.icon })
    );
  }

});

module.exports = IconButton;