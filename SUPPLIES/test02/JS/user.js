async function cadUser() {
    let name = document.getElementById('IDname').value;

    let email = document.getElementById('IDemail').value;

    let userType = 1;

    let password = document.getElementById('IDpassword').value;

    let cpf_cnpj = document.getElementById('IDcpf_cnpj').value;

    let termos = 1;

    let birthday = document.getElementById('IDbirthday').value;

    let dados = {        
        "name": name,
        "email": email,
        "user_type_id": userType,
        "password": password,
        "cpf_cnpj": cpf_cnpj,
        "terms": termos,
        "birthday": birthday
    };

    url = "https://go-wash-api.onrender.com/api/user"

    console.log("Dados enviados:", dados); // Adicione esta linha para verificar os dados

    let api = await fetch(url ,{
            method: "POST",
            body: JSON.stringify(dados),
            headers:{'Content-Type': 'application/json'}
        }
    );
    
    if (api.ok) {
        let response = await api.json();
        console.log(response);
        return;
    }
    let responseError = await api.json();
    console.log(responseError);
}