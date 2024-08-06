import "./mobile-navigation.js";

import { animals } from '../database/animals.js';

const id = new URLSearchParams(window.location.search).get('id');
console.log(id)

const getSelectedAnimal = (animals, id) => {
  if (id) {
    // find the selected animal with the provided id
    const selectedAnimal = animals.find((animal) => Number(animal.id) === Number(id));
    if (selectedAnimal) {
      return selectedAnimal;
    } else {
      console.error("L'animal n'a pas été trouvé...");
      return null;
    }
  } else {
    console.error("ID non fourni...");
    return null;
  }
}

const displayAnimal = () => {
  const animalImageContainer = document.getElementById('animalImageContainer');
  const animalInfoContainer = document.getElementById('animalInfoContainer');

  const selectedAnimal = getSelectedAnimal(animals, id);

  if (!selectedAnimal) {
    animalImageContainer.innerHTML = '<p>Animal non trouvé.</p>';
    animalInfoContainer.innerHTML = '<p>Animal non trouvé.</p>';
    return;
  }

  // Clear previous content
  animalImageContainer.innerHTML = '';
  animalInfoContainer.innerHTML = '';

  // Display the animal infos
  animalImageContainer.innerHTML = `
    <!-- Image -->
    <img src="assets/images/animals/${selectedAnimal.id}.jpg" alt="${selectedAnimal.name}" class="w-full h-full object-cover shadow-xl">
  `;

  animalInfoContainer.innerHTML = `
    <!-- Name -->
    <h2 id="animalName" class="-ml-1 text-7xl">${selectedAnimal.name}</h2>

    <!-- Chip id -->
    <small class="text-sm text-gray-400">${selectedAnimal.chipId}</small>

    <!-- Description -->
    <p class="mt-2 mb-6">${selectedAnimal.description}</p>

    <!-- Specie -->
    <p class="text-sm flex justify-between border-b border-gray-300 pb-2"><span class="font-medium">Espèce :</span><span id="animalSpecie">${selectedAnimal.specie}</span></p>

    <!-- Breed -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2"><span class="font-medium">Race :</span><span id="animalBreed">${selectedAnimal.breed}</span></p>

    <!-- Age -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2"><span class="font-medium">Âge :</span><span id="animalAge">${selectedAnimal.age}</span></p>

    <!-- Gender -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2"><span class="font-medium">Sexe :</span><span id="animalGender">${selectedAnimal.gender}</span></p>

    <!-- Traits -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2"><span class="font-medium">Traits distinctifs :</span><span id="animalTraits">${selectedAnimal.distinctiveTraits}</span></p>

    <!-- Weight -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2"><span class="font-medium">Poids :</span><span id="animalWeight">${selectedAnimal.weight}</span></p>

    <!-- Height -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2"><span class="font-medium">Taille :</span><span id="animalHeight">${selectedAnimal.height}</span></p>

    <!-- Vaccines -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2"><span class="font-medium">Vaccins :</span><span id="animalVaccines">${selectedAnimal.vaccines.join(', ')}</span></p>

    <!-- Treatments -->
    <p class="text-sm  flex justify-between border-b border-gray-300 py-2 mb-6"><span class="font-medium">Autres traitements :</span><span id="animalTreatments">${selectedAnimal.treatments.join(', ')}</span></p>

    <div class="flex flex-col md:flex-row justify-center md:justify-end text-center gap-6 w-full text-sm  md:text-base">
      <a href="available-animals.html" class="text-white px-4 py-2 md:w-fit bg-[#698018] hover:bg-[#E2992A] transition-all duration-300 uppercase font-medium tracking-wide">Retour</a>
      <a href="adoption-request.html" class="text-white px-4 py-2 md:w-fit bg-[#E2992A] hover:bg-[#698018] transition-all duration-300 uppercase font-medium tracking-wide ">
        <i class="fa-solid fa-paw"></i> Demande d'adoption
      </a>
    </div>
  `;
}

displayAnimal();
