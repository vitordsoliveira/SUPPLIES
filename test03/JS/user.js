async function cadUser() {

    let name = document.getElementById('IDname').value;

    let email = document.getElementById('IDemail').value;

    let password = document.getElementById('IDpassword').value;

    let cpf_cnpj = document.getElementById('IDcpf_cnpj').value;

    let birthday = document.getElementById('IDbirthday').value;

    let url = "https://go-wash-api.onrender.com/api/user";

    let dados = {        
        "name": name,
        "email": email,
        "user_type_id": 1,
        "password": password,
        "cpf_cnpj": cpf_cnpj,
        "terms": 1,
        "birthday": birthday
    };

    let api = await fetch(url, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: { 'Content-Type': 'application/json' }
    });
    
    if (api.ok) {
        let response = await api.json();
        console.log(response);
        alert("CADASTRO REALIZADO COM SUCESSO!")

    } else {
        let response = await api.json();
        console.log(response);
    }
}
