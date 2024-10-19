document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById("background-video");

    // Set the playback rate to make the video slower
    video.playbackRate = 0.8; // Adjust this value to slow down the video (0.5 is half speed)

    const pillars = document.querySelectorAll('.pillar');

    // Animate each pillar with a longer delay and slower transition
    pillars.forEach((pillar, index) => {
        setTimeout(() => {
            pillar.style.opacity = 1; // Make pillar visible
            pillar.style.transition = 'transform 1.2s ease, opacity 1.2s ease'; // Slow down transition
            pillar.style.transform = 'translateY(0)'; // Move pillar into position
        }, index * 1500); // 1.5 second delay between each pillar
    });

    // Add hover effect using JavaScript
    pillars.forEach(pillar => {
        pillar.addEventListener('mouseenter', () => {
            pillar.style.transform = 'scale(1.05)'; // Zoom in on hover
            pillar.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)'; // Elevate on hover
        });

        pillar.addEventListener('mouseleave', () => {
            pillar.style.transform = 'translateY(0)'; // Reset position and remove zoom
            pillar.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'; // Reset shadow
        });
    });
});
