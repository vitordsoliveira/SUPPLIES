async function logUser() {

    let email = document.getElementById('IDemail').value;

    let password = document.getElementById('IDpassword').value;

    let url = 'https://go-wash-api.onrender.com/api/login';

    let data = {        
        "email": email,
        "password": password,
        "user_type_id": 1
    };

    let api = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });

    if (api.ok) {
        let response = await api.json();
        console.log(response);
        alert("LOGIN REALIZADO COM SUCESSO!")

    } else {
        let response = await api.json();
        console.log(response);
        alert("LOGIN NÃO REALIZADO!")
    }
}

