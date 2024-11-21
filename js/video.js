var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	//console.log("auto play is off");
	//console.log("auto loop is off");

	document.querySelector("#play").addEventListener("click", function() {
		//console.log("Play Video");
		//document.querySelector (innerHTML)
		video.play();
	});
	//pause button

	document.querySelector("#slower").addEventListener("click", function() {
		//console.log("Slow Down Video");
		video.playbackRate *= 0.90;
		//console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		//console.log("Speed Up Video");
		video.playbackRate *= 0.90;
		//console.log("Speed is " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		//console.log("Skip Ahead");
		if (video.currentTime < video.duration - 15) {
			video.currentTime += 15;
		}
		else {
			video.currentTime = 0;
			video.play();
		}
	});

});

