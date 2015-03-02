"use strict";

require("./style.css");

var React = require("react");
var ReactStyle = require("react-style");
React.initializeTouchEvents(true);

var Colors = require("../style/Colors");

// components
var AppBar = require("../components/AppBar");
var SideNavigation = require("../components/SideNavigation");
var Overlay = require("../components/Overlay");
//
var BottomSheetsView = require("./BottomSheetsView");
var ButtonsView = require("./ButtonsView");
var ProgressAndActivityView = require("./ProgressAndActivityView");
var SwitchesView = require("./SwitchesView");
var TabsView = require("./TabsView");
var TextFieldsView = require("./TextFieldsView");
var ListsView = require("./ListView");
var CardsView = require("./CardsView");
var DialogsView = require("./DialogsView");
var MenusView = require("./MenusView");
//
var List = require("../components/List");
var ListItem = require("../components/ListItem");
//
//var BlueTheme = require('../themes/BlueTheme');

var ViewsEnum = {
  BottomSheetsView: 1,
  ButtonsView: 2,
  ProgressAndActivityView: 3,
  TabsView: 4,
  TextFieldsView: 5,
  SwitchesView: 6,
  ListsView: 7,
  CardsView: 8,
  DialogsView: 9,
  MenusView: 10
};

var DocumentationApplicationView = React.createClass({
  displayName: "DocumentationApplicationView",

  // themes: [BlueTheme],

  getInitialState: function getInitialState() {
    return {
      showSideNavigation: false,
      view: 0
    };
  },
  styles: {

    normalStyle: ReactStyle({
      backgroundColor: Colors.grey.P100,
      minHeight: "100%"
    }),

    containerStyle: ReactStyle({
      margin: "auto",
      maxWidth: "700px",
      padding: "56px 20px 0"
    }),

    headerStyle: ReactStyle({
      color: Colors.indigo.P500,
      fontSize: "34",
      lineHeight: "32px",
      marginBottom: 42,
      paddingTop: 80,
      fontWeight: 400
    }),

    paragraphStyle: ReactStyle({
      color: Colors.grey.P900,
      fontSize: "20",
      lineHeight: "32px"
    }),

    appBar: {

      normalAppBarStyle: ReactStyle({
        backgroundColor: Colors.blue.P500,
        color: "white",
        fill: "white"
      }),

      placeHolderStyle: ReactStyle({
        backgroundColor: Colors.blue.P500
      }),

      titleStyle: ReactStyle({
        color: "white"
      })
    }
  },

  onNavButtonClick: function onNavButtonClick() {
    this.setState({ showSideNavigation: !this.state.showSideNavigation });
  },

  onOverlayClick: function onOverlayClick() {
    this.setState({ showSideNavigation: false });
  },

  render: function render() {
    var state = this.state;
    var view = state.view;
    var title;
    var expanded = false;
    if (view === ViewsEnum.BottomSheetsView) {
      title = "Bottom sheets";
    } else if (view === ViewsEnum.ButtonsView) {
      expanded = true;
      title = "Buttons";
    } else if (view === ViewsEnum.ProgressAndActivityView) {
      title = "Progress and Activity";
    } else if (view === ViewsEnum.TabsView) {
      title = "Tabs";
    } else if (view === ViewsEnum.TextFieldsView) {
      title = "Text fields";
    } else if (view === ViewsEnum.SwitchesView) {
      title = "Switches";
    } else if (view === ViewsEnum.ListsView) {
      title = "Lists";
    } else if (view === ViewsEnum.CardsView) {
      title = "Cards";
    } else if (view === ViewsEnum.DialogsView) {
      title = "Dialogs";
    } else if (view === ViewsEnum.MenusView) {
      title = "Menus";
    }
    var styles = this.styles;
    return React.createElement(
      "div",
      { styles: styles.normalStyle },
      React.createElement(AppBar, { onNavButtonClick: this.onNavButtonClick,
        expanded: expanded,
        shadow: true,
        title: title,
        styles: styles.appBar }),
      React.createElement(Overlay, { show: state.showSideNavigation, onClick: this.onOverlayClick }),
      React.createElement(
        SideNavigation,
        { show: state.showSideNavigation },
        React.createElement(
          List,
          null,
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.BottomSheetsView) },
            "Bottom Sheets"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.ButtonsView) },
            "Buttons"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.CardsView) },
            "Cards"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.DialogsView) },
            "Dialogs"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.ListsView) },
            "Lists"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.MenusView) },
            "Menus"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.ProgressAndActivityView) },
            "Progress and Activity"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.SwitchesView) },
            "Switches"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.TabsView) },
            "Tabs"
          ),
          React.createElement(
            ListItem,
            { onClick: this.onClick(ViewsEnum.TextFieldsView) },
            "Text fields"
          )
        )
      ),
      React.createElement(
        "div",
        { styles: styles.containerStyle },
        state.view === 0 && React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            { styles: styles.headerStyle },
            "React Material Components"
          ),
          React.createElement(
            "p",
            { styles: styles.paragraphStyle },
            "Here you find components written with ",
            React.createElement(
              "a",
              { href: "http://reactjs.org" },
              "React.js"
            ),
            " and  ",
            React.createElement(
              "a",
              { href: "https://github.com/SanderSpies/react-style" },
              "React Style"
            ),
            " that attempt to abide to the  ",
            React.createElement(
              "a",
              { href: "http://www.google.com/design/spec/material-design/introduction.html" },
              "Google material design guidelines"
            ),
            ". It takes a different approach from Polymer, by wrapping both templates and CSS within JavaScript."
          ),
          React.createElement(
            "p",
            { styles: styles.paragraphStyle },
            "If something is not correct, feel free to help out and file an  ",
            React.createElement(
              "a",
              { href: "https://github.com/SanderSpies/react-style/issues/new" },
              "issue"
            ),
            " or  ",
            React.createElement(
              "a",
              { href: "https://github.com/SanderSpies/react-style/fork" },
              "fork the project"
            ),
            " and do a pull request."
          )
        ),
        state.view === ViewsEnum.BottomSheetsView && React.createElement(BottomSheetsView, null),
        state.view === ViewsEnum.ButtonsView && React.createElement(ButtonsView, null),
        state.view === ViewsEnum.ProgressAndActivityView && React.createElement(ProgressAndActivityView, null),
        state.view === ViewsEnum.TabsView && React.createElement(TabsView, null),
        state.view === ViewsEnum.TextFieldsView && React.createElement(TextFieldsView, null),
        state.view === ViewsEnum.SwitchesView && React.createElement(SwitchesView, null),
        state.view === ViewsEnum.ListsView && React.createElement(ListsView, null),
        state.view === ViewsEnum.CardsView && React.createElement(CardsView, null),
        state.view === ViewsEnum.DialogsView && React.createElement(DialogsView, null),
        state.view === ViewsEnum.MenusView && React.createElement(MenusView, null)
      )
    );
  },

  onClick: function onClick(position) {
    var self = this;
    return function () {
      self.setState({ view: position, showSideNavigation: false });
    };
  }

});

if (typeof window !== "undefined") {
  React.render(React.createElement(DocumentationApplicationView, null), document.getElementById("container"));
}