document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById("background-video");
    video.playbackRate = 0.8;

    fetch('content.json')
      .then(response => {
          if (!response.ok) throw new Error('Network response was not ok ' + response.statusText);
          return response.json();
      })
      .then(data => {
          console.log('JSON Data:', data);

          // Populate Navbar and Logo
          if (data.navbarHeading) document.getElementById('navbar-heading').innerText = data.navbarHeading;
          if (data.logoUrl) document.getElementById('logo').src = data.logoUrl;

          // Populate Service 1 title and summary
          if (data.service1Title) document.getElementById('service-title').innerText = data.service1Title;
          if (data.service1Summary) document.getElementById('service-summary').innerText = data.service1Summary;
          // Set image source and display it
          const serviceImage = document.getElementById('service-image');
          if (data.service1Image) {
              serviceImage.src = data.service1Image;
              serviceImage.style.display = 'block'; // Make the image visible
          }
          // Footer content
          if (data.footer) {
              document.getElementById('about-us').innerText = data.footer.aboutUs;

              // Services List in Footer
              const servicesList = document.getElementById('services-list');
              data.footer.services.forEach(service => {
                  const li = document.createElement('li');
                  const link = document.createElement('a');
                  link.innerText = service.name;
                  link.href = service.url;
                  link.target = "_blank";
                  li.appendChild(link);
                  servicesList.appendChild(li);
              });

              // Contact Info
              document.getElementById('contact-email').href = `mailto:${data.footer.contact.email}`;
              document.getElementById('contact-email').innerText = data.footer.contact.email;
              document.getElementById('contact-phone').href = `tel:${data.footer.contact.phone}`;
              document.getElementById('contact-phone').innerText = data.footer.contact.phone;
              document.getElementById('contact-address').innerText = data.footer.contact.address;

              // Social Links
              document.getElementById('facebook-link').href = data.footer.socialLinks.facebook;
              document.getElementById('twitter-link').href = data.footer.socialLinks.twitter;
              document.getElementById('linkedin-link').href = data.footer.socialLinks.linkedin;
              document.getElementById('instagram-link').href = data.footer.socialLinks.instagram;
          }
      })
      .catch(error => console.error('Error loading JSON file:', error));
});
// Scroll to Top Button
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    // Ensure the button exists
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

    // Initial check when the page loads
    toggleScrollToTopBtn();

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
});
document.addEventListener('DOMContentLoaded', function () {
    // Existing code here...

    const navbar = document.querySelector('.navbar');
    const navbarToggleButton = document.getElementById('navbarToggleButton');
    let lastScrollY = window.scrollY;
    let navbarHidden = false;

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

    // Scroll event to detect scroll direction
    window.addEventListener('scroll', function () {
        if (window.scrollY > lastScrollY && !navbarHidden) {
            // Scrolling down
            hideNavbar();
        } else if (window.scrollY < lastScrollY && navbarHidden) {
            // Scrolling up
            showNavbar();
        }
        lastScrollY = window.scrollY;
    });

    // Click event for the toggle button to show the navbar
    navbarToggleButton.addEventListener('click', function () {
        showNavbar();
    });

    // Continue with any other existing code...
});
