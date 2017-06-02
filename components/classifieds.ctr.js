(function(){

  "use strict";

  angular
    .module("ngClassifieds")
    .controller("classifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav){

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
        }
        
     }


    });

})();