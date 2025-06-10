async function logOut() {
    const location = 'https://go-wash-api.onrender.com/api/auth/logout';
    const token = localStorage.getItem('token');

    if (!token) {
        alert("Usuário não está autenticado!");
        return;
    }

    try {
        const response = await fetch(location, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (response.ok) {
            alert("Logout realizado com sucesso!");
            localStorage.clear();
            window.location = "index.html";
        } else {
            const data = await response.json();
            console.log(data);
            alert("Erro ao fazer logout!");
        }
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Erro de conexão ao fazer logout.");
    }
}