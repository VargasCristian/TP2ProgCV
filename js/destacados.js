const peliculas = [
    { titulo: "Intensamente 2", anio: 2024, genero: "Animación" },
    { titulo: "Spider-Man: No Way Home", anio: 2021, genero: "Acción" },
    { titulo: "Coco", anio: 2017, genero: "Animación" },
    { titulo: "Avengers: Endgame", anio: 2019, genero: "Acción" },
    { titulo: "Volver al Futuro", anio: 1985, genero: "Ciencia ficción" }
    { titulo: "El Padrino", anio: 1972, genero: "Drama" }
];

const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
const contadorTexto = document.getElementById("contador");

peliculas.forEach(function(pelicula) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.classList.add("tarjeta-clickeable");

    tarjeta.innerHTML = `
        <h3>${pelicula.titulo}</h3>
        <p>Año: ${pelicula.anio}</p>
        <p>${pelicula.genero}</p>
    `;

    tarjeta.addEventListener("click", function() {
        tarjeta.classList.toggle("seleccionada");
        actualizarContador();
    });

    contenedorTarjetas.appendChild(tarjeta);
});

function actualizarContador() {
    let seleccionadas = document.querySelectorAll(".tarjeta.seleccionada");
    contadorTexto.textContent = "Tarjetas seleccionadas: " + seleccionadas.length;
}
