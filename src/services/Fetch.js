const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

export default async function planetsFetch() {
  const response = await fetch(url);
  const teste = await response.json();
  // console.log(teste);
  return teste;
}
