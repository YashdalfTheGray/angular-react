/* global angular */

angular.module('rectangular', [])
.controller('MainCtrl', 
	[
		'$scope', 
		function($scope){
			
		}
	]
)
.directive('reactDirective', function() {
	return {
		scope: {
			framework: '='
		},
		link: function reactDirectiveLink (scope, elem, attr) {
			scope.$watch('framework', function (newValue, oldValue) {
				React.render(React.createFactory(aReactComp)({ framework: newValue }), elem[0]);
			});
		}
	};
});