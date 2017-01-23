var studentApp = angular.module('studentApp',[]);
studentApp.controller("studentController", function($scope,$http){
$scope.originalstudent = {
	firstName : 'Sam'
	lastname : 'Reddy'
	DOB : ('07/20/1991'),
	gender : 'female'
	training type : 'online',
	maths : false,
	physics : true,
	chemistry : true
};
$scope.student = angular.copy($scope.originalstudent);
$scope.submitStudentForm = function(){
	var onSucess = function(date,status,headers,config){
		alert('student saved sucessfully.');

	};
	var onError = function(data,status,headers,config){
		alert('Error Occured.');

	};

 }
}
);

