import { animals } from '../database/animals.js';

const getLatestAnimals = (animals, filter) => {
  if (filter) {
    // filter and sort the animals in descending order
    const sortedAnimals = animals.filter((animal) => animal.specie === filter).sort((a, b) => b.id - a.id);

    // Sort the animals by id in descending order
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
    const latestAnimalsContainer = document.getElementById('latestAnimalContainer');
    const card = document.createElement('article');
    card.classList.add('col-span-12', 'md:col-span-6', 'lg:col-span-3', 'shadow-xl', 'w-full');
    card.innerHTML = `
      <div class=" w-full h-auto overflow-hidden h-[172px]">
        <img src="assets/images/animals/${animal.id}.jpg" alt="${animal.name}" class="w-full h-[172px] object-cover">
      </div>
      <div class="flex flex-col mt-2 px-4 pb-4">
          <h3 class="text-2xl tracking-wide font-semibold text-center w-full">${animal.name}</h3>
          <div class="w-[80%] mx-auto">
            <p class="flex justify-between"><span class="font-semibold tracking-wide">Espèce:</span> ${animal.specie}</p>
            <p class="flex justify-between"><span class="font-semibold tracking-wide">Râce:</span> ${animal.breed}</p>
            <p class="flex justify-between"><span class="font-semibold tracking-wide">Âge:</span> ${animal.age}</p>
          </div>
          <div class="text-center mt-4 mb-1">
            <a href="fiche-animal.html?id=${animal.id}" class="text-white px-4 py-1 mx-auto bg-[#698018] hover:bg-[#E2992A] transition-all duration-300 uppercase">Fiche détailée</a>
            </div>
      </div>`;
    latestAnimalsContainer.appendChild(card);
  })
}

displayLatestAnimals(animals);

const filterLatest = document.getElementById('filterLatest');

filterLatest.addEventListener('change', () => {
  displayLatestAnimals(animals);
});

