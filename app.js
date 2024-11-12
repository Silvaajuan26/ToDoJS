
let personas = [];


function crearTarjeta(persona) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h4>${persona.nombre}</h4>
        <p><strong>Edad:</strong> ${persona.edad}</p>
        <p><strong>Ciudad:</strong> ${persona.ciudad}</p>
    `;

    return card;
}


document.getElementById('personForm').addEventListener('submit', (e) => {
    e.preventDefault();

    
    const nombre = document.getElementById('name').value;
    const edad = document.getElementById('age').value;
    const ciudad = document.getElementById('city').value;

    
    const persona = {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad
    };

    personas.push(persona);  


    const cardsContainer = document.getElementById('cardsContainer');
    const tarjeta = crearTarjeta(persona);
    cardsContainer.appendChild(tarjeta);


    document.getElementById('personForm').reset();

    
    console.log(personas);
});
