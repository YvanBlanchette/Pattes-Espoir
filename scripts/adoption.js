const selectedSpecie = document.getElementById('selectedSpecie');
const adoptionCostContainer = document.getElementById('adoptionCostContainer');

const dogAdoptionCosts = `
        <h4 class="text-3xl uppercase font-medium mb-2 ml-1 col-span-12">Chiens</h4>
        <div class="col-span-12 md:col-span-8">
          <div class="join join-vertical w-full rounded-none">
            <div class="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="dogs" checked="checked" />
              <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Avant l'adoption</div>
              <div class="collapse-content collapse-open">
                <ol class="list-decimal list-inside">
                  <li>Évaluez les coûts reliés au fait d’avoir un chien : nourriture, visites chez le vétérinaire,
                    produits de soins, etc.</li>
                  <li>Selon sa taille, un chien peut vivre de 12 à 15 ans environ et requiert beaucoup d’attention.
                    Aurez-vous le temps – et l’énergie! – de vous en occuper tous les jours ?</li>
                  <li>Prévoyez une période d’adaptation pour votre nouveau compagnon. Celui-ci pourrait faire de petits
                    dégâts dans la maison au début.</li>
                </ol>
              </div>
            </div>
            <div class="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="dogs" />
              <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Pendant l'adoption
              </div>
              <div class="collapse-content">
                <p>Pour rencontrer les chiens en attente d’adoption, présentez-vous durant nos <a
                    href="nous-joindre.html"
                    class="text-[#E2992A] hover:text-[#698018] font-medium transition-all duration-300">heures
                    d'ouverture</a>.</p>
              </div>
            </div>
            <div class="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="dogs" />
              <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Frais d'adoption
              </div>
              <div class="collapse-content">
                <p><span class="font-medium">Chiot</span> – de moins de huit mois : 550 $<br>
                  <span class="font-medium">Chien</span> – de huit mois et plus : 400 $<br>
                  <span class="font-medium">Adoption humanitaire</span> – de 0 $ à 150 $, selon les besoins médicaux de
                  l’animal
                </p>
                <p class="my-2">Pour les chiens qui vivent mieux en duo, le refuge assume les frais d’adoption du
                  deuxième animal.</p>
                <p class="font-medium">Ces frais incluent :</p>
                <ul class="list-disc list-inside">
                  <li>La stérilisation</li>
                  <li>Le premier vaccin de base et le vaccin contre la rage</li>
                  <li>Un traitement contre les parasites</li>
                </ul>
                <p class="mt-3 text-xl text-[#E2992A]">Un dépôt est exigé pour les deux options :</p>
                <p>Un dépôt est exigé à l’adoption d’un chien (150 $). Ce montant est remboursable sur présentation
                  d’une preuve qu’un cours d’obéissance a été suivi avec un entraîneur certifié RQIEC, CTC, CPDT-KA,
                  IAABC
                  ou
                  CSAT.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-12 md:col-span-4 overflow-hidden">
          <img src="assets/images/animals/17.jpg" alt="" class="w-full max-h-full object-cover">
        </div>
`;

const catAdoptionCosts = `
  <h4 class="text-3xl uppercase font-medium mb-2 ml-1 col-span-12">Chats</h4>
  <div class="col-span-12 md:col-span-8">
    <div class="join join-vertical w-full rounded-none">
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="cats" checked="checked" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Avant l'adoption</div>
        <div class="collapse-content collapse-open">
          <ol class="list-decimal list-inside">
            <li>Évaluez les coûts reliés au fait d&apos;avoir un chat : nourriture, visites chez le vétérinaire, produits de soins, etc.</li>
            <li>Un chat peut vivre une bonne quinzaine d&apos;années. Aurez-vous le temps d&apos;en prendre soin tous les jours pour le reste de sa vie ?</li>
            <li>Prévoyez une période d&apos;adaptation pour votre nouveau compagnon; celui-ci pourrait causer des petits dégâts dans la maison au début.</li>
          </ol>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="cats" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Pendant l'adoption
        </div>
        <div class="collapse-content">
          <p>Pour rencontrer les chats en attente d&apos;adoption, présentez-vous durant nos <a href="nous-joindre.html"
              class="text-[#E2992A] hover:text-[#698018] font-medium transition-all duration-300">heures
              d'ouverture</a>.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="cats" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Frais d'adoption
        </div>
        <div class="collapse-content">
          <p><span class="font-medium">Chaton</span> – de moins de cinq mois : 275 $<br>
            <span class="font-medium">Chat</span> – de cinq mois et plus : 200 $<br>
            <span class="font-medium">Adoption humanitaire</span> – de 0 $ à 150 $, selon les besoins médicaux de
            l&apos;animal
          </p>
          <p class="my-2">Pour les chats qui vivent mieux en duo, le refuge assume les frais d&apos;adoption du
            deuxième animal.</p>
          <p class="font-medium">Ces frais incluent :</p>
          <ul class="list-disc list-inside">
            <li>La stérilisation</li>
            <li>Le premier vaccin de base et le vaccin contre la rage</li>
            <li>Un traitement contre les parasites</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-12 md:col-span-4 overflow-hidden">
    <img src="assets/images/animals/5.jpg" alt="" class="w-full max-h-full object-cover">
  </div>
`;

const birdAdoptionCosts = `
  <h4 class="text-3xl uppercase font-medium mb-2 ml-1 col-span-12">Oiseaux</h4>
  <div class="col-span-12 md:col-span-8">
    <div class="join join-vertical w-full rounded-none">
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="birds" checked="checked" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Avant l'adoption</div>
        <div class="collapse-content collapse-open">
          <ol class="list-decimal list-inside">
            <li>Évaluez les coûts reliés au fait d’avoir un oiseau : nourriture, visites chez le vétérinaire, produits de soins, etc.</li>
            <li>Les oiseaux peuvent vivre plusieurs années. Aurez-vous le temps d’en prendre soin jour après jour ?</li>
            <li>Prévoyez une période d’adaptation pour votre nouveau compagnon.</li>
          </ol>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="birds" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Pendant l'adoption
        </div>
        <div class="collapse-content">
          <p>Pour rencontrer les oiseaux en attente d&apos;adoption, présentez-vous durant nos <a href="nous-joindre.html"
              class="text-[#E2992A] hover:text-[#698018] font-medium transition-all duration-300">heures
              d'ouverture</a>.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="birds" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Frais d'adoption
        </div>
        <div class="collapse-content">
          <ul class="">
        <li><span class="font-medium">Inséparables :</span> 50$</li>
        <li><span class="font-medium">Canari :</span> 45$</li>
        <li><span class="font-medium">Cockatiel :</span> 40$</li>
        <li><span class="font-medium">Pinson :</span> 20$</li>
        <li><span class="font-medium">Perruche :</span> 25$</li>
        <li><span class="font-medium">Colombe :</span> 15$</li>
        <li><span class="font-medium">Tourelle :</span> 15$</li>
        <li><span class="font-medium">Conure :</span> 100$</li>
        <li><span class="font-medium">Perroquet :</span> 100$</li>
        </ul>
        <p class=my-2>Pour les oiseaux qui vivent mieux en duo, le refuge assume les frais d&apos;adoption du
            deuxième animal.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-12 md:col-span-4 overflow-hidden">
    <img src="assets/images/animals/3.jpg" alt="" class="w-full max-h-full object-cover">
  </div>
`;

const smallAnimalsAdoptionCosts = `
  <h4 class="text-3xl uppercase font-medium mb-2 ml-1 col-span-12">Petits animaux</h4>
  <div class="col-span-12 md:col-span-8">
    <div class="join join-vertical w-full rounded-none">
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="smallAnimals" checked="checked" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Avant l'adoption</div>
        <div class="collapse-content collapse-open">
          <ol class="list-decimal list-inside">
            <li>Évaluez les coûts reliés au fait d’avoir un lapin : nourriture, visites chez le vétérinaire, produits de soins, etc. Vous trouverez toute l’information nécessaire pour prendre bien soin de votre petit protégé sur le site La dure vie du lapin urbain.</li>
            <li>Un lapin peut vivre une bonne dizaine d’années. Aurez-vous le temps de vous en occuper tous les jours pour le reste de sa vie ?</li>
            <li>Prévoyez une période d’adaptation pour votre nouveau compagnon. Celui-ci pourrait faire de petits dégâts dans la maison au début.</li>
          </ol>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="smallAnimals" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Pendant l'adoption
        </div>
        <div class="collapse-content">
          <p>Pour rencontrer les petits animaux en attente d’adoption, présentez-vous durant nos <a href="nous-joindre.html"
              class="text-[#E2992A] hover:text-[#698018] font-medium transition-all duration-300">heures
              d'ouverture</a>.</p>
        </div>
      </div>
      <div class="collapse collapse-arrow join-item border-base-300 border">
        <input type="radio" name="smallAnimals" />
        <div class="collapse-title text-xl uppercase text-[#E2992A] font-medium">Frais d'adoption
        </div>
        <div class="collapse-content">
        <ul class="">
        <li><span class="font-medium">Furet :</span> 75$</li>
        <li><span class="font-medium">Chinchilla :</span> 60$</li>
        <li><span class="font-medium">Cochon d'Inde :</span> 45$</li>
        <li><span class="font-medium">Rat :</span> 25$</li>
        <li><span class="font-medium">Hamster :</span> 15$</li>
        <li><span class="font-medium">Hérisson :</span> 75$</li>
        <li><span class="font-medium">Souris :</span> 10$</li>
        <li><span class="font-medium">Gerbille :</span> 15$</li>
        <li><span class="font-medium">Dégu :</span> 15$</li>
        <li><span class="font-medium">Tortue :</span> aucuns frais</li>
        </ul>
        <p class=my-2>Pour les petits animaux qui vivent mieux en duo, le refuge assume les frais d&apos;adoption du
            deuxième animal.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-12 md:col-span-4 overflow-hidden">
    <img src="assets/images/animals/46.jpg" alt="" class="w-full max-h-full object-cover">
  </div>
`;

selectedSpecie.addEventListener('change', () => {
  switch (selectedSpecie.value) {
    case 'Chien':
      adoptionCostContainer.innerHTML = dogAdoptionCosts;
      break;
    case 'Chat':
      adoptionCostContainer.innerHTML = catAdoptionCosts;
      break;
    case 'Perroquet':
      adoptionCostContainer.innerHTML = birdAdoptionCosts;
      break;
    case 'Lapin':
      adoptionCostContainer.innerHTML = smallAnimalsAdoptionCosts;
      break;
  }
});
