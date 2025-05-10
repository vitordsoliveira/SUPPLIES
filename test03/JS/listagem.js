async function listagem() {

    let token = JSON.parse(localStorage.getItem('user'));

    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "GET",
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer` + {token} }
    });

    if (api.ok) {
        let response = await api.json();
        console.log(response);
    } else {
        console.log("Erro ao listar");
    }
}
