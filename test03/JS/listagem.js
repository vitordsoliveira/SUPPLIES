async function listagem() {

    let token = JSON.parse(localStorage.getItem('token'));

    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "GET",
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer {token}'}
    });
    let endereco = await response.json();

    document.getElementById("titulo").textContent = endereco.title || '';
    document.getElementById("endereco").textContent = endereco.address || '';
    document.getElementById("numero").textContent = endereco.number || '';
    document.getElementById("cep").textContent = endereco.cep || '';
    document.getElementById("complemento").textContent = endereco.complement || '';

    if (api.ok) {
        let response = await api.json();
        console.log(response);
    } else {
        console.log("Erro ao listar");
    }
}
