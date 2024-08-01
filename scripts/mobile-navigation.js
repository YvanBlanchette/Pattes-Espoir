const mobileNavigation = document.getElementById('mobile-navigation');
const mobileNavigationToggle = document.getElementById('mobile-navigation-toggle');
const mobileNavigationClose = document.getElementById('mobile-navigation-close');

mobileNavigationToggle.addEventListener('click', () => {
  mobileNavigation.classList.remove('hidden');
});

mobileNavigationClose.addEventListener('click', () => {
  mobileNavigation.classList.add('hidden');
})