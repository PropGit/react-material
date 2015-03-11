"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = require("../style/").Colors;

var BottomSheet = (function (_React$Component) {
  function BottomSheet(props) {
    _classCallCheck(this, BottomSheet);

    _get(Object.getPrototypeOf(BottomSheet.prototype), "constructor", this).call(this, props);

    this._isMounted = false;
  }

  _inherits(BottomSheet, _React$Component);

  _createClass(BottomSheet, {
    hiddenTransformStyle: {
      value: function hiddenTransformStyle() {
        var height = 0;
        if (this._isMounted) {
          var domNode = React.findDOMNode(this);
          if (domNode) {
            height = domNode.offsetHeight + 8;
          }
        }

        return {
          visibility: "hidden",
          transform: "translateY(" + height + "px)",
          transition: "transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear .21s"
        };
      }
    },
    render: {
      value: function render() {
        var props = this.props;
        var styles = BottomSheetStyles;
        var bottomSheetStyles = [styles.normalBottomSheetStyle];
        if (props.show) {
          bottomSheetStyles.push(styles.showBottomSheetStyle);
        } else {
          bottomSheetStyles.push(this.hiddenTransformStyle());
        }
        if (props.styles) {
          bottomSheetStyles = bottomSheetStyles.concat(props.styles);
        }
        return React.createElement(
          "div",
          { styles: bottomSheetStyles },
          props.title && React.createElement(
            "div",
            { styles: styles.titleStyle },
            props.title
          ),
          props.children
        );
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        this._isMounted = true;
        this.forceUpdate(); // to enforce calculation of height
      }
    }
  });

  return BottomSheet;
})(React.Component);

module.exports = BottomSheet;

var BottomSheetStyles = StyleSheet.create({

  normalBottomSheetStyle: {
    backgroundColor: "white",
    borderTop: "1px solid " + Colors.grey.P300,
    bottom: 0,
    left: 0,
    paddingBottom: 8,
    position: "fixed",
    right: 0,
    transition: "transform .2s cubic-bezier(.4,0,.2,1), visibility 0s linear 0s",
    visibility: "visible",
    zIndex: "3"
  },

  showBottomSheetStyle: {
    transform: "translateY(0)"
  },

  titleStyle: {
    color: Colors.grey.P500,
    cursor: "default",
    padding: 16
  }

});