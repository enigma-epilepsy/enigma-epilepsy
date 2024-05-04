const navList = document.querySelector('nav ul');
const menuButton = document.createElement('button');

menuButton.textContent = 'Menu'; // Set menu button text
menuButton.classList.add('menu-button');

navList.parentNode.insertBefore(menuButton, navList); // Add button before navigation

// Toggle menu on button click
menuButton.addEventListener('click', () => {
  navList.classList.toggle('navigation-menu'); // Toggle visibility of navigation menu using class
});

// Responsive behavior using media queries (optional)
const mediaQuery = window.matchMedia('(max-width: 768px)'); // Adjust breakpoint as needed

const handleMediaChange = (event) => {
  if (event.matches) {
    navList.classList.add('navigation-menu'); // Show menu on small screens
  } else {
    navList.classList.remove('navigation-menu'); // Hide menu on larger screens
  }
};

mediaQuery.addEventListener('change', handleMediaChange);
handleMediaChange(mediaQuery); // Call on initial load

navList.classList.add('navigation-menu'); // Show menu on small screens initially

menuButton.addEventListener('click', () => {
  navList.classList.toggle('navigation-menu');
  menuButton.style.display = navList.classList.contains('navigation-menu') ? 'none' : 'block';
});
