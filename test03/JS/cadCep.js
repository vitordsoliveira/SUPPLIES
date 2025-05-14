async function cadastroEndereco() {
    let titulo = document.getElementById('tituloCEP').value;
    let cep = document.getElementById('cepCEP').value;
    let endereco = document.getElementById('enderecoCEP').value;
    let numero = document.getElementById('numeroCEP').value;
    let complemento = document.getElementById('complementoCEP').value;
    
    let token = JSON.parse(localStorage.getItem('user'));

    let novoEndereco = {
        title: titulo,
        cep: cep,
        address: endereco,
        number: numero,
        complement: complemento
    };

    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(novoEndereco)
    }
);

    if (api.ok) {
        let response = await api.json();
        console.log("Endereço cadastrado:", response);
        window.location = "listagem.html";
        alert("Cadastro com Sucesso")
    } else {
        console.log("Erro ao cadastrar");
        alert("Erro ao cadastrar")
    }
}
