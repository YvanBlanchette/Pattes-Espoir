document.addEventListener("DOMContentLoaded", function () {
  // Get the elements from the DOM
  const form = document.getElementById("form");
  const lastName = document.getElementById("lastName");
  const firstName = document.getElementById("firstName");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const postalCode = document.getElementById("postalCode");
  const phone = document.getElementById("phone");
  const email = document.getElementById("email");
  const nbreAdults = document.getElementById("nbreAdults");
  const nbreChildren = document.getElementById("nbreChildren");
  const activityLevel = document.getElementById("activityLevel");
  const housingType = document.getElementById("housingType");
  const exterior = document.getElementById("exterior");
  const exteriorYes = document.getElementById("exterior-yes");
  const exteriorNo = document.getElementById("exterior-no");
  const allergies = document.getElementById("allergies");
  const allergiesYes = document.getElementById("allergies-yes");
  const allergiesNo = document.getElementById("allergies-no");
  const consent = document.getElementById("consent");
  const consentYes = document.getElementById("consent-yes");
  const consentNo = document.getElementById("consent-no");
  const otherAnimals = document.getElementById("otherAnimals");
  const otherAnimalsYes = document.getElementById("otherAnimals-yes");
  const otherAnimalsNo = document.getElementById("otherAnimals-no");
  const homeAlone = document.getElementById("homeAlone");
  const homeAloneYes = document.getElementById("homeAlone-yes");
  const homeAloneNo = document.getElementById("homeAlone-no");

  // Validate the form when it is submitted
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

    // Number of adults validation
    if (!validateNumber(nbreAdults.value)) {
      showError(nbreAdults, "Veuillez entrer un nombre valide d'adultes.");
      isValid = false;
    }

    // Number of children validation
    if (!validateNumber(nbreChildren.value)) {
      showError(nbreChildren, "Veuillez entrer un nombre valide d'enfants.");
      isValid = false;
    }

    // Activity level validation
    if (!activityLevel.value) {
      showError(activityLevel, "Veuillez choisir le niveau d'activité de votre foyer.");
      isValid = false;
    }

    // Housing type validation
    if (!housingType.value) {
      showError(housingType, "Veuillez choisir le type d'habitation.");
      isValid = false;
    }

    // Exterior validation
    if (!exteriorYes.checked && !exteriorNo.checked) {
      showError(exterior, "Veuillez indiquer si vous avez un jardin ou une cour clôturée.");
      isValid = false;
    }

    // Allergies validation
    if (!allergiesYes.checked && !allergiesNo.checked) {
      showError(allergies, "Veuillez indiquer si des membres de votre foyer ont des allergies aux animaux.");
      isValid = false;
    }

    // Consent validation
    if (!consentYes.checked && !consentNo.checked) {
      showError(consent, "Veuillez indiquer si tous les membres de votre foyer sont d'accord avec l'adoption d'un animal.");
      isValid = false;
    }

    // Other animals validation
    if (!otherAnimalsYes.checked && !otherAnimalsNo.checked) {
      showError(otherAnimals, "Veuillez indiquer si vous avez d'autres animaux dans votre foyer.");
      isValid = false;
    }

    // Home alone validation
    if (!homeAloneYes.checked && !homeAloneNo.checked) {
      showError(homeAlone, "Veuillez indiquer s'il y a des moments de la journée où personne n'est à la maison.");
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
      element.classList.remove("errorMessage");
    });
  }

  // Function to show error messages
  function showError(input, message) {
    const errorElement = input.nextElementSibling;
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.add("errorMessage");
    }
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

  function validateNumber(value) {
    return !isNaN(value) && value.trim() !== "";
  }
});
