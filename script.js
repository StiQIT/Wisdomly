document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById("background-video");

    // Set the playback rate to make the video slower
    video.playbackRate = 0.8;

    const pillars = document.querySelectorAll('.pillar');

    // Animate each pillar with a longer delay and slower transition
    pillars.forEach((pillar, index) => {
        setTimeout(() => {
            pillar.style.opacity = 1;
            pillar.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
            pillar.style.transform = 'translateY(0)';
        }, index * 1500 + 2000); // Adding a 2 second delay to allow the quote to type first
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

    // Function to create typing effect
    function typeEffect(element, text, speed) {
        let index = 0;
        function typeLetter() {
            if (index < text.length) {
                let char = text.charAt(index);
                element.innerHTML += char === ' ' ? '&nbsp;' : char; // Add a non-breaking space for spaces
                index++;
                setTimeout(typeLetter, speed); // Continue typing with delay
            }
        }
        typeLetter(); // Start typing
    }
    

    fetch('content.json')
      .then(response => response.json())
      .then(data => {
          console.log('JSON Data:', data); // Log the JSON data to see if it's fetched properly

          const navbarHeading = data.navbarHeading;
          const logoUrl = data.logoUrl;
          const mainHeading = data.mainHeading;
          const mainQuote = data.mainQuote;
          const headings = data.headings;
          const subHeadings = data.subHeadings;
          const descriptions = data.descriptions;

          // Set the logo and navbar heading
          if (document.getElementById('logo')) {
            document.getElementById('logo').src = logoUrl;
          }
          if (document.getElementById('navbar-heading')) {
            document.getElementById('navbar-heading').innerText = navbarHeading;
          }

          // Create typing effect for the main heading and quote
          const headingElement = document.getElementById('main-heading');
          const quoteElement = document.getElementById('main-quote');

          if (headingElement && mainHeading) {
              typeEffect(headingElement, mainHeading, 30); // Adjust speed of typing here (100ms)
          }

          if (quoteElement && mainQuote) {
              setTimeout(() => {
                  typeEffect(quoteElement, mainQuote, 30); // Add delay for the quote typing
              }, 2000); // Delay before starting to type the quote (2 seconds)
          }

          // Populate the first pillar content
          document.getElementById('heading1').innerText = headings[0];
          document.getElementById('subHeading1').innerText = subHeadings[0];
          document.getElementById('description1').innerText = descriptions[0];

          // Populate the second pillar content
          document.getElementById('heading2').innerText = headings[1];
          document.getElementById('subHeading2').innerText = subHeadings[1];
          document.getElementById('description2').innerText = descriptions[1];

          // Populate the third pillar content
          document.getElementById('heading3').innerText = headings[2];
          document.getElementById('subHeading3').innerText = subHeadings[2];
          document.getElementById('description3').innerText = descriptions[2];
      })
      .catch(error => console.error('Error loading JSON file:', error));
});
