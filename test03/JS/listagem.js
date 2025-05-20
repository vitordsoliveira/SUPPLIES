async function listagem() {
    const token = localStorage.getItem("token");

    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (api.ok) {
        let endereco = await api.json();
        console.log(endereco);

        const tabela = document.getElementById("tableList");
        const lista = Array.isArray(endereco) ? endereco : endereco.addresses || endereco.data || [];

        lista.forEach(item => {
            const linha = document.createElement("tr");

        linha.innerHTML = `
        <td>${item.title}</td>
        <td>${item.address}</td>
        <td>${item.number}</td>
        <td>${item.cep}</td>
        <td>${item.complement}</td>
        <td><input class="btnAttCep btnInputCep" value="Atualizar"></input></td>
        <td><input class="btnDelCep btnInputCep" value="Deletar"></input></td> `;
        tabela.appendChild(linha);
        });

    } else {
        console.log("Erro ao listar");
    }
}

window.onload = function () {
    listagem();
}
