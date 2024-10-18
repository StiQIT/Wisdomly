// Get the video element
const video = document.getElementById('background-video');

// Event listener for when the video ends
video.addEventListener('ended', function() {
    console.log("Video ended, restarting smoothly...");

    // Restart the video from the beginning
    video.currentTime = 0;
    video.play();  // Play the video again smoothly
});
