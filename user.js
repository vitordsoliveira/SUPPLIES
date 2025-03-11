async function cadUser(){
    let name = "USER"
    let email = "slavcho8054@uorak.com"
    let userType = 1
    let password = "senhaDoUser01@"
    let cpf_cnpj = "000.000.000-00"
    let termos = 1
    let birthday = "07/04/2004"

    dados = {        
        "name": name,
        "email": email,
        "user_type_id": userType,
        "password": password,
        "cpf_cnpj": cpf_cnpj,
        "termos": termos,
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
        
    

