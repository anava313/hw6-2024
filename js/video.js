var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	console.log("auto play is off");
	console.log("loop is off");

//play button
	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		video.play();
		document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	});

//pause button
	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		video.pause();
	});
//slow down button
	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down Video");
		video.playbackRate *= 0.90;
		console.log("Speed is " + video.playbackRate);
	});
//speed up button
	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed Up Video");
		video.playbackRate *= 1.10;
		console.log("Speed is " + video.playbackRate);
	});
//skip ahead button
	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip Ahead 10 seconds");
		video.currentTime += 10;
		if (video.currentTime >= video.duration) {
			video.currentTime = 0; 
		}
		console.log("Current Time is: " + video.currentTime + " seconds");
	});
//mute button
	document.querySelector("#mute").addEventListener("click", function() {
		console.log("Mute Video");
		if (video.muted == false) {
			video.muted = true;
			document.querySelector("#mute").innerHTML = "Unmute";
		}
		else {
			video.muted = false;
			document.querySelector("#mute").innerHTML = "Mute";
		}
	});
//slider
	document.querySelector("#slider").addEventListener("change", function() {
		console.log("Changing volume");
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = this.value + "%";
	});
//old school button
	document.querySelector("#vintage").addEventListener("click", function() {
		console.log("Changing CSS");
		video.classList.add("oldSchool");
	});
//original button
	document.querySelector("#orig").addEventListener("click", function() {
		console.log("Changing CSS");
		video.classList.remove("oldSchool");
	});


});

