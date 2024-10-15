// script.js

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // Add a simple animation to project items
    const projectItems = document.querySelectorAll('#projects li');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', addProjectAnimation);
        item.addEventListener('mouseleave', removeProjectAnimation);
    });
});

// Smooth scrolling function
function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you would typically send this data to a server
    // For now, we'll just log it to the console
    console.log('Form submitted:', { name, email, message });

    // Show a thank you message
    alert('Thank you for your message! I\'ll get back to you soon.');
    this.reset();
}

// Add animation class to project item
function addProjectAnimation() {
    this.classList.add('project-hover');
}

// Remove animation class from project item
function removeProjectAnimation() {
    this.classList.remove('project-hover');
}

// Optional: Add a typing effect to the main heading
const mainHeading = document.querySelector('#home h1');
if (mainHeading) {
    const text = mainHeading.textContent;
    mainHeading.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            mainHeading.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();
}

// Alert message when the page loads
window.onload = function() {
  alert("Welcome to my first web page!");
};

// Function to change the text when button is clicked
function changeText() {
  document.getElementById("myParagraph").innerText = "You clicked the button!";
}

// Add a scroll-to-top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '&#8593;';
scrollToTopButton.id = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

// Add a dark mode toggle
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '🌙';
darkModeToggle.id = 'dark-mode-toggle';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkModeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Add a simple parallax effect to the home section
window.addEventListener('scroll', () => {
  const homeSection = document.querySelector('#home');
  const scrollPosition = window.pageYOffset;
  homeSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});
