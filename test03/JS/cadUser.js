async function cadUser() {

    let name = document.getElementById('IDname').value;
    let email = document.getElementById('IDemail').value;
    let password = document.getElementById('IDpassword').value;
    let cpf_cnpj = document.getElementById('IDcpf_cnpj').value;
    let birthday = document.getElementById('IDbirthday').value;

    const isValidLength = password.length >= 8;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasCharM = /[A-Z]/.test(password);
    
    document.getElementById('charCount').style.color = isValidLength ? 'green' : 'red';
    document.getElementById('specialChar').style.color = hasSpecialChar ? 'green' : 'red';
    document.getElementById('number').style.color = hasNumber ? 'green' : 'red';
    document.getElementById('hasCharM').style.color = hasCharM ? 'green' : 'red';
    
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

    if (name == "" || email == "" || password == "" || cpf_cnpj == "" || birthday == "") {
        alert("Preencha todos os campos!");
        return;
    }
    
    if (!isValidLength || !hasSpecialChar || !hasNumber || !hasCharM) {
        alert("A senha deve conter pelo menos:\n- 8 caracteres\n- 1 caractere especial\n- 1 número\n- 1 letra maiúscula");
        return;
    }
    
    if (cpf_cnpj.length > 14) {
        alert("O CPF deve ter no máximo 11 digitos!");
        return;
    }
    if (birthday.length > 10) {
        alert("A data de nascimento deve ter no máximo 8 digitos!");
        return;
    }

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
        alert("CADASTRO NÃO REALIZADO!")
    }
}



