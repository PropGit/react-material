"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var Colors = _interopRequire(require("../style/Colors"));

var transitionEnd = _interopRequire(require("./TransitionEndName"));

var ProgressBar = (function (_React$Component) {
  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    this.state = {
      counter: 0,
      indeterminateAnimate: false
    };
  }

  _inherits(ProgressBar, _React$Component);

  _createClass(ProgressBar, {
    render: {

      //propTypes: {
      //  percentage: React.PropTypes.number,
      //  bufferPercentage: React.PropTypes.number,
      //  type: React.PropTypes.string
      //},

      value: function render() {
        var props = this.props;
        var styles = ProgressBarStyles;
        var state = this.state;
        var progressBarStyles = [styles.progressStyle];
        if (props.percentage) {
          progressBarStyles.push({ width: props.percentage + "%" });
        }
        if (props.styles) {
          progressBarStyles = progressBarStyles.concat(props.styles);
        }
        if (props.type === "indeterminate") {
          progressBarStyles.push(styles.indeterminateBigStyle);
          if (state.indeterminateAnimate) {
            progressBarStyles.push(styles.indeterminateBigAnimateStyle);
          }
          if (state.smallSlowAnimate) {
            progressBarStyles.push(styles.indeteminateSmallSlowAnimateStyle);
          }
        }

        var bufferStyles = [styles.normalStyle, { width: props.bufferPercentage + "%" }];

        return React.createElement(
          "div",
          { styles: props.bufferPercentage ? styles.loadingStyle : styles.normalStyle },
          props.bufferPercentage && React.createElement(
            "div",
            null,
            React.createElement("div", { styles: styles.bufferingStyle }),
            React.createElement("div", { styles: bufferStyles })
          ),
          React.createElement("div", { ref: "progress", styles: progressBarStyles })
        );
      }
    },
    componentDidMount: {
      value: function componentDidMount() {
        var self = this;
        if (this.props.type === "indeterminate") {
          setTimeout(function () {
            self.setState({ indeterminateAnimate: true });
          }, 0);

          if (!transitionEnd) {
            return;
          }

          React.findDOMNode(this.refs.progress).addEventListener(transitionEnd, this.onTransitionEnd);
        }
      }
    },
    onTransitionEnd: {
      value: function onTransitionEnd(e) {
        if (e.propertyName === "left") {
          var counter = this.state.counter;
          if (counter < 3) {
            this.setState({ indeterminateAnimate: false, smallSlowAnimate: false, counter: counter + 1 });
            var self = this;
            setTimeout(function () {
              self.setState({ indeterminateAnimate: true });
            }, 0);
          } else {
            var self = this;
            self.setState({ indeterminateAnimate: false });
            setTimeout(function () {
              self.setState({ indeterminateAnimate: true, smallSlowAnimate: true, counter: 0 });
            }, 0);
          }
        }
      }
    }
  });

  return ProgressBar;
})(React.Component);

module.exports = ProgressBar;

var ProgressBarStyles = StyleSheet.create({

  normalStyle: {
    backgroundColor: Colors.grey.P300,
    height: 4,
    overflow: "hidden",
    position: "relative"
  },

  progressStyle: {
    backgroundColor: Colors.red.P600,
    bottom: 0,
    borderTopRightRadius: 3,
    borderBottomRightRadius: 3,
    left: 0,
    position: "absolute",
    top: 0,
    transition: "width .65s linear"
  },

  indeterminateBigStyle: {
    borderRadius: 3,
    width: "75%",
    left: "-75%"
  },

  indeterminateBigAnimateStyle: {
    left: "100%",
    transition: "left .65s ease-in, width .65s ease-in"
  },

  indeteminateSmallSlowAnimateStyle: {
    width: "10%",
    transition: "left 1.25s ease-in, width .65s ease-in"
  },

  loadingStyle: {
    position: "relative",
    height: 4
  },

  bufferingStyle: {}

});