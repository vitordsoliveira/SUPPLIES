function getQueryParam(param) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return urlSearchParams.get(param);
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
            method: 'POST',
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
