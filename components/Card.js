"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Shadow = require("./Shadow");

var CardStyles = {

  normalCardStyle: ReactStyle({
    backgroundColor: "white",
    borderRadius: 2,
    margin: 8,
    height: 250,
    padding: 16,
    position: "relative"
  }),

  headerStyle: ReactStyle({
    cursor: "default",
    marginBottom: 35,
    marginTop: 0
  })

};

var Card = React.createClass({
  displayName: "Card",

  render: function render() {
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

});

module.exports = Card;