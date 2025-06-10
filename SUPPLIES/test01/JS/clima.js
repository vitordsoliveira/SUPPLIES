function buscarClima() {
    const btnClima = document.querySelector('.btnClima');
    const inputClima = document.querySelector('#inputClima');

    btnClima.addEventListener('click', (evento) => {
        evento.preventDefault();
        const cidade = inputClima.value;
        if (cidade === '') {
            return;
        }
        preverClima(cidade);
    });
}

async function preverClima(cidade) {
    let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=(sua_api_key)&lang=pt_br&units=metric`);


    if (api.ok) {
        let resposta = await api.json();
        console.log(resposta);
        exibirClima(resposta);
    } else {
        console.error("Erro ao buscar clima");
    }
}

function exibirClima(clima) {
    const climaContainer =  document.querySelector('.clima');
    climaContainer.innerHTML = `
        <h2>Clima em ${clima.name}</h2>
        <div class="clima-info">
            <p>Temperatura: ${clima.main.temp}°C</p>
        </div>
    `;
}
document.addEventListener("DOMContentLoaded", () => {
    buscarClima();
});

