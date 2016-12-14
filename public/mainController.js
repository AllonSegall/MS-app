app.controller("mainCtrl", function($scope, $http, msFactory){

  $scope.addToDb = function(){
    $http.post("/journey",{data: $scope.userData}).then(function(dataFromServer){
      console.log(dataFromServer.data);
    })
  }
})
