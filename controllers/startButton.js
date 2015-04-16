(function() {
    'use strict';

    angular
      .module('app')
      .controller('startButton', startButton);

      function startButton ($scope, $rootScope, sfx) {
        $scope.play = 'Play';
        $scope.resultArray = [];
        $scope.sfx = sfx;
        
        // This starts up the game via ngClick on the client side. Dispatches event to listeners in slotMachineReel 1-3
        $scope.reelBegin = function () {
          $scope.resultArray = [];
          $scope.sfx['Coin'].play();
          $rootScope.$broadcast('startReel');
        }

        // Contains alerts that notify you what you've won (if anything)
        $scope.rewardObj = {
          "0": function () { 
                swal({ 
                  title: "Good job!", 
                  text: "Enjoy your Coffee!", 
                  imageUrl: "assets/reelPictures/coffee.png" 
                });
              },
          "1": function () { 
                swal({ 
                  title: "Good job!", 
                  text: "Enjoy your Tea!", 
                  imageUrl: "assets/reelPictures/tea.png" 
                });
              },
          "2": function () { 
                swal({ 
                  title: "Good job!", 
                  text: "Enjoy your Espresso!", 
                  imageUrl: "assets/reelPictures/espresso.png" 
                });
              },
          "3": function () { swal("Aww..", "Try Again!", "error") },
        }

        // Event listener that receives arguments from slotMachineReel 1-3 and determines if you've won
        $scope.$on('result', function (event, args) {
          $scope.resultArray.push(JSON.stringify(args));
          if($scope.resultArray.length === 3) {
            var results = $scope.resultArray.reduce(function(a, b){ return (a === b) ? a: "3"; });
            if(results !== "3"){
              $scope.sfx['Win'].play();
            }
            $scope.rewardObj[results]();
          }
        })
      }
})();