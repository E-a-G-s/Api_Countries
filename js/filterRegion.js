const filterRegion = document.getElementById("filterRegion");
const infoFilter = (data) => {
  filterRegion.addEventListener("change", (e) => {
    //Para evitar que el sitio se actualice a cada rato
    e.preventDefault();
    const filterSelect = filterRegion.value;

    if (filterSelect === "Todos") return infoApi(data);
    const result = data.filter((e) => e.region === filterSelect);
    infoApi(result);
  });
};
