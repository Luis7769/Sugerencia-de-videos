import Multimedia from "./multimedia.js";

class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url); // Llama al constructor de la superclase
    let _id = id; // Inicializa la variable privada _id

    // Función para mostrar el video en un iframe
    const mostrarVideo = function (url, id) {
      const iframe = document.getElementById(id);
      iframe.setAttribute("src", url);
    };

    // Método para reproducir multimedia
    this.playMultimedia = function () {
      mostrarVideo(this.getURL(), _id); // Llama a la función mostrarVideo
    };

    // Método para establecer el tiempo de inicio del contenido multimedia
    this.setInicio = function (tiempo) {
      const url = this.getURL() + `?start=${tiempo}`; // Agrega el tiempo de inicio a la URL
      mostrarVideo(url, _id); // Llama a la función mostrarVideo con la URL modificada
    };
  }
}

export default Reproductor; // Exporta la clase Reproductor como exportación predeterminada
