async function delCep(id) {
    const confirmDelete = confirm("Você realmente quer deletar este endereço?");
    if (!confirmDelete) {
        return;
    }

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
            alert("Endereço deletado com sucesso!", "success");
            location.reload();
        } else {
            console.log("Erro ao deletar endereço.");
            alert("Erro ao deletar endereço.", "error");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro na comunicação com o servidor.", "error");
    }
}