"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var _components = require("../components/");

var Button = _components.Button;
var BottomSheet = _components.BottomSheet;
var BottomSheetItem = _components.BottomSheetItem;
var Icon = _components.Icon;
var ListItem = _components.ListItem;
var Overlay = _components.Overlay;

var preventOverlayClick = false; // Mobile Safari

var BottomSheetsView = (function (_React$Component) {
  function BottomSheetsView(props) {
    _classCallCheck(this, BottomSheetsView);

    _get(Object.getPrototypeOf(BottomSheetsView.prototype), "constructor", this).call(this, props);
    this.state = {
      grid: false,
      show: false
    };
  }

  _inherits(BottomSheetsView, _React$Component);

  _createClass(BottomSheetsView, {
    render: {
      value: function render() {
        var _this = this;

        var state = this.state;
        return React.createElement(
          "div",
          null,
          React.createElement(
            Button,
            { onClick: function () {
                return _this.onShowBottomSheetBtnClick();
              }, raised: true, styles: { marginTop: 40 } },
            "List"
          ),
          React.createElement(
            Button,
            { onClick: function () {
                return _this.onShowBottomSheetGridBtnClick();
              }, raised: true, styles: { marginLeft: 20, marginTop: 40 } },
            "Grid"
          ),
          React.createElement(Overlay, { show: state.show, onClick: function () {
              return _this.onOverlayClick();
            } }),
          React.createElement(
            BottomSheet,
            { show: state.show, title: "Title", styles: [{ color: Colors.grey.P800, fill: Colors.grey.P800 }] },
            state.grid ? React.createElement(
              "div",
              null,
              "TODO"
            ) : React.createElement(
              "div",
              null,
              React.createElement(
                BottomSheetItem,
                null,
                React.createElement(Icon, { icon: "share" }),
                "Share"
              ),
              React.createElement(
                BottomSheetItem,
                null,
                React.createElement(Icon, { icon: "cloud-upload" }),
                "Upload"
              ),
              React.createElement(
                BottomSheetItem,
                null,
                React.createElement(Icon, { icon: "content-copy" }),
                "Copy"
              ),
              React.createElement(
                BottomSheetItem,
                null,
                React.createElement(Icon, { icon: "print" }),
                "Print this page"
              )
            )
          )
        );
      }
    },
    onShowBottomSheetBtnClick: {
      value: function onShowBottomSheetBtnClick() {
        this.setState({ grid: false, show: true });
      }
    },
    onShowBottomSheetGridBtnClick: {
      value: function onShowBottomSheetGridBtnClick() {
        this.setState({ grid: true, show: true });
      }
    },
    onOverlayClick: {
      value: function onOverlayClick() {
        this.setState({ show: false });
      }
    }
  });

  return BottomSheetsView;
})(React.Component);

module.exports = BottomSheetsView;