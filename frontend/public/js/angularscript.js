var app = angular.module('app', ['LocalStorageModule','ngRoute','ngQueryBuilder',]);

app.config(function($routeProvider, $locationProvider){
	$routeProvider.
		when('/phonebook', {templateUrl: 'views/phone-book.html', controller: 'phonebookCtrl'}).
		when('/todo',{templateUrl: 'views/to-do.html',controller: 'todoCtrl'}).
		//otherwise({ redirectTo: '/' });
    otherwise({
      templateUrl: 'views/home.html',
      controller: 'createQueryCtrl'
    });
});

app.controller('createQueryCtrl', function($scope) {
	$scope.options = {
	    fields: [
	        { name: 'Firstname', value: 'firstname' },
	        { name: 'Lastname', value: 'lastname' },
	        { name: 'Birthdate', value: 'birthdate' },
	        { name: 'City', value: 'city' },
	        { name: 'Country', value: 'country' },
	    ],
	    // optional operators 
	    operators: [
	        { name: 'AND', value: '$and' },
	        { name: 'OR', value: '$or' },
	    ],
	    // ... and conditions 
	    conditions: [
	        { name: 'equal', value: '$eq' },
	        { name: 'is not equal', value: '$neq' },
	        { name: 'less than', value: '$lt' },
	        { name: 'less than or equal', value: '$lte' },
	        { name: 'greater than', value: '$gt' },
	        { name: 'greater than or equal', value: '$gte' },
	    ],
	};

	$scope.queryInputMethod = "builder";

});




app.controller('phonebookCtrl', function($scope, $http) {
	$http.get("phonebook/getAllContacts")
	.then(function(response) {
		$scope.contactData = response.data.contactList;
	});
});

app.controller('todoCtrl', function($scope,localStorageService) {
	init();
	$scope.removeItem=function(key) {
		localStorageService.remove(key);
		$scope.allToDos = readAllLocalStorage();
	};
	$scope.toggleComplete=function(key) {
		var val=localStorageService.get(key);
		localStorageService.set(key, !val);
	};

	$scope.submit=function(key) {
		localStorageService.set(key, false);
		$scope.allToDos = readAllLocalStorage();
		$scope.newToDo="";
	};

	function readAllLocalStorage() {
		var todos=Array();
		var keys=localStorageService.keys();
		for(i=0;i<keys.length;i++)
		{
			var val=localStorageService.get(keys[i]);
			todos.push({itemDescription:keys[i],completed:val});
		}
   		return todos;
  	};
  	function init()
  	{
  		$scope.allToDos = readAllLocalStorage();

  		console.log($scope.allToDos);
  	}

});
