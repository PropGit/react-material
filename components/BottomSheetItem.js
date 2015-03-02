"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var ListItem = require("../components/ListItem");

var BottomSheetItemStyles = {

  normalStyle: ReactStyle({
    height: 48
  })

};

var BottomSheetItem = React.createClass({
  displayName: "BottomSheetItem",

  render: function render() {
    return this.transferPropsTo(React.createElement(
      ListItem,
      { styles: BottomSheetItemStyles.normalStyle },
      this.props.children
    ));
  }

});

module.exports = BottomSheetItem;