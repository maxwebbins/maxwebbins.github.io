 document.addEventListener("DOMContentLoaded", function(event) {

 	createAudio('#player1', 'songs/starless.mp3');
 	createAudio('#player2', 'songs/cold.mp3');
 	createAudio('#player3', 'songs/hoverover.mp3');
 	createAudio('#player4', 'songs/status.mp3');
 	createAudio('#player5', 'songs/infinity.mp3');
 	createAudio('#player6', 'songs/wintersadness.mp3');
 	createAudio('#player7', 'songs/zindex.mp3');
 	createAudio('#player8', 'songs/otherface.mp3');
 	createAudio('#player9', 'songs/stealapple.mp3');
 	createAudio('#player10', 'songs/emotive.mp3');
 	createAudio('#player11', 'songs/livetowin.mp3');
 	createAudio('#player12', 'songs/sanitarium.mp3');
 	createAudio('#player13', 'songs/wolves.mp3');


 	function createAudio(player, path) {

	 	var audio = new Audio(path);

	 	var seekBar = document.querySelector(player + ' .seek-bar');
	 	var playButton = document.querySelector(player + ' button.play');
	 	var fillBar = document.querySelector(player + ' .fill');
	 	var durationInfo =  document.querySelector(player + ' .duration');

	 	

	 	playButton.addEventListener('click', function() {
	 		audio.paused ? audio.play() : audio.pause();
	 	});

	 	audio.addEventListener('play', function() {
	 		playButton.classList.add('playing');
	 	});

	 	audio.addEventListener('pause', function() {
	 		playButton.classList.remove('playing');
	 	});

	 	audio.addEventListener('timeupdate', function(){
	 		var p = audio.currentTime / audio.duration;
	 		
	 		fillBar.style.width = p * 100 + '%';
	 	});

	 	audio.addEventListener('ended', function() {
	 		fillBar.style.width = 0;
	 	});

	 	seekBar.addEventListener('click', function(ev) {


	 		var p = ( ev.clientX - seekBar.offsetLeft ) / seekBar.clientWidth;

	 		fillBar.style.width = p * 100 + '%';

	 		audio.currentTime = p * audio.duration;
	 	});

 		audio.addEventListener('loadedmetadata', function(){
 			var all = Math.round(audio.duration - audio.currentTime);
	 		var m = Math.floor(all / 60);
	 		var s = all - 60 * m;
	 		if ( s < 10 ) { 
	 			durationInfo.innerHTML = '0'+ m + ' : 0' + s; 
	 		} else {
	 			durationInfo.innerHTML = '0'+ m + ' : ' + s;
	 		}
 		});


	 }


});