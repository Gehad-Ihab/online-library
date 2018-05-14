var app=angular.module("myApp",[]) ;

app.controller("myctr",function ($scope,$http)

{
$http.get("http://62.210.27.116:8080/LMS/index.php/Api/register") 
.then(function(data){
	
});




});