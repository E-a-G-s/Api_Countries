//recibo el nombre que llega por query en la url y lo paso a parametro
const banderas = document.getElementById("banderas");
const query = new URLSearchParams(window.location.search);
const params = query.get("name");
console.log(params);

document.addEventListener("DOMContentLoaded", (event) => {
  fetchData();
});
const fetchData = async () => {
  //Consumiendo la api
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const filtroData = data.filter((country) => country.name.common === params);
    infoApi(filtroData);
    console.log(filtroData);
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
            <p>${country.borders}</p>
           
            <p>${country.translations}</p>
            
       
          </div>
        </article>
                 
          `;
  });
  banderas.innerHTML = elementos;
};
