const bebidas = [
    { nombre: "Café con leche", categoria: "caliente" },
    { nombre: "Té", categoria: "caliente" },
    { nombre: "Mate", categoria: "caliente" },
    { nombre: "Chocolatada", categoria: "caliente" },
    { nombre: "Jugo de naranja", categoria: "fria" },
    { nombre: "Limonada", categoria: "fria" },
    { nombre: "Agua saborizada", categoria: "fria" },
    { nombre: "Coca-Cola", categoria: "fria" }

];

const contenedorBebidas = document.getElementById("contenedor-bebidas");
const btnTodas = document.getElementById("btn-todas");
const btnCalientes = document.getElementById("btn-calientes");
const btnFrias = document.getElementById("btn-frias");

function mostrarBebidas(lista) {
    contenedorBebidas.innerHTML = "";

    lista.forEach(function(bebida) {
        let div = document.createElement("div");
        div.classList.add("tarjeta");

        if (bebida.categoria === "caliente") {
            div.innerHTML = `
                <h3>${bebida.nombre}</h3>
                <p>Bebida caliente</p>
            `;
        } else {
            div.innerHTML = `
                <h3>${bebida.nombre}</h3>
                <p>Bebida fría</p>
            `;
        }

        contenedorBebidas.appendChild(div);
    });
}

mostrarBebidas(bebidas);

btnTodas.addEventListener("click", function() {
    mostrarBebidas(bebidas);
});

btnCalientes.addEventListener("click", function() {
    let calientes = bebidas.filter(function(bebida) {
        return bebida.categoria === "caliente";
    });
    mostrarBebidas(calientes);
});

btnFrias.addEventListener("click", function() {
    let frias = bebidas.filter(function(bebida) {
        return bebida.categoria === "fria";
    });
    mostrarBebidas(frias);
});

