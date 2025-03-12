async function cadUser(){
    let name = "USER"
    let email = "albas100@uorak.com"
    let userType = 1
    let password = "senhaDoUser01@"
    let cpf_cnpj = "000.000.000-00"
    let termos = 1
    let birthday = "2004-04-07"

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
        
    

