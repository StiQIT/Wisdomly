document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById("background-video");

    // Set the playback rate to make the video slower
    video.playbackRate = 0.8; // Adjust this value to slow down the video (0.5 is half speed)

    const pillars = document.querySelectorAll('.pillar');

    // Animate each pillar with a longer delay and slower transition
    pillars.forEach((pillar, index) => {
        setTimeout(() => {
            pillar.style.opacity = 1; // Make pillar visible
            pillar.style.transition = 'transform 0.5s ease, opacity 0.5s ease'; // Slow down transition
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
fetch('content.json')
  .then(response => response.json())
  .then(data => {
      console.log('JSON Data:', data); // Log the JSON data to see if it's fetched properly

      const pillars = data.pillars;
      const headings = data.headings;
      const subHeadings = data.subHeadings;
      const descriptions = data.descriptions;

      // Check if elements exist before updating
      console.log('Pillar 1 Heading:', document.getElementById('heading1'));

      // Populate the first pillar content
      if (document.getElementById('heading1')) {
          document.getElementById('heading1').innerText = headings[0];
          document.getElementById('subHeading1').innerText = subHeadings[0];
          document.getElementById('description1').innerText = descriptions[0];
      }

      // Populate the second pillar content
      if (document.getElementById('heading2')) {
          document.getElementById('heading2').innerText = headings[1];
          document.getElementById('subHeading2').innerText = subHeadings[1];
          document.getElementById('description2').innerText = descriptions[1];
      }

      // Populate the third pillar content
      if (document.getElementById('heading3')) {
          document.getElementById('heading3').innerText = headings[2];
          document.getElementById('subHeading3').innerText = subHeadings[2];
          document.getElementById('description3').innerText = descriptions[2];
      }
  })
  .catch(error => console.error('Error loading JSON file:', error));

