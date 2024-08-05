document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const lastName = document.getElementById("lastName");
  const firstName = document.getElementById("firstName");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

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

    // Message validation
    if (message.value.trim() === "") {
      showError(message, "Veuillez entrer un message.");
      isValid = false;
    }

    // If all validations pass, submit the form
    if (!isValid) {
      event.preventDefault();
    }
  });

  // Function to clear error messages
  function clearErrors() {
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(function (element) {
      element.textContent = "";
    });
  }

  // Function to show error messages
  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    errorElement.textContent = message;
    errorElement.classList.add("error");
  }

  //--- Validation functions ---//
  function validateName(name) {
    return name.trim() !== "";
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