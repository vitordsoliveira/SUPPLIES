function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

async function carregarEndereco() {
    const enderecoId = getQueryParam("id");
    if (!enderecoId) {
        alert("ID do endereço não informado.");
        return;
    }

    const token = localStorage.getItem('token');

    try {
        const resposta = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${enderecoId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!resposta.ok) throw new Error("Erro ao buscar endereço.");

        const dados = await resposta.json();

        document.getElementById('tituloCEP').value = dados.title;
        document.getElementById('cepCEP').value = dados.cep;
        document.getElementById('enderecoCEP').value = dados.address;
        document.getElementById('numeroCEP').value = dados.number;
        document.getElementById('complementoCEP').value = dados.complement;

    } catch (erro) {
        console.error(erro);
        alert("Erro ao carregar os dados do endereço.");
    }
}

async function atualizarEndereco() {
    const enderecoId = getQueryParam("id");
    const token = localStorage.getItem('token');

    const titulo = document.getElementById('tituloCEP').value;
    const cep = document.getElementById('cepCEP').value;
    const endereco = document.getElementById('enderecoCEP').value;
    const numero = document.getElementById('numeroCEP').value;
    const complemento = document.getElementById('complementoCEP').value;

    const enderecoAtualizado = {
        title: titulo,
        cep: cep,
        address: endereco,
        number: numero,
        complement: complemento
    };

    try {
        const resposta = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${enderecoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(enderecoAtualizado)
        });

        if (!resposta.ok) throw new Error("Erro ao atualizar endereço.");

        alert("Endereço atualizado com sucesso!");
        window.location.href = "listagem.html";
    } catch (erro) {
        console.error(erro);
        alert("Erro ao atualizar o endereço.");
    }
}

window.onload = carregarEndereco;
