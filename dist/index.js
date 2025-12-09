"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
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
    _classCallCheck(this, Hr);
    _this = _callSuper(this, Hr, [props]);
    _this.renderLine = _this.renderLine.bind(_this);
    _this.renderText = _this.renderText.bind(_this);
    _this.renderInner = _this.renderInner.bind(_this);
    return _this;
  }
  _inherits(Hr, _Component);
  return _createClass(Hr, [{
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