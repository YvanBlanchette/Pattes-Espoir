import { animals } from '../database/animals.js';

const getLatestAnimals = (animals, filter) => {
  if (filter) {
    // Filter animals and sort them in descending order
    return animals.filter((animal) => animal.specie === filter).sort((a, b) => b.id - a.id);
  } else {
    // Sort animals in descending order
    return animals.sort((a, b) => b.id - a.id);
  }
}

const displayLatestAnimals = (animals, page = 1, resultsPerPage = 12) => {
  const filterLatest = document.getElementById('filterLatest');
  const latestAnimalsContainer = document.getElementById('latestAnimalContainer');
  const latestAnimals = getLatestAnimals(animals, filterLatest.value);

  // Calculate indexes for pagination
  const startIndex = (page - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const paginatedAnimals = latestAnimals.slice(startIndex, endIndex);

  // Clear previous content
  latestAnimalsContainer.innerHTML = '';

  // Show paginated animals results
  paginatedAnimals.forEach((animal) => {
    const card = document.createElement('article');
    card.classList.add('col-span-12', 'md:col-span-6', 'lg:col-span-3', 'shadow-xl', 'w-full');

    // Create the gender icon HTML
    const genderIcon = animal.gender === "Mâle"
      ? '<i class="fa-solid fa-mars group-hover:text-[#799805]" title="Mâle"></i>'
      : '<i class="fa-solid fa-venus group-hover:text-[#E2992A]" title="Femelle"></i>';

    card.innerHTML = `
     <a href="fiche-animal.html?id=${animal.id}" class="cursor-pointer transition-all duration-300 group">
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

  // Generate pagination buttons
  generatePaginationButtons(latestAnimals.length, resultsPerPage, page);
}

const generatePaginationButtons = (totalResults, resultsPerPage, currentPage) => {
  const paginationContainer = document.getElementById('pagination');
  const totalPages = Math.ceil(totalResults / resultsPerPage);

  // Clear previous content
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button');
    button.classList.add('mx-2', 'px-4', 'py-2', 'bg-[#698018]', 'text-white', 'hover:bg-[#E2992A]', 'transition-all', 'duration-300');
    if (i === currentPage) {
      button.classList.add('bg-[#E2992A]');
    }
    button.innerText = i;
    button.addEventListener('click', () => displayLatestAnimals(animals, i));
    paginationContainer.appendChild(button);
  }
}

displayLatestAnimals(animals);

const filterLatest = document.getElementById('filterLatest');

filterLatest.addEventListener('change', () => {
  displayLatestAnimals(animals);
});
