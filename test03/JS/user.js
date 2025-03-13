async function cadUser(){
    let name = IDname
    let email = IDemail
    let userType = 1
    let password = IDpassword
    let cpf_cnpj = IDcpf_cnpj
    let termos = 1
    let birthday = IDbirthday

    dados = {        
        "name": name,
        "email": email,
        "user_type_id": userType,
        "password": password,
        "cpf_cnpj": cpf_cnpj,
        "terms": termos,
        "birthday": birthday
    }

    let api = await fetch(
        "https://go-wash-api.onrender.com/api/user",{
            method:"POST",
            body:JSON.stringify(dados),
            headers:{
                'Content-Type':'application/json'
            }
        }
    );
    if(api.ok){
        let response = await api.json()
        console.log(response);
        return
    }
    let responseError = await api.json()
    console.log(responseError);
}
        
    

