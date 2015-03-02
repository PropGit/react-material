"use strict";

var React = require("react");
var ReactStyle = require("react-style");

var Colors = require("../style/Colors");

var Button = require("../components/Button");
var BottomSheet = require("../components/BottomSheet");
var BottomSheetItem = require("../components/BottomSheetItem");

var ListItem = require("../components/ListItem");
var Overlay = require("../components/Overlay");

var preventOverlayClick = false; // Mobile Safari

var BottomSheetsView = React.createClass({
  displayName: "BottomSheetsView",

  getInitialState: function getInitialState() {
    return {
      show: false,
      grid: false
    };
  },

  render: function render() {
    var state = this.state;
    return React.createElement(
      "div",
      null,
      React.createElement(
        Button,
        { onClick: this.onShowBottomSheetBtnClick, raised: true, styles: ReactStyle({ marginTop: 40 }) },
        "List"
      ),
      React.createElement(Overlay, { show: state.show, onClick: this.onOverlayClick }),
      React.createElement(
        BottomSheet,
        { show: state.show, title: "Title", styles: [ReactStyle({ color: Colors.grey.P800, fill: Colors.grey.P800 })] },
        state.grid ? React.createElement(
          "div",
          null,
          "TODO"
        ) : React.createElement(
          "div",
          null,
          React.createElement(
            BottomSheetItem,
            { icon: "share" },
            "Share"
          ),
          React.createElement(
            BottomSheetItem,
            { icon: "cloud-upload" },
            "Upload"
          ),
          React.createElement(
            BottomSheetItem,
            { icon: "content-copy" },
            "Copy"
          ),
          React.createElement(
            BottomSheetItem,
            { icon: "print" },
            "Print this page"
          )
        )
      ),
      React.createElement(
        "h2",
        null,
        "TODO"
      ),
      "Pull up sheet to cover entire screen and add a dismiss button."
    );
  },

  onShowBottomSheetBtnClick: function onShowBottomSheetBtnClick() {
    this.setState({ show: true });
  },

  onOverlayClick: function onOverlayClick() {
    this.setState({ show: false });
  }

});

module.exports = BottomSheetsView;