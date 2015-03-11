"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Overlay = (function (_React$Component) {
  function Overlay() {
    _classCallCheck(this, Overlay);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Overlay, _React$Component);

  _createClass(Overlay, {
    render: {
      //
      //propTypes: {
      //  onClick: React.PropTypes.func.isRequired
      //},

      value: function render() {
        var _this = this;

        var styles = OverlayStyles;
        var overlayStyles = [styles.normalOverlayStyle];
        if (this.props.show) {
          overlayStyles.push(styles.normalOverlayVisibleStyle);
        }
        return React.createElement("div", { onClick: function (e) {
            return _this.onClick(e);
          }, styles: overlayStyles });
      }
    },
    onClick: {
      value: function onClick(e) {
        var props = this.props;
        if (props.onClick) {
          props.onClick(e);
        }
      }
    }
  });

  return Overlay;
})(React.Component);

module.exports = Overlay;

var OverlayStyles = StyleSheet.create({

  normalOverlayStyle: {
    height: "100%",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgb(0,0,0)",
    opacity: ".01",
    zIndex: "2",
    visibility: "hidden",
    transition: "visibility 0s linear .4s, opacity .4s cubic-bezier(.4, 0, .2, 1), z-index 0s linear .4s"
  },

  normalOverlayVisibleStyle: {
    opacity: ".3",
    filter: "alpha(opacity=30)", // wonder what's better this or transparent images (both suck for this)
    visibility: "visible",
    transition: "visibility 0s linear 0s, opacity .4s cubic-bezier(.4, 0, .2, 1), z-index 0s linear 0s"
  }

});