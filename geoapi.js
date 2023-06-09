/*const NomePais = "brazil";
fetch(`https://restcountries.com/v3.1/name/${NomePais}`)
  .then(response => response.json())
  .then(data => {
    const pais = data[0];
    const nome = pais.name.common;
    const capital = pais.capital[0];
    const continente = pais.continents[0];
    const populacao = pais.population;
    const area = pais.area

    const idiomas = Object.keys(pais.languages).map(key => ({
        nome: key,
        valor: pais.languages[key]
      }));
    const moedas = Object.keys(pais.currencies).map(key => ({
      nome: key,
      valor: pais.currencies[key].name
    }));

    console.log(nome, capital, continente, populacao, moedas[0].nome, moedas[0].valor, idiomas[0].valor,
         area + " Kilometers", pais.flags.png, pais);

  })*/
  function pibpais() {
    
  var paisx = "BRA"
  fetch('https://api.worldbank.org/v2/country/${paisx}/indicator/NY.GDP.MKTP.CD?format=json')
  .then(response => response.json())
  .then(data => {
    const brazilData = data[1].filter(d => d.country.value === 'Brazil')[0];
    const gdp = brazilData.value;
    return `O PIB total do Brasil é ${gdp}`
  })};
  pibpais()


