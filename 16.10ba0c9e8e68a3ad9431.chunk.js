webpackJsonp([16],{

/***/ 831:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CodeSnippet = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CodeSnippet = exports.CodeSnippet = (_dec = (0, _core.Component)({
	    inputs: ['code'],
	    selector: 'code-snippet',
	    template: '<pre><code [innerHtml]="highlight"></code></pre>'
	}), _dec(_class = function () {
	    function CodeSnippet() {
	        _classCallCheck(this, CodeSnippet);
	    }
	
	    _createClass(CodeSnippet, [{
	        key: 'ngOnInit',
	        value: function ngOnInit() {
	            this.highlight = hljs.highlightAuto(this.code).value;
	        }
	    }]);
	
	    return CodeSnippet;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztJQU9hLFcsV0FBQSxXLFdBTFoscUJBQVU7QUFDUCxZQUFRLENBQUMsTUFBRCxDQUREO0FBRVAsY0FBVSxjQUZIO0FBR1AsY0FBVTtBQUhILENBQVYsQzs7Ozs7OzttQ0FNYztBQUNQLGlCQUFLLFNBQUwsR0FBaUIsS0FBSyxhQUFMLENBQW1CLEtBQUssSUFBeEIsRUFBOEIsS0FBL0M7QUFDSCIsImZpbGUiOiJDb2RlU25pcHBldC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgaW5wdXRzOiBbJ2NvZGUnXSxcbiAgICBzZWxlY3RvcjogJ2NvZGUtc25pcHBldCcsXG4gICAgdGVtcGxhdGU6ICc8cHJlPjxjb2RlIFtpbm5lckh0bWxdPVwiaGlnaGxpZ2h0XCI+PC9jb2RlPjwvcHJlPidcbn0pXG5leHBvcnQgY2xhc3MgQ29kZVNuaXBwZXQge1xuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodCA9IGhsanMuaGlnaGxpZ2h0QXV0byh0aGlzLmNvZGUpLnZhbHVlO1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 411:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SwitchDemo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _dec, _class;
	
	var _core = __webpack_require__(1);
	
	var _novoElements = __webpack_require__(171);
	
	var _CodeSnippet = __webpack_require__(831);
	
	var _SwitchDemo = __webpack_require__(886);
	
	var _SwitchDemo2 = _interopRequireDefault(_SwitchDemo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var template = '\n<div class="container">\n    <h1>Switches & Toggles <small><a target="_blank" href="https://github.com/bullhorn/novo-elements/tree/master/src/elements/switch">(source)</a></small></h1>\n    <p>Loading animations are used to help indicate to the user that some sort of progress is taking place. These are especially helpful for intensive operations that might take extra time.</p>\n\n    <h2>Types</h2>\n\n    <h5>Tiles</h5>\n    <p>Similar to radio buttons, tiles are used to select a single item. Tiles have a higher visibility than radio buttons, and are used more frequently in data visualizations. Tiles stretch horizontally, so the list they pull from must be small.</p>\n\n    <h5>Switches</h5>\n    <p>Switches are a binary toggle that allow the user to select one of two options. They are most frequently used for an on-off model.</p>\n    <div class="example switch-demo">' + _SwitchDemo2.default + '</div>\n    <code-snippet [code]="SwitchDemoTpl"></code-snippet>\n</div>\n';
	
	var SwitchDemo = exports.SwitchDemo = (_dec = (0, _core.Component)({
	    selector: 'switch-demo',
	    template: template,
	    directives: [_novoElements.NOVO_SWITCH_ELEMENTS, _CodeSnippet.CodeSnippet]
	}), _dec(_class = function () {
	    function SwitchDemo() {
	        _classCallCheck(this, SwitchDemo);
	
	        this.SwitchDemoTpl = _SwitchDemo2.default;
	        this.toggleCount = 0;
	        this.checked = true;
	        this.toggledCheck = true;
	    }
	
	    _createClass(SwitchDemo, [{
	        key: 'increment',
	        value: function increment() {
	            this.toggleCount++;
	        }
	    }, {
	        key: 'toggled',
	        value: function toggled(event) {
	            this.toggledCheck = event;
	        }
	    }]);
	
	    return SwitchDemo;
	}()) || _class);
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8vcGFnZXMvc3dpdGNoL1N3aXRjaERlbW8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNLHMrQkFBTjs7SUFzQmEsVSxXQUFBLFUsV0FMWixxQkFBVTtBQUNQLGNBQVUsYUFESDtBQUVQLGNBQVUsUUFGSDtBQUdQLGdCQUFZO0FBSEwsQ0FBVixDO0FBTUcsMEJBQWM7QUFBQTs7QUFDVixhQUFLLGFBQUw7QUFDQSxhQUFLLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxhQUFLLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBSyxZQUFMLEdBQW9CLElBQXBCO0FBQ0g7Ozs7b0NBRVc7QUFDUixpQkFBSyxXQUFMO0FBQ0g7OztnQ0FFTyxLLEVBQU87QUFDWCxpQkFBSyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0giLCJmaWxlIjoiU3dpdGNoRGVtby5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvamdvZGkvYmgvbm92by9hcHBzL25vdm8tZWxlbWVudHMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5PVk9fU1dJVENIX0VMRU1FTlRTIH0gZnJvbSAnLi8uLi8uLi8uLi9zcmMvbm92by1lbGVtZW50cyc7XG5cbmltcG9ydCB7IENvZGVTbmlwcGV0IH0gZnJvbSAnLi4vLi4vZWxlbWVudHMvY29kZXNuaXBwZXQvQ29kZVNuaXBwZXQnO1xuaW1wb3J0IFN3aXRjaERlbW9UcGwgZnJvbSAnLi90ZW1wbGF0ZXMvU3dpdGNoRGVtby5odG1sJztcblxuY29uc3QgdGVtcGxhdGUgPSBgXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPGgxPlN3aXRjaGVzICYgVG9nZ2xlcyA8c21hbGw+PGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9idWxsaG9ybi9ub3ZvLWVsZW1lbnRzL3RyZWUvbWFzdGVyL3NyYy9lbGVtZW50cy9zd2l0Y2hcIj4oc291cmNlKTwvYT48L3NtYWxsPjwvaDE+XG4gICAgPHA+TG9hZGluZyBhbmltYXRpb25zIGFyZSB1c2VkIHRvIGhlbHAgaW5kaWNhdGUgdG8gdGhlIHVzZXIgdGhhdCBzb21lIHNvcnQgb2YgcHJvZ3Jlc3MgaXMgdGFraW5nIHBsYWNlLiBUaGVzZSBhcmUgZXNwZWNpYWxseSBoZWxwZnVsIGZvciBpbnRlbnNpdmUgb3BlcmF0aW9ucyB0aGF0IG1pZ2h0IHRha2UgZXh0cmEgdGltZS48L3A+XG5cbiAgICA8aDI+VHlwZXM8L2gyPlxuXG4gICAgPGg1PlRpbGVzPC9oNT5cbiAgICA8cD5TaW1pbGFyIHRvIHJhZGlvIGJ1dHRvbnMsIHRpbGVzIGFyZSB1c2VkIHRvIHNlbGVjdCBhIHNpbmdsZSBpdGVtLiBUaWxlcyBoYXZlIGEgaGlnaGVyIHZpc2liaWxpdHkgdGhhbiByYWRpbyBidXR0b25zLCBhbmQgYXJlIHVzZWQgbW9yZSBmcmVxdWVudGx5IGluIGRhdGEgdmlzdWFsaXphdGlvbnMuIFRpbGVzIHN0cmV0Y2ggaG9yaXpvbnRhbGx5LCBzbyB0aGUgbGlzdCB0aGV5IHB1bGwgZnJvbSBtdXN0IGJlIHNtYWxsLjwvcD5cblxuICAgIDxoNT5Td2l0Y2hlczwvaDU+XG4gICAgPHA+U3dpdGNoZXMgYXJlIGEgYmluYXJ5IHRvZ2dsZSB0aGF0IGFsbG93IHRoZSB1c2VyIHRvIHNlbGVjdCBvbmUgb2YgdHdvIG9wdGlvbnMuIFRoZXkgYXJlIG1vc3QgZnJlcXVlbnRseSB1c2VkIGZvciBhbiBvbi1vZmYgbW9kZWwuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlIHN3aXRjaC1kZW1vXCI+JHtTd2l0Y2hEZW1vVHBsfTwvZGl2PlxuICAgIDxjb2RlLXNuaXBwZXQgW2NvZGVdPVwiU3dpdGNoRGVtb1RwbFwiPjwvY29kZS1zbmlwcGV0PlxuPC9kaXY+XG5gO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3N3aXRjaC1kZW1vJyxcbiAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgZGlyZWN0aXZlczogW05PVk9fU1dJVENIX0VMRU1FTlRTLCBDb2RlU25pcHBldF1cbn0pXG5leHBvcnQgY2xhc3MgU3dpdGNoRGVtbyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuU3dpdGNoRGVtb1RwbCA9IFN3aXRjaERlbW9UcGw7XG4gICAgICAgIHRoaXMudG9nZ2xlQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZWRDaGVjayA9IHRydWU7XG4gICAgfVxuXG4gICAgaW5jcmVtZW50KCkge1xuICAgICAgICB0aGlzLnRvZ2dsZUNvdW50Kys7XG4gICAgfVxuXG4gICAgdG9nZ2xlZChldmVudCkge1xuICAgICAgICB0aGlzLnRvZ2dsZWRDaGVjayA9IGV2ZW50O1xuICAgIH1cbn1cbiJdfQ==

/***/ },

/***/ 886:
/***/ function(module, exports) {

	module.exports = "<label>Count\n    <span>{{toggleCount}}</span>\n</label>\n<label>Toggled\n    <span>{{toggledCheck}}</span>\n</label>\n<novo-switch [checked]=\"checked\" (onChange)=\"increment(); toggled($event)\"\n    data-automation-id=\"switchTest\"></novo-switch>\n<novo-switch class=\"grapefruit\"></novo-switch>\n<novo-switch disabled></novo-switch>\n"

/***/ }

});
//# sourceMappingURL=16.10ba0c9e8e68a3ad9431.bundle.map