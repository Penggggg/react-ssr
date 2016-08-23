webpackJsonp([2],{

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _class3;

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(101);

	var _mobxReact = __webpack_require__(99);

	var _todoStore = __webpack_require__(337);

	var _todoStore2 = _interopRequireDefault(_todoStore);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AComponent = (0, _mobxReact.observer)(_class = function (_PureComponent) {
	    _inherits(AComponent, _PureComponent);

	    function AComponent() {
	        _classCallCheck(this, AComponent);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(AComponent).call(this));
	    }

	    _createClass(AComponent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            // important
	            this.todoStore =  true ? _todoStore2.default.init() : this.context.router.todoStore;
	            if (true) {
	                this.todoStore.todos = window.initTodos;
	            }
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            if (true) {
	                console.log('did');
	            }
	        }
	    }, {
	        key: 'handleAdd',
	        value: function handleAdd() {
	            var _input = this.refs._todo;
	            if (_input.value) {
	                this.todoStore.addTodo(_input.value);
	                _input.value = null;
	            }
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this2 = this;

	            return _react2.default.createElement(
	                'div',
	                null,
	                'TODO  ',
	                _react2.default.createElement('br', null),
	                _react2.default.createElement('input', { type: 'text', ref: '_todo' }),
	                _react2.default.createElement(
	                    'button',
	                    { onClick: function onClick() {
	                            _this2.handleAdd();
	                        } },
	                    '+'
	                ),
	                _react2.default.createElement('br', null),
	                'total Count: ' + this.todoStore.todoCount,
	                _react2.default.createElement('br', null),
	                'active Count: ' + this.todoStore.activeCount,
	                ' ',
	                _react2.default.createElement('br', null),
	                'needTodo Count: ' + this.todoStore.needTodoCount,
	                ' ',
	                _react2.default.createElement('br', null),
	                this.todoStore.todos.map(function (todo, index) {
	                    return _react2.default.createElement(TodoItem, { todo: todo, key: index });
	                }),
	                _react2.default.createElement('br', null)
	            );
	        }
	    }]);

	    return AComponent;
	}(_react.PureComponent)) || _class;

	exports.default = AComponent;


	AComponent.contextTypes = {
	    router: _react2.default.PropTypes.object
	};

	var TodoItem = (0, _mobxReact.observer)(_class3 = function (_PureComponent2) {
	    _inherits(TodoItem, _PureComponent2);

	    function TodoItem() {
	        _classCallCheck(this, TodoItem);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TodoItem).call(this));
	    }

	    _createClass(TodoItem, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            var todo = this.props.todo;

	            todo.completed = !todo.completed;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this4 = this;

	            var todo = this.props.todo;

	            return _react2.default.createElement(
	                'li',
	                { onClick: function onClick() {
	                        _this4.handleClick();
	                    } },
	                todo.name + '   completed:' + todo.completed
	            );
	        }
	    }]);

	    return TodoItem;
	}(_react.PureComponent)) || _class3;

/***/ }

});