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
        }, index * 1500 + 1000); // Adding a 2 second delay to allow the quote to type first
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
          const areasGrid = document.getElementById('areasGrid');
          const navbarHeading = data.navbarHeading;
          const logoUrl = data.logoUrl;
          const mainHeading = data.mainHeading;
          const mainQuote = data.mainQuote;
          const headings = data.headings;
          const subHeadings = data.subHeadings;
          const descriptions = data.descriptions;
          const footerData = data.footer;
          areasGrid.innerHTML = '';
          const isMobile = window.innerWidth <= 768; // Check if mobile
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

          // Footer: About Us
          document.getElementById('about-us').innerText = footerData.aboutUs;

          // Footer: Services List
          const servicesList = document.getElementById('services-list');
          footerData.services.forEach(service => {
              const li = document.createElement('li');
              li.innerText = service.name;
              servicesList.appendChild(li);
          });

          // Footer: Contact Info
          document.getElementById('contact-email').innerText = `Email: ${footerData.contact.email}`;
          document.getElementById('contact-phone').innerText = `Phone: ${footerData.contact.phone}`;
          document.getElementById('contact-address').innerText = `Address: ${footerData.contact.address}`;

          // Footer: Social Links
          document.getElementById('facebook-link').href = footerData.socialLinks.facebook;
          document.getElementById('twitter-link').href = footerData.socialLinks.twitter;
          document.getElementById('linkedin-link').href = footerData.socialLinks.linkedin;
          document.getElementById('instagram-link').href = footerData.socialLinks.instagram;


          data.areas.forEach((area, index) => {
            // First cell for each area with text
            const textCell = document.createElement('div');
            textCell.classList.add('area-cell', 'area-content');
            textCell.innerHTML = `<h3>${area.title}</h3><p>${area.description}</p>`;

            // Second cell for each area with image
            const imageCell = document.createElement('div');
            imageCell.classList.add('area-cell');
            imageCell.innerHTML = `<img src="${area.image}" alt="${area.title} Image" class="area-image">`;

            // Alternate placement based on index
            if (index % 2 === 0) {
                // Row with text first, then image
                areasGrid.appendChild(textCell);
                areasGrid.appendChild(imageCell);
            } else {
                // Row with image first, then text
                areasGrid.appendChild(imageCell);
                areasGrid.appendChild(textCell);
            }
        });
      })
      .catch(error => console.error('Error loading JSON file:', error));
});

// Scroll to Top Button
// document.addEventListener("DOMContentLoaded", function() {
//     const scrollToTopBtn = document.getElementById("scrollToTopBtn");

//     // Ensure the button exists
//     if (!scrollToTopBtn) {
//         console.error("Scroll to Top button NOT found in DOM");
//         return;
//     }

//     // Function to toggle the visibility of the button based on scroll position
//     function toggleScrollToTopBtn() {
//         if (window.scrollY > 100) { // Show button after scrolling 100px down
//             scrollToTopBtn.style.display = "block";
//         } else {
//             scrollToTopBtn.style.display = "none"; // Hide button when at the top
//         }
//     }

//     // Initial check when the page loads
//     toggleScrollToTopBtn();

//     // Check scroll position when the user scrolls
//     window.addEventListener("scroll", function() {
//         toggleScrollToTopBtn();
//     });

//     // Scroll to the top of the page when the button is clicked
//     scrollToTopBtn.addEventListener("click", function() {
//         console.log("Button clicked! Scrolling to top.");
//         window.scrollTo({
//             top: 0,
//             behavior: "smooth"
//         });
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (!scrollToTopBtn) {
        console.error("Scroll to Top button NOT found in DOM");
        return;
    }

    // Function to toggle the visibility of the button based on scroll position
    function toggleScrollToTopBtn() {
        if (window.scrollY > 100) { // Show button after scrolling 100px down
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none"; // Hide button when at the top
        }
    }


        // Check scroll position when the user scrolls
    window.addEventListener("scroll", function() {
            toggleScrollToTopBtn();
    });
    
        // Scroll to the top of the page when the button is clicked
    scrollToTopBtn.addEventListener("click", function() {
        console.log("Button clicked! Scrolling to top.");
        window.scrollTo({
                top: 0,
                behavior: "smooth"
        });
    });
    // Check if we are on desktop
    function isDesktop() {
        return window.innerWidth >= 720; // Adjust the breakpoint as needed
    }

    const navbar = document.querySelector('.navbar');
    const navbarToggleButton = document.getElementById('navbarToggleButton');
    let lastScrollY = window.scrollY;
    let navbarHidden = true; // Start hidden on mobile

    function disableScroll() {
        document.body.classList.add('no-scroll');
    }

    function enableScroll() {
        document.body.classList.remove('no-scroll');
    }

    // Function to show the navbar
    function showNavbar() {
        navbar.style.transform = 'translateY(0)';
        navbarToggleButton.style.display = 'none'; // Hide button when navbar is shown
        navbarHidden = false;
    }

    // Function to hide the navbar
    function hideNavbar() {
        navbar.style.transform = 'translateY(-100%)';
        navbarToggleButton.style.display = 'block'; // Show button when navbar is hidden
        navbarHidden = true;
        
    }

    // Function to hide the navbar on mobile (slide to the left)
    function hideMobileNavbar() {
        navbar.style.transform = 'translateX(-200vw)';
        navbarToggleButton.style.display = 'block'; // Show button when navbar is hidden
        navbarHidden = true;
        scrollToTopBtn.style.display = "block";
        enableScroll();
    }

    // Function to show the navbar on mobile (slide in from the left)
    function showMobileNavbar() {
        navbar.style.transform = 'translateX(0)'; // Slide in from the left
        navbarHidden = false;
        disableScroll();
        scrollToTopBtn.style.display = "none";
        }

    // Scroll event to detect scroll direction
    window.addEventListener('scroll', function () {
        if (isDesktop()) {
            if (window.scrollY > lastScrollY && !navbarHidden) {
                // Scrolling down
                hideNavbar();
            } else if (window.scrollY < lastScrollY && navbarHidden) {
                // Scrolling up
                showNavbar();
            }
            lastScrollY = window.scrollY;
        }
    });

    // Click event for the toggle button to show/hide the navbar on mobile
    navbarToggleButton.addEventListener('click', function () {
        if (isDesktop()) {
            showNavbar();
        } else {
            // Toggle the navbar visibility on mobile
            if (navbarHidden === true) {
                showMobileNavbar();
            } else {
                hideMobileNavbar();
            }
        }
    });

    // Resize event to handle changes in window size
    window.addEventListener('resize', function () {
        if (isDesktop()) {
            // On desktop, ensure the navbar is visible and button is hidden
            showNavbar();
        } else {
            // For mobile, hide the navbar and show the toggle button by default
            hideMobileNavbar();
        }
    });

    // Initial check on load
    if (isDesktop()) {
                // Initial check when the page loads
        toggleScrollToTopBtn();
        showNavbar(); // Show navbar on desktop
    } else {
        hideMobileNavbar(); // Hide navbar and show button on mobile
    }
});
