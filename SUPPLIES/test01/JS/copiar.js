async function copiarCep(id) {
    try {
        const token = localStorage.getItem('token');
        
        const response = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            console.log('Endereço não encontrado na API');
            alert('Endereço não encontrado na API');
            return;
        }

        const enderecoOriginal = await response.json();
        const enderecoCopiado = {
            title: enderecoOriginal.titulo,
            cep: enderecoOriginal.cep,
            address: enderecoOriginal.endereco,
            number: enderecoOriginal.numero,
            complement: enderecoOriginal.complemento
        };

        const apiResponse = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(enderecoCopiado)
        });

        if (!apiResponse.ok) {
            return;
        }

        alert("Endereço copiado com sucesso!");
        window.location.href = "listagem.html";
        
    } catch (error) {
        console.log("Erro ao copiar endereço:", error);
        alert(error.message || "Erro ao copiar endereço");
    }
}
