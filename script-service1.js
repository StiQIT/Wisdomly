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
