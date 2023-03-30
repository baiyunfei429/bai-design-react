"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _react = require("@testing-library/react");
var _react2 = _interopRequireDefault(require("react"));
var _alert = _interopRequireDefault(require("../../alert"));
describe('<Alert />', function () {
  test('should render default', function () {
    var _render = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_alert.default, null, "default")),
      container = _render.container;
    expect(container).toMatchSnapshot();
  });
  test('should render alert with type', function () {
    var kinds = ['info', 'warning', 'positive', 'negative'];
    var _render2 = (0, _react.render)( /*#__PURE__*/_react2.default.createElement(_react2.default.Fragment, null, kinds.map(function (k) {
        return /*#__PURE__*/_react2.default.createElement(_alert.default, {
          kind: k,
          key: k
        }, k);
      }))),
      getByText = _render2.getByText;
    kinds.forEach(function (k) {
      expect(getByText(k)).toMatchSnapshot();
    });
  });
});