import "./mobile-navigation.js";

import { animals } from '../database/animals.js';

const getLatestAnimals = (animals, filter) => {
  if (filter) {
    // filter and sort the animals in descending order
    const sortedAnimals = animals.filter((animal) => animal.specie === filter).sort((a, b) => b.id - a.id);
    return sortedAnimals.slice(0, 8);
  } else {
    // sort the animals in descending order
    return animals.sort((a, b) => b.id - a.id).slice(0, 8);
  }
}

const displayLatestAnimals = (animals) => {
  const filterLatest = document.getElementById('filterLatest');
  const latestAnimalsContainer = document.getElementById('latestAnimalContainer');
  const latestAnimals = getLatestAnimals(animals, filterLatest.value);

  // Clear previous content
  latestAnimalsContainer.innerHTML = '';

  // Display the latest animals
  latestAnimals.forEach((animal) => {
    const card = document.createElement('article');
    card.classList.add('col-span-12', 'md:col-span-6', 'lg:col-span-3', 'shadow-xl', 'w-full');

    // Create the gender icon HTML
    const genderIcon = animal.gender === "Mâle"
      ? '<i class="fa-solid fa-mars group-hover:text-[#E2992A]" title="Mâle"></i>'
      : '<i class="fa-solid fa-venus group-hover:text-[#E2992A]" title="Femelle"></i>';

    card.innerHTML = `
     <a href="animal-file.html?id=${animal.id}" class="cursor-pointer transition-all duration-300 group">
      <div class="w-full h-auto overflow-hidden h-[172px]">
        <img src="assets/images/animals/${animal.id}.jpg" alt="${animal.name}" class="w-full h-[172px] object-cover group-hover:scale-110 transition-all duration-300">
      </div>
      <div class="flex flex-col mt-2 px-4 pb-4">
        <h3 class="text-2xl tracking-wide font-semibold text-center w-full">${animal.name} <span>${genderIcon}</span></h3>
        <div class=" mx-auto text-sm">
          <p class="flex justify-between border-b py-1"><span class="font-semibold tracking-wide">Râce:</span> ${animal.breed}</p>
          <p class="flex justify-between border-b py-1"><span class="font-semibold tracking-wide">Âge:</span> ${animal.age}</p>
          <p class="flex justify-between py-1">${animal.description}</p>
        </div>
      </div>
      </a>
    `;
    latestAnimalsContainer.appendChild(card);
  });
}

displayLatestAnimals(animals);

const filterLatest = document.getElementById('filterLatest');

filterLatest.addEventListener('change', () => {
  displayLatestAnimals(animals);
});
