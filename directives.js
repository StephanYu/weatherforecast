//Directive
weatherApp.directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherreport.html',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToCelsius: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
});