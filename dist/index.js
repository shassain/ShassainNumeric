"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.predefinedOptions = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autonumeric = require("autonumeric");

var _autonumeric2 = _interopRequireDefault(_autonumeric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShassainNumeric = function (_React$Component) {
  _inherits(ShassainNumeric, _React$Component);

  function ShassainNumeric(props) {
    _classCallCheck(this, ShassainNumeric);

    var _this = _possibleConstructorReturn(this, (ShassainNumeric.__proto__ || Object.getPrototypeOf(ShassainNumeric)).call(this, props));

    _this.getValue = _this.getValue.bind(_this);
    _this.callEventHandler = _this.callEventHandler.bind(_this);
    return _this;
  }

  _createClass(ShassainNumeric, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autonumeric = new _autonumeric2.default(this.input, this.props.value, _extends({}, this.props.preDefined, this.props, {
        onChange: undefined,
        onFocus: undefined,
        onBlur: undefined,
        onKeyPress: undefined,
        onKeyUp: undefined,
        onKeyDown: undefined,
        watchExternalChanges: false
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.autonumeric.remove();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(newProps) {
      if(newProps.value!=this.props.value){
        var isOptionsChanged = JSON.stringify(_extends({}, this.props, { value: undefined })) !== JSON.stringify(_extends({}, newProps, { value: undefined }));
        //var isValueChanged = this.props.value !== newProps.value && this.getValue() !== newProps.value;
        //if (isValueChanged) {
          this.autonumeric.set(this.props.value);
        //}
        if (isOptionsChanged) {
          this.autonumeric.update(_extends({}, newProps.preDefined, newProps, {
            onChange: undefined,
            onFocus: undefined,
            onBlur: undefined,
            onKeyPress: undefined,
            onKeyUp: undefined,
            onKeyDown: undefined,
            watchExternalChanges: false
          }));
        }
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      if (!this.autonumeric) return;
      var valueMapper = {
        string: function string(numeric) {
          return numeric.getNumericString();
        },
        number: function number(numeric) {
          return numeric.getNumber();
        }
      };
      return valueMapper[this.props.outputFormat](this.autonumeric);
    }
  }, {
    key: "callEventHandler",
    value: function callEventHandler(event, eventName) {
      if (!this.props[eventName]) return;
      this.props[eventName](event, this.getValue());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputProps = {};
      ["id", "className", "style", "disabled", "type", "name", "tabIndex", "unselectable", "size", "autoFocus", "placeholder"].forEach(function (prop) {
        return inputProps[prop] = _this2.props[prop];
      });
      return _react2.default.createElement("input", _extends({
        ref: function ref(_ref) {
          return _this2.input = _ref;
        },
        onChange: function onChange(e) {
          return _this2.callEventHandler(e, "onChange");
        },
        onFocus: function onFocus(e) {
          return _this2.callEventHandler(e, "onFocus");
        },
        onBlur: function onBlur(e) {
          return _this2.callEventHandler(e, "onBlur");
        },
        onKeyPress: function onKeyPress(e) {
          return _this2.callEventHandler(e, "onKeyPress");
        },
        onKeyUp: function onKeyUp(e) {
          return _this2.callEventHandler(e, "onKeyUp");
        },
        onKeyDown: function onKeyDown(e) {
          return _this2.callEventHandler(e, "onKeyDown");
        }
      }, inputProps));
    }
  }]);

  return ShassainNumeric;
}(_react2.default.Component);

exports.default = ShassainNumeric;


ShassainNumeric.propTypes = {
  type: _propTypes2.default.oneOf(["text", "tel", "hidden"]),
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  disabled: _propTypes2.default.bool,
  name: _propTypes2.default.string,
  tabIndex: _propTypes2.default.number,
  unselectable: _propTypes2.default.bool,
  size: _propTypes2.default.number,
  autoFocus: _propTypes2.default.bool,
  placeholder: _propTypes2.default.string,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  onKeyPress: _propTypes2.default.func,
  onKeyUp: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  allowDecimalPadding: _propTypes2.default.bool,
  caretPositionOnFocus: _propTypes2.default.number,
  createLocalList: _propTypes2.default.bool,
  currencySymbol: _propTypes2.default.string,
  currencySymbolPlacement: _propTypes2.default.string,
  decimalCharacter: _propTypes2.default.string,
  decimalCharacterAlternative: _propTypes2.default.string,
  decimalPlaces: _propTypes2.default.number,
  decimalPlacesRawValue: _propTypes2.default.number,
  decimalPlacesShownOnBlur: _propTypes2.default.number,
  decimalPlacesShownOnFocus: _propTypes2.default.number,
  defaultValueOverride: _propTypes2.default.string,
  digitalGroupSpacing: _propTypes2.default.string,
  digitGroupSeparator: _propTypes2.default.string,
  divisorWhenUnfocused: _propTypes2.default.number,
  emptyInputBehavior: _propTypes2.default.oneOf(["null", "focus", "press", "always", "zero"]),
  eventBubbles: _propTypes2.default.bool,
  eventIsCancelable: _propTypes2.default.bool,
  failOnUnknownOption: _propTypes2.default.bool,
  formatOnPageLoad: _propTypes2.default.bool,
  historySize: _propTypes2.default.number,
  isCancellable: _propTypes2.default.bool,
  leadingZero: _propTypes2.default.oneOf(["allow", "deny", "keep"]),
  maximumValue: _propTypes2.default.string,
  minimumValue: _propTypes2.default.string,
  modifyValueOnWheel: _propTypes2.default.bool,
  negativeBracketsTypeOnBlur: _propTypes2.default.string,
  negativePositiveSignPlacement: _propTypes2.default.oneOf(["l", "r", "p", "s"]),
  negativeSignCharacter: _propTypes2.default.string,
  noEventListeners: _propTypes2.default.bool,
  onInvalidPaste: _propTypes2.default.oneOf(["error", "ignore", "clamp", "truncate", "replace"]),
  outputFormat: _propTypes2.default.oneOf(["string", "number"]),
  overrideMinMaxLimits: _propTypes2.default.oneOf(["ceiling", "floor", "ignore"]),
  positiveSignCharacter: _propTypes2.default.string,
  rawValueDivisor: _propTypes2.default.number,
  readOnly: _propTypes2.default.bool,
  roundingMethod: _propTypes2.default.string,
  saveValueToSessionStorage: _propTypes2.default.bool,
  selectNumberOnly: _propTypes2.default.bool,
  selectOnFocus: _propTypes2.default.bool,
  serializeSpaces: _propTypes2.default.string,
  showOnlyNumbersOnFocus: _propTypes2.default.bool,
  showPositiveSign: _propTypes2.default.bool,
  showWarnings: _propTypes2.default.bool,
  styleRules: _propTypes2.default.object,
  suffixText: _propTypes2.default.string,
  symbolWhenUnfocused: _propTypes2.default.string,
  unformatOnHover: _propTypes2.default.bool,
  unformatOnSubmit: _propTypes2.default.bool,
  valuesToStrings: _propTypes2.default.object,
  wheelOn: _propTypes2.default.oneOf(["focus", "hover"]),
  wheelStep: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  preDefined: _propTypes2.default.object
};

ShassainNumeric.defaultProps = {
  type: "text",
  outputFormat: "number",
  preDefined: {},
  className: "asdf"
};

var predefinedOptions = exports.predefinedOptions = _autonumeric2.default.getPredefinedOptions();