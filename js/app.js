//Guardamos el id de card en una variable
const banderas = document.getElementById("banderas");

document.addEventListener("DOMContentLoaded", (event) => {
  fetchData();
});
const fetchData = async () => {
  //Consumiendo la api
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    infoApi(data);
    infoFormulario(data);
    infoFilter(data);
  } catch (error) {
    console.log("Error en Solicitud de Api", error);
  }
};

const infoApi = (data) => {
  let elementos = "";
  data.forEach((country) => {
    elementos += `
        <article class="card">
        <img src="${country.flags.svg}" alt="Bandera" class="img-fluid" >
        <div class="card-content">
        <center> <h2>${country.name.common}</h2></center> 
          <p>
            <b>Poblacion: ${country.population}</b>
          </p>
          <p>
            <b>Region: ${country.region}</b>
          </p>
          <p>
            <b>Capital: ${country.capital}</b>
          </p>
          <a href="detailsCountry.html?name=${country.name.common}"><button>Mas Informacion</button></a>
        </div>
      </article>
               
        `;
  });
  banderas.innerHTML = elementos;
};
