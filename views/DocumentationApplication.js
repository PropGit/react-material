"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

require("./style.css");

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

React.initializeTouchEvents(true);

var Colors = require("../style").Colors;

// components

var _components = require("../components");

var AppBar = _components.AppBar;
var List = _components.List;
var ListItem = _components.ListItem;
var Overlay = _components.Overlay;
var SideNavigation = _components.SideNavigation;

//
//var BottomSheetsView = require('./BottomSheetsView');

var _ = require("./");

var BottomSheetsView = _.BottomSheetsView;
var ButtonsView = _.ButtonsView;
var CardsView = _.CardsView;
var DialogsView = _.DialogsView;
var ListsView = _.ListsView;
var SwitchesView = _.SwitchesView;
var TabsView = _.TabsView;
var TextFieldsView = _.TextFieldsView;

//var ProgressAndActivityView = require('./ProgressAndActivityView');

//var MenusView = require('./MenusView');
//

//
//var BlueTheme = require('../themes/BlueTheme');

var ViewsEnum = {
  BottomSheetsView: 1,
  ButtonsView: 2,
  //ProgressAndActivityView: 3,
  TabsView: 4,
  TextFieldsView: 5,
  SwitchesView: 6,
  ListsView: 7,
  CardsView: 8,
  DialogsView: 9
  //MenusView: 10
};

var DocumentationApplicationView = (function (_React$Component) {

  // themes: [BlueTheme],

  function DocumentationApplicationView() {
    _classCallCheck(this, DocumentationApplicationView);

    this.state = {
      showSideNavigation: false,
      view: 0
    };
  }

  _inherits(DocumentationApplicationView, _React$Component);

  _createClass(DocumentationApplicationView, {
    onNavButtonClick: {
      value: function onNavButtonClick() {
        this.setState({ showSideNavigation: !this.state.showSideNavigation });
      }
    },
    onOverlayClick: {
      value: function onOverlayClick() {
        this.setState({ showSideNavigation: false });
      }
    },
    render: {
      value: function render() {
        var _this = this;

        var state = this.state;
        var view = state.view;
        var title;
        var expanded = false;
        if (view === ViewsEnum.BottomSheetsView) {
          title = "Bottom sheets";
        } else if (view === ViewsEnum.ButtonsView) {
          expanded = true;
          title = "Buttons";
        }
        /*else if(view === ViewsEnum.ProgressAndActivityView) {
          title = 'Progress and Activity';
        }*/
        else if (view === ViewsEnum.TabsView) {
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
        }

        return React.createElement(
          "div",
          { styles: DocumentationApplicationStyles.normalStyle },
          React.createElement(AppBar, { onNavButtonClick: function () {
              return _this.onNavButtonClick();
            },
            expanded: expanded,
            shadow: true,
            title: title,
            styles: DocumentationApplicationStyles.appBar }),
          React.createElement(Overlay, { show: state.showSideNavigation, onClick: function () {
              return _this.onOverlayClick();
            } }),
          React.createElement(
            SideNavigation,
            { show: state.showSideNavigation },
            React.createElement(
              List,
              null,
              React.createElement(
                ListItem,
                { onClick: this.onClick(ViewsEnum.BottomSheetsView) },
                "Bottom sheets"
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
            { styles: DocumentationApplicationStyles.containerStyle },
            state.view === 0 && React.createElement(
              "div",
              null,
              React.createElement(
                "h1",
                { styles: DocumentationApplicationStyles.headerStyle },
                "React Material Components"
              ),
              React.createElement(
                "p",
                { styles: DocumentationApplicationStyles.paragraphStyle },
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
                { styles: DocumentationApplicationStyles.paragraphStyle },
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
            state.view === ViewsEnum.TabsView && React.createElement(TabsView, null),
            state.view === ViewsEnum.TextFieldsView && React.createElement(TextFieldsView, null),
            state.view === ViewsEnum.SwitchesView && React.createElement(SwitchesView, null),
            state.view === ViewsEnum.ListsView && React.createElement(ListsView, null),
            state.view === ViewsEnum.CardsView && React.createElement(CardsView, null),
            state.view === ViewsEnum.DialogsView && React.createElement(DialogsView, null)
          )
        );
      }
    },
    onClick: {
      value: function onClick(position) {
        var self = this;
        return function () {
          self.setState({ view: position, showSideNavigation: false });
        };
      }
    }
  });

  return DocumentationApplicationView;
})(React.Component);

module.exports = DocumentationApplicationView;

var DocumentationApplicationStyles = StyleSheet.create({

  normalStyle: {
    backgroundColor: Colors.grey.P100,
    minHeight: "100%"
  },

  containerStyle: {
    margin: "auto",
    maxWidth: "700px",
    padding: "56px 20px 0"
  },

  headerStyle: {
    color: Colors.indigo.P500,
    fontSize: "34",
    lineHeight: "32px",
    marginBottom: 42,
    paddingTop: 80,
    fontWeight: 400
  },

  paragraphStyle: {
    color: Colors.grey.P900,
    fontSize: "20",
    lineHeight: "32px"
  },

  appBar: {}
});

if (typeof window !== "undefined") {
  React.render(React.createElement(DocumentationApplicationView, null), document.getElementById("container"));
}

//normalAppBarStyle: ReactStyle({
// backgroundColor: Colors.blue.P500,
//  color: 'white',
//  fill: 'white'
//}),
//
//placeHolderStyle: ReactStyle({
// backgroundColor: Colors.blue.P500
//}),
//
//titleStyle: ReactStyle({
// color: 'white'
//})