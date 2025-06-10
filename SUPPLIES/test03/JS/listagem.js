async function listagem() {
    const token = localStorage.getItem("token");

    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    if (api.ok) {
        let endereco = await api.json();
        console.log(endereco);

        const tabela = document.getElementById("tableList");
        const lista = Array.isArray(endereco) ? endereco : endereco.addresses || endereco.data || [];

        lista.forEach(item => {
            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td>${item.title}</td>
                <td>${item.address}</td>
                <td>${item.number}</td>
                <td>${item.cep}</td>
                <td>${item.complement}</td>
                <td class="btnCenter">
                    <a href="attCep.html?id=${item.id || item._id}">
                        <input class="btnInputCep btnAtt" type="button" value="ATUALIZAR">
                    </a>
                    <input class="btnInputCep btnAtt btnCopiar" type="button" value="COPIAR" data-id="${item.id || item._id}">
                </td>
                <td class="btnCenter">
                    <input class="btnInputCep btnDel" type="button" value="DELETAR" onclick="delCep('${item.id || item._id}')"/>
                </td>`;

            tabela.appendChild(linha);
        });

        // Adiciona eventos de cópia aos botões após carregar a tabela
        document.querySelectorAll('.btnCopiar').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const id = e.target.dataset.id;
                const itemOriginal = lista.find(i => (i.id || i._id) == id);
                if (!itemOriginal) return;

                // Prepara o novo endereço com algumas alterações para não ser idêntico
                const novoEndereco = {
                    title: `${itemOriginal.title} (Cópia)`,
                    address: itemOriginal.address,
                    number: itemOriginal.number,
                    cep: itemOriginal.cep,
                    complement: itemOriginal.complement
                };
                
                const resp = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(novoEndereco)
                });

                if (resp.ok) {
                    alert("Endereço copiado com sucesso!");
                    location.reload(); // Recarrega para atualizar a tabela
                } else {
                    alert("Erro ao copiar endereço.");
                }
            });
        });

    } else {
        console.log("Erro ao listar");
    }
}

window.onload = function () {
    listagem();
};
