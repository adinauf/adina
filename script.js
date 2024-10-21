const slider = document.getElementById('slider');
const images = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * 100; // Use 100% for full-width images
    slider.style.transform = `translateX(${offset}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentIndex) {
            dot.classList.add('active');
        }
    });
}

function plusSlides(n) {
    currentIndex = (currentIndex + n + totalImages) % totalImages; // Update currentIndex
    updateSlider();
}

function currentSlide(n) {
    currentIndex = n - 1; // Set currentIndex to the clicked dot
    updateSlider();
}

// Optional: Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalImages;
    updateSlider();
}, 5000);

// Menu toggle functionality
function toggleNav(x) {
    const sidenav = document.getElementById("mySidenav");
    const topContainer = document.querySelector(".top-container");
    const topContainerRect = topContainer.getBoundingClientRect();

    // Only toggle the menu if the top container is off the screen
    if (topContainerRect.bottom <= 0) {
        if (sidenav.style.width === "250px") {
            closeNav(x);  // Pass x to closeNav to toggle the hamburger icon
        } else {
            openNav(x);   // Pass x to openNav to toggle the hamburger icon
        }
    }
}

function openNav(x) {
    document.getElementById("mySidenav").style.width = "250px";  // Open the side menu
    document.body.classList.add("menu-open");  // Disable body scrolling
    x.classList.add("change");  // Change the hamburger icon
}

function closeNav(x) {
    document.getElementById("mySidenav").style.width = "0";  // Close the side menu
    document.body.classList.remove("menu-open");  // Enable body scrolling
    x.classList.remove("change");  // Change the hamburger icon back to original
}

// Sticky header functionality
window.onscroll = function() { myFunction(); };

var header = document.querySelector(".header-container");
var sticky = header.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        header.classList.add("sticky");  // Add sticky class when the header reaches the top
    } else {
        header.classList.remove("sticky");  // Remove sticky class when scrolling up
    }
}

// Toggle between like and unlike
    function toggleLike(event) {
    const farHeart = event.currentTarget.parentElement.querySelector('.far');
    const fasHeart = event.currentTarget.parentElement.querySelector('.fas');

    // Toggle icons
    if (farHeart.style.display === "none") {
        farHeart.style.display = "block"; // Show empty heart
        fasHeart.style.display = "none";   // Hide filled heart
    } else {
        farHeart.style.display = "none";   // Hide empty heart
        fasHeart.style.display = "block";   // Show filled heart
    }
}

// Toggle search button
function toggleSearch() {
    const searchInput = document.getElementById("searchInput");
    
    // Toggle between showing and hiding the search input field
    if (searchInput.style.display === "none" || searchInput.style.display === "") {
        searchInput.style.display = "block"; // Show the search input field
    } else {
        searchInput.style.display = "none";  // Hide the search input field
    }
}
