"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
const styles = _reactNative.StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    marginLeft: 15,
    marginRight: 15
  }
});
class Hr extends _react.Component {
  constructor(props) {
    super(props);
    this.renderLine = this.renderLine.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderInner = this.renderInner.bind(this);
  }
  renderLine(key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key,
      style: [styles.line, this.props.lineStyle]
    });
  }
  renderText(key) {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      key: key
    }, /*#__PURE__*/_react.default.createElement(_reactNative.Text, {
      style: [styles.text, this.props.textStyle]
    }, this.props.text));
  }
  renderInner() {
    if (!this.props.text) {
      return this.renderLine();
    }
    return [this.renderLine(1), this.renderText(2), this.renderLine(3)];
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: this.props.marginLeft,
        marginRight: this.props.marginRight
      }
    }, this.renderInner());
  }
}
Hr.propTypes = {
  lineStyle: _propTypes.default.shape({}),
  text: _propTypes.default.string,
  marginLeft: _propTypes.default.number,
  marginRight: _propTypes.default.number,
  textStyle: _propTypes.default.shape({})
};
Hr.defaultProps = {
  marginLeft: 8,
  marginRight: 8
};
var _default = exports.default = Hr;