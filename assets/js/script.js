import Reproductor from "./reproductor.js";

// Definición de las URLs de multimedia
const nuevaUrlMusica = "https://www.youtube.com/embed/3jx-3fl-VZA?si=gK6ySUKtQDOcYKOn";
const nuevaUrlPeliculas = "https://www.youtube.com/embed/DCxHyycjj0Y?si=er4wNRKd6hpwbc-p";
const nuevaUrlSeries = "https://www.youtube.com/embed/QsHUw8_ZGPQ?si=ZycISnIhBT9KK_OR";

// Creación de instancias de Reproductor para diferentes tipos de multimedia
const musicaReproductor = new Reproductor(nuevaUrlMusica, "musica");
const peliculasReproductor = new Reproductor(nuevaUrlPeliculas, "peliculas");
const seriesReproductor = new Reproductor(nuevaUrlSeries, "series");

// Reproducción de multimedia
musicaReproductor.playMultimedia();
peliculasReproductor.playMultimedia();
seriesReproductor.playMultimedia();

// Configuración de puntos de inicio (ejemplo)
musicaReproductor.setInicio(30);
peliculasReproductor.setInicio(10);
seriesReproductor.setInicio(60);

// Actualización de elementos en el documento HTML
document.getElementById("musica").src = musicaReproductor.getURL();
document.getElementById("peliculas").src = peliculasReproductor.getURL();
document.getElementById("series").src = seriesReproductor.getURL();
