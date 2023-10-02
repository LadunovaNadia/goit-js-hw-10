import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_1QOLXWM8kv3T2PlJcH2Cq8nmfkQ2YNwL8rQw79BpiOMcdYrod7ZNe1wqv4NfAA6K";

export function fetchBreeds() {
return axios.get("https://api.thecatapi.com/v1/breeds")
      .then(response => response.data)
      .catch(error => {
            throw error;
      });
}

export function fetchCatByBreed(breedId) {
return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
      .then(response => response.data[0])
      .catch(error => {
            throw error;
      });
}
