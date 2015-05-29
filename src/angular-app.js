/* global angular */

angular.module('rectangular', [])
.controller('SingleCtrl', 
	[
		'$scope', 
		function($scope){
			
		}
	]
).controller('TableCtrl', 
	[
		'$scope', 
		function ($scope){
			$scope.renderAngular = true;
			$scope.framework = 'ReactJS';
			$scope.data = [];

			$scope.switchRendering = function() {
				$scope.renderAngular = !$scope.renderAngular;
				$scope.framework = $scope.renderAngular ? 'ReactJS' : 'AngularJS';
				$scope.refresh();
			};
			$scope.refresh = function(){
				for(var i = 0; i < 1500; ++i) {
					$scope.data[i] = {};
					for(var j = 0; j < 5; ++j) {
						$scope.data[i][j] = Math.random();
					}
					$scope.data[i].key = 'row_' + i;
				}
			};

			$scope.refresh();	
		}
	]
)
.directive('simpleRender', 
	[
		function() {
			return {
				scope: {
					framework: '='
				},
				link: function simpleRenderLink (scope, elem) {
					scope.$watch('framework', function (newValue, oldValue) {
						React.render(React.createFactory(simpleRender)({ framework: newValue }), elem[0]);
					});
				}
			};
		}
	]
)
.directive('ngRepeatTable', 
	[
		function(){
			return {
				scope: {
					data: '='
				},
				restrict: 'E',
				template: 	'<table>' +
	          				  	'<tr ng-repeat="line in data">' +
	            					'<td>{{line[0]}}</td>' +
	            					'<td>{{line[1]}}</td>' +
	            					'<td>{{line[2]}}</td>' +
	        						'<td>{{line[3]}}</td>' +
	            					'<td>{{line[4]}}</td>' +
	          					'</tr>' +
        					'</table>'
			};
		}
	]
)
.directive('reactTableRender', 
	[
		function(){
			return {
				scope: {
					data: '=',
				},
				restrict: 'E',
				link: function(scope, elem) {
					scope.$watchCollection('data', function (newValue, oldValue) {
						React.render(React.createFactory(tableRender)({ data: newValue }), elem[0]);
					});
				}
			};
		}
	]
);