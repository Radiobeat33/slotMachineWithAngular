(function() {
    'use strict';

    angular
      .module('app')
      .controller('slotMachineReel2', slotMachineReel2);

      function slotMachineReel2 ($scope, $rootScope, $interval, sfx) {
        // Cycles through assets and updates DOM to simulate real Slot Machine
        $scope.slotImages = [ 'assets/reelPictures/coffeeFilter.jpg', 
                              'assets/reelPictures/teaStrainer.png',
                              'assets/reelPictures/espressoTamper.jpg' ];
        $scope.counter = 0;
        $scope.iteration;
        $scope.randomArrayValue;
        $scope.slotValue = $scope.slotImages[$scope.counter];

        // Handles the left reel's functionality and dispatches event to StartButton.js with results
        $scope.reelSpin = function(){
          if($scope.iteration === 3){
            $scope.slotValue = $scope.slotImages[$scope.randomArrayValue];
            $rootScope.$broadcast('result', $scope.randomArrayValue);
          } else if($scope.counter > 2){
            $scope.counter = 0;
            $scope.iteration++;
          } else {
            $scope.slotValue = $scope.slotImages[$scope.counter];
            $scope.counter++;
          };
        };

        // Event Listener, waits for event broadcasted from StartButton.js
        $scope.$on('startReel', function (event, args) {
          $scope.iteration = 0;
          $scope.randomArrayValue = Math.floor(Math.random() * $scope.slotImages.length);
          $interval($scope.reelSpin, 75, 13);
        });
      };
})();