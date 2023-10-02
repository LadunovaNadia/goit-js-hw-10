import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const breedSelect = document.querySelector(".breed-select");
const catInfo = document.querySelector(".cat-info");
const breedName = document.querySelector(".breed-name");
const description = document.querySelector(".description");
const temperament = document.querySelector(".temperament");

fetchBreeds()
   .then(breeds => {
      breedSelect.innerHTML = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join("");
   })
   .catch(() => {
      error.style.display = "block";
   })
   .finally(() => {
      loader.style.display = "none";
   });

breedSelect.addEventListener("change", () => {
   const selectedBreedId = breedSelect.value;

   loader.style.display = "block";
   error.style.display = "none";
   catInfo.style.display = "none";

   fetchCatByBreed(selectedBreedId)
      .then(cat => {
            breedName.textContent = `Breed-name: ${cat.breeds[0].name}`;
            description.textContent = `Description: ${cat.breeds[0].description}`;
            temperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
            catInfo.querySelector("img").src = cat.url;
            catInfo.style.display = "block";
      })
      .catch(() => {
            error.style.display = "block";
      })
      .finally(() => {
            loader.style.display = "none";
      });
});
