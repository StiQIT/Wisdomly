// // Get the video element
// const video = document.getElementById('background-video');

// // Event listener for when the video ends
// video.addEventListener('ended', function() {
//     console.log("Video ended, restarting smoothly...");

//     // Restart the video from the beginning
//     video.currentTime = 0;
//     video.play();  // Play the video again smoothly
// });


document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("background-video");

    // Set the playback rate to make the video slower
    video.playbackRate = 0.8; // Adjust this value to slow down the video (0.5 is half speed)
});
