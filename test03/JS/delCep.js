async function delCep(id) {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`https://go-wash-api.onrender.com/api/auth/address/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            console.log("Endereço deletado com sucesso.");
            showMessage("Endereço deletado com sucesso!", "success");
            location.reload();
        } else {
            console.log("Erro ao deletar endereço.");
            showMessage("Erro ao deletar endereço.", "error");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        showMessage("Erro na comunicação com o servidor.", "error");
    }
}

