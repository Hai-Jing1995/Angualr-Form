var app = angular.module("myApp",[]);
app.controller("SignUpController", function($scope){

	//用来存放表单的所有信息
	$scope.userdata = {};

	$scope.submitForm = function(){

		console.log( $scope.userdata );
		if ( $scope.SignUpForm.$invalid  ){

			alert( "请检查您的信息" );

		}else{

			alert( "提交成功");

		}

	};

});

app.directive("compare", function(){

	return {

		restrict:"AE",
		//orgTest为第一次输入的密码
		scope:{

			orgText:"=compare"

		},
		//请求另外一个controller
		require:"ngModel",
		link:function(sco, ele, attrs, con){

			//给$validator加一个方法compare()
			con.$validators.compare = function(v){

				return v == sco.orgText;	//是否等于之前输入的密码

			};

			//一旦有变化，执行回调函数
			sco.$watch("orgText", function(){

				con.$validate();

			});

		}

	}
	
});