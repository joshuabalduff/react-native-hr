"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _callSuper(t, o, e) { return o = (0, _getPrototypeOf2["default"])(o), (0, _possibleConstructorReturn2["default"])(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], (0, _getPrototypeOf2["default"])(t).constructor) : o.apply(t, e)); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
var styles = _reactNative.StyleSheet.create({
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
var Hr = /*#__PURE__*/function (_Component) {
  function Hr(props) {
    var _this;
    (0, _classCallCheck2["default"])(this, Hr);
    _this = _callSuper(this, Hr, [props]);
    _this.renderLine = _this.renderLine.bind(_this);
    _this.renderText = _this.renderText.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }
  (0, _inherits2["default"])(Hr, _Component);
  return (0, _createClass2["default"])(Hr, [{
    key: "renderLine",
    value: function renderLine(key) {
      return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
        key: key,
        style: [styles.line, this.props.lineStyle]
      });
    }
  }, {
    key: "renderText",
    value: function renderText(key) {
      return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
        key: key
      }, /*#__PURE__*/_react["default"].createElement(_reactNative.Text, {
        style: [styles.text, this.props.textStyle]
      }, this.props.text));
    }
  }, {
    key: "renderInner",
    value: function renderInner() {
      if (!this.props.text) {
        return this.renderLine();
      }
      return [this.renderLine(1), this.renderText(2), this.renderLine(3)];
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_reactNative.View, {
        style: {
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: this.props.marginLeft,
          marginRight: this.props.marginRight
        }
      }, this.renderInner());
    }
  }]);
}(_react.Component);
Hr.propTypes = {
  lineStyle: _propTypes["default"].shape({}),
  text: _propTypes["default"].string,
  marginLeft: _propTypes["default"].number,
  marginRight: _propTypes["default"].number,
  textStyle: _propTypes["default"].shape({})
};
Hr.defaultProps = {
  marginLeft: 8,
  marginRight: 8
};
var _default = exports["default"] = Hr;
