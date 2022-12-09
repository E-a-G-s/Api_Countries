const formulario = document.getElementById("formulario");
const inputFormulario = document.getElementById("inputFormulario");

//Con esta funcion activo los datos de la api
const infoFormulario = (data) => {
  formulario.addEventListener("keyup", (e) => {
    //Para evitar que el sitio se actualice a cada rato
    e.preventDefault();
    //console.log(data);

    const infoInput = inputFormulario.value.toLowerCase();
    //console.log(infoInput);
    const arrayFilter = data.filter((item) => {
      const infoApi = item.name.common.toLowerCase();
      //Consulto si la informacio de la api es igual a la que ingresa el usuario
      if (infoApi.indexOf(infoInput) !== -1) return item;
      // console.log(item);
    });
    //console.log(arrayFilter);
    infoApi(arrayFilter);
  });
};
