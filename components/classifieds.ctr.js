(function(){

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog){

      classifiedsFactory.getClassifieds().then(function(classifieds){
       $scope.classifieds = classifieds.data;
      });

      var contact = {
        name: "Dami Osinaike",
        phone: "(079) 513 37439",
        email: "boldsdee@gmail.com"
      }

      $scope.openSidebar = function(){
        $mdSidenav('left').open();
      }
     
     $scope.closeSidebar = function(){
       $mdSidenav('left').close();
     }

     $scope.saveClassified = function(classified){
        if (classified){
          classified.contact = contact;
          $scope.classifieds.push(classified);
          $scope.classified = {}; 
          $scope.closeSidebar();
          showToast("Classified saved!");
        }
        
     }

     $scope.editClassified = function(classified){
      $scope.editing = true;
      $scope.openSidebar();
      $scope.classified = classified;
     }

    $scope.saveEdit = function(){
      $scope.editing = false;
      $scope.classified = {}; 
      $scope.closeSidebar();
      showToast("Edit saved!");
    }


    $scope.deleteClassified = function(event, classified){
      var confirm = $mdDialog.confirm()
      .title('Are you sure you want to delete + classified.title?')
      .ok('Yes')
      .cancel('No')
      .targetEvent(event);
    $mdDialog.show(confirm).then(function(){
      var index = $scope.classified.indexOf(classified)
      $scope.classifieds.splice(index, 1);
    }, function(){

    });

    }

    function showToast(message) {
      $mdToast.show(
        $mdToast.simple()
          .content(message)
          .position('top, right')
          .hideDelay(3000)
        );
    }

    });

})();