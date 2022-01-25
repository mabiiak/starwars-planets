const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default function planetsFetch() {
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      const data = result;
      console.log(data.results);
      return data.results;
    });
}
