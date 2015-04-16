(function() {
    'use strict';

    angular
      .module('app')
      .factory('sfx', function (ngAudio) {
        // This service is designed to give all controllers access to all music/sound effects
        return {
            "Casino": ngAudio.load("assets/reelSounds/casinomusic.mp3"),
            "Coin": ngAudio.load("assets/reelSounds/coin.wav"),
            "Stop": ngAudio.load("assets/reelSounds/stop.wav"),
            "Win": ngAudio.load("assets/reelSounds/win.wav")
        };
      });
})();
