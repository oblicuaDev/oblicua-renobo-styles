const imageCache = {};
const getImageFromCacheOrFetch = async (url) => {
  // Verifica si la imagen está en caché
  if (imageCache[url]) {
    return imageCache[url];
  }

  // Si no está en caché, descarga la imagen
  const response = await fetch(url);
  const imageBlob = await response.blob();

  // Crea una URL de objeto para la imagen descargada
  const imageUrl = URL.createObjectURL(imageBlob);

  // Almacena la URL de la imagen en caché
  imageCache[url] = imageUrl;
  return imageUrl;
};
// Crear el elemento del preloader
const preloaderElement = document.createElement("div");
preloaderElement.className = "preloader";
document.body.appendChild(preloaderElement);

// Esperar un momento y aplicar el efecto de fadeOut
setTimeout(() => {
  preloaderElement.classList.add("fadeOut");
}, 1800);
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".col-md-6.float-left.col-12.block")) {
    document
      .querySelector(".col-md-6.float-left.col-12.block")
      .parentNode.parentNode.classList.remove("float-left");
  }
  if (window.innerWidth > 768) {
    // Obtener los elementos
    const logoElement = document.querySelector(".block--logo");
    const menuElement = document.querySelector(".block--theme-eru-main-menu");

    // Mover el primer elemento dentro del segundo elemento
    menuElement.appendChild(logoElement);
  }
  // Función para acortar el texto y agregar el botón "Leer más"
  function acortarTexto() {
    var divs = document.querySelectorAll(".project__body .field__item");

    for (var i = 0; i < divs.length; i++) {
      var div = divs[i];
      var contenido = div.innerHTML;
      var longitudMaxima = 3854; // Longitud máxima del texto acortado

      if (contenido.length > longitudMaxima) {
        var textoAcortado = contenido.substring(0, longitudMaxima) + "...";
        var textoCompleto = textoAcortado;
        var leerMas = '<a href="#" class="leer-mas">Leer más</a>';

        div.innerHTML = textoCompleto + leerMas;
        div.setAttribute("data-contenido-original", contenido); // Guardar el contenido original en un atributo de datos
      }
    }
  }

  // Función para mostrar el texto completo cuando se hace clic en "Leer más"
  function mostrarTextoCompleto(event) {
    event.preventDefault();
    var textoAcortado = this.parentNode.parentNode;
    var contenidoOriginal = this.parentNode.parentNode.getAttribute(
      "data-contenido-original"
    ); // Obtener el contenido original del atributo de datos
    textoAcortado.innerHTML = contenidoOriginal;
    this.style.display = "none";
  }

  // Agregar el evento click al botón "Leer más"
  document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("leer-mas")) {
      mostrarTextoCompleto.call(event.target, event);
    }
  });

  document.querySelectorAll(".oblicua-redes li a").forEach((el) => {
    let text = el.text;
    el.innerHTML = `<img alt="Línea de atención" src="http://files.renobo.com.co/sites/default/files/2023-05/${text}.png" />`;
  });
  // Obtén todos los elementos de la página
  var elementos = document.getElementsByTagName("*");

  // Define el color original y el color de reemplazo
  var colorOriginal = "#006b60";
  var colorReemplazo = "#003031";

  // Función para convertir un color en formato rgba o rgb a hexadecimal
  function convertirARGBAaHex(color) {
    var rgbaValores = color.match(/\d+/g);
    var r = parseInt(rgbaValores[0]);
    var g = parseInt(rgbaValores[1]);
    var b = parseInt(rgbaValores[2]);

    var hexadecimal =
      "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
    return hexadecimal;
  }

  // Recorre todos los elementos y verifica si tienen el color original
  for (var i = 0; i < elementos.length; i++) {
    var elemento = elementos[i];
    var estilo = getComputedStyle(elemento);

    // Verifica si el color de fondo o el color de texto coinciden con el color original
    var colorFondo = estilo.backgroundColor;
    var colorTexto = estilo.color;

    if (convertirARGBAaHex(colorFondo) === colorOriginal) {
      elemento.style.backgroundColor = colorReemplazo;
    }

    if (convertirARGBAaHex(colorTexto) === colorOriginal) {
      elemento.style.color = colorReemplazo;
    }
  }
  if (
    document.querySelector(
      "#description .paragraph--type--general-data-.paragraph--view-mode--default .container.row .dato-general.mb-4"
    )
  ) {
    let arrayIcons = [
      { iconclass: "comercio-icono", iconimg: "comercio" },
      { iconclass: "deporte-icono", iconimg: "cancha-multiple" },
      { iconclass: "espacio-publico-icono", iconimg: "espacio-publico" },
      { iconclass: "inversion-icono", iconimg: "inversion" },
      { iconclass: "recreacion-icono", iconimg: "terraza-recreativa" },
      { iconclass: "transporte-icono", iconimg: "acceso-transporte" },
      { iconclass: "vias-icono", iconimg: "malla-vial" },
      { iconclass: "vivienda-icono", iconimg: "viviendas" },
      { iconclass: "area-construida-icono", iconimg: "area-construir" },
      { iconclass: "area-icono", iconimg: "area-terreno" },
      { iconclass: "parques-icono", iconimg: "juegos-accesible-incluyente" },
      { iconclass: "agua-icono", iconimg: "" },
      { iconclass: "arte-icono", iconimg: "" },
      { iconclass: "cultura-icono", iconimg: "" },
      { iconclass: "educacion-icono", iconimg: "espacios-academicos" },
      { iconclass: "etapas-icono", iconimg: "predios-intervenir" },
      { iconclass: "ubicacion-icono", iconimg: "" },
      { iconclass: "area-ampliacion-icono", iconimg: "area-ampliacion" },
      { iconclass: "area-construir-icono", iconimg: "area-construir" },
      { iconclass: "area-disenada-icono", iconimg: "area-disenada" },
      { iconclass: "area-patrimonio-icono", iconimg: "area-patrimonio" },
      { iconclass: "area-terreno-icono", iconimg: "area-terreno" },
      { iconclass: "aulas-icono", iconimg: "aulas" },
      { iconclass: "bicicleteros-icono", iconimg: "bicicleteros" },
      { iconclass: "carga-descarga-icono", iconimg: "carga-descarga" },
      { iconclass: "comercio-servicios-icono", iconimg: "comercio-servicios" },
      {
        iconclass: "edificabilidad-proyectada-icono",
        iconimg: "edificabilidad-proyectada",
      },
      {
        iconclass: "edificaciones-servicio-dotacionales-icono",
        iconimg: "edificaciones-servicio-dotacionales",
      },
      { iconclass: "estudiantes-icono", iconimg: "estudiantes" },
      { iconclass: "hectareas-icono", iconimg: "hectareas" },
      {
        iconclass: "laboratorios-doctorado-icono",
        iconimg: "laboratorios-doctorado",
      },
      { iconclass: "laboratorios-icono", iconimg: "laboratorios" },
      { iconclass: "manzana-icono", iconimg: "manzana_0" },
      { iconclass: "nuevo-cad-icono", iconimg: "nuevo-cad" },
      { iconclass: "observatorio-icono", iconimg: "observatorio" },
      { iconclass: "parqueaderos-icono", iconimg: "parqueaderos" },
      {
        iconclass: "poblacion-icono",
        iconimg: "poblacion-proyectada",
      },
      { iconclass: "predios-intervenir-icono", iconimg: "predios-intervenir" },
      {
        iconclass: "salas-especializadas-icono",
        iconimg: "salas-especializadas",
      },
      { iconclass: "salas-software-icono", iconimg: "salas-software" },
      { iconclass: "servicios-icono", iconimg: "servicios" },
      {
        iconclass: "unidades-actuacion-urbanistica-icono",
        iconimg: "unidades-actuacion-urbanistica",
      },
    ];
    document
      .querySelectorAll(
        "#description .paragraph--type--general-data-.paragraph--view-mode--default .container.row .dato-general.mb-4"
      )
      .forEach((el, i) => {
        let founded = arrayIcons.find(
          (el) =>
            el.iconclass ==
            document.querySelectorAll(".dato-general i")[i].classList[0]
        );

        el.innerHTML += `<img src="https://files.renobo.com.co/sites/default/files/2023-05/${founded.iconimg}.png" alt="icono informacion adicional" class="icono-img-dato" />`;
      });
  }
  acortarTexto();
  if (document.querySelector("#photos-tab")) {
    document.querySelector("#photos-tab").innerHTML = "Multimedia";
  }

  // Obtén la etiqueta existente
  var icono = document.querySelector(".fas.fa-chevron-circle-right");
  var icono2 = document.querySelector(".fas.fa-chevron-circle-left");
  if (icono && icono2) {
    // Crea un nuevo elemento de imagen
    var imagen = document.createElement("img");
    var imagen2 = document.createElement("img");

    // Establece el atributo "src" de la imagen con la URL de la imagen que deseas usar
    imagen.src =
      "https://files.renobo.com.co/sites/default/files/2023-05/arow-right.png";
    imagen2.src =
      "https://files.renobo.com.co/sites/default/files/2023-05/arrow-left.png";
    imagen.classList.add("multimedia-arow-right");
    imagen2.classList.add("multimedia-arrow-left");
    // Reemplaza la etiqueta existente con la imagen
    icono.parentNode.replaceChild(imagen, icono);
    icono2.parentNode.replaceChild(imagen2, icono2);
  }
  if (
    document.querySelector("#photos") &&
    document.querySelector(
      ".paragraph.paragraph--type--videos.paragraph--view-mode--default video"
    )
  ) {
    document
      .querySelector("#photos")
      .appendChild(
        document.querySelector(
          ".paragraph.paragraph--type--videos.paragraph--view-mode--default video"
        )
      );
  }
});
