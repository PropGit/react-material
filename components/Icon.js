"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var React = _interopRequire(require("react"));

var StyleSheet = _interopRequire(require("react-style"));

var coreIcons = require("./icons/core-icons.html");
coreIcons = coreIcons.substr(coreIcons.indexOf("<defs>") + "<defs>".length);
coreIcons = coreIcons.substr(0, coreIcons.indexOf("</defs>"));
var socialIcons = require("./icons/social-icons.html");
socialIcons = socialIcons.substr(socialIcons.indexOf("<defs>") + "<defs>".length);
socialIcons = socialIcons.substr(0, socialIcons.indexOf("</defs>"));

var div;
if (typeof window !== "undefined") {
  div = document.createElement("div");
  div.innerHTML = coreIcons + socialIcons;
}

var Icon = (function (_React$Component) {
  function Icon() {
    _classCallCheck(this, Icon);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Icon, _React$Component);

  _createClass(Icon, {
    render: {
      value: function render() {
        if (!this.props.icon) {
          return React.createElement("div", { styles: IconStyles.iconStyle });
        }

        if (window.SVGSVGElement) {
          var html = div.querySelector("#" + this.props.icon).innerHTML;

          return React.createElement("svg", { styles: [IconStyles.iconStyle, this.props.styles],
            viewBox: "0 0 24 24",
            height: "100%",
            width: "100%",
            preserveAspectRatio: "xMidYMid meet", dangerouslySetInnerHTML: { __html: html } });
        } else {
          // TODO: should go to generated image sprite
          return React.createElement("div", null);
        }
      }
    }
  });

  return Icon;
})(React.Component);

module.exports = Icon;

var IconStyles = StyleSheet.create({
  iconStyle: {
    display: "inline-block",
    height: 24,
    width: 24
  }
});