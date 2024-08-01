document.addEventListener("DOMContentLoaded", function () {
  const newQueryYes = document.getElementById('newQuery-yes');
  const newQueryNo = document.getElementById('newQuery-no');
  const queryMessage = document.getElementById('queryMessage');
  const queryForm = document.getElementById('queryForm');

  // Show message if returning user
  newQueryYes.addEventListener('click', () => {
    queryMessage.classList.remove('hidden');
    queryForm.classList.add('hidden');
  });

  // Hide message and show form if new user
  newQueryNo.addEventListener('click', () => {
    queryMessage.classList.add('hidden');
    queryForm.classList.remove('hidden');
  });

  const form = document.querySelector("form");
  const lastName = document.getElementById("lastName");
  const firstName = document.getElementById("firstName");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const postalCode = document.getElementById("postalCode");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");

  form.addEventListener("submit", function (event) {
    let isValid = true;
    clearErrors();

    // Last name validation
    if (!validateName(lastName.value)) {
      showError(lastName, "Veuillez entrer un nom de famille valide.");
      isValid = false;
    }

    // First name validation
    if (!validateName(firstName.value)) {
      showError(firstName, "Veuillez entrer un prénom valide.");
      isValid = false;
    }

    // Address validation
    if (!validateAddress(address.value)) {
      showError(address, "Veuillez entrer une adresse valide.");
      isValid = false;
    }

    // City validation
    if (!validateName(city.value)) {
      showError(city, "Veuillez entrer une ville valide.");
      isValid = false;
    }

    // Postal code validation
    if (!validatePostalCode(postalCode.value)) {
      showError(postalCode, "Veuillez entrer un code postal valide.");
      isValid = false;
    }

    // Phone validation
    if (!validatePhone(phone.value)) {
      showError(phone, "Veuillez entrer un numéro de téléphone valide.");
      isValid = false;
    }

    // Email validation
    if (!validateEmail(email.value)) {
      showError(email, "Veuillez entrer une adresse courriel valide.");
      isValid = false;
    }

    // If there are any errors, prevent the form from submitting
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Function to clear error messages
  function clearErrors() {
    const errorElements = document.querySelectorAll(".errorMessage");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });
  }

  // Function to show error messages
  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.classList.add("errorMessage");
  }

  //--- Validation functions ---//
  function validateName(name) {
    return name.trim() !== "";
  }

  function validateAddress(address) {
    return address.trim() !== "";
  }

  function validatePostalCode(postalCode) {
    const postalCodeRegex = /^[A-Z]\d[A-Z] ?\d[A-Z]\d$/i;
    return postalCodeRegex.test(postalCode);
  }

  function validatePhone(phone) {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    return phoneRegex.test(phone);
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
