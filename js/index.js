const meriendas = [
    "Medialunas",
    "Tostadas con mermelada",
    "Galletitas de chocolate",
    "Alfajores",
    "Budín de limón",
    "Yogur con cereales",
    "Sándwich de jamón y queso",
    "Tarta de manzana",
    "Panqueques con dulce de leche",
    "Ensalada de frutas"
];


const listaMeriendas = document.getElementById("lista-meriendas");

meriendas.forEach(function(merienda) {
    let li = document.createElement("li");
    li.textContent = merienda;
    listaMeriendas.appendChild(li);
});


const btnContar = document.getElementById("btn-contar");
const resultado = document.getElementById("resultado");

btnContar.addEventListener("click", function() {
    resultado.textContent = "El menú tiene " + meriendas.length + " meriendas disponibles.";
    resultado.style.display = "block";
});
