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
                </td>

                <td class="btnCenter">
                    <input class="btnInputCep btnDel" type="button" value="DELETAR" onclick="delCep('${item.id || item._id}')"/>

                <td class="btnCenter">
                    <input class="btnInputCep btnAtt btnCopiar" type="button" value="COPIAR" data-id="${item.id || item._id}">
                </td>`;

            tabela.appendChild(linha);
        });

            document.querySelectorAll('.btnCopiar').forEach(btn => {
            btn.addEventListener('click', async e => {
                const id = e.target.dataset.id;
                const item = lista.find(item => (item.id || item._id) == id);
                if (!item) return;

                const copiaEndereco = {
                title: item.title,
                address: item.address,
                number: item.number,
                cep: item.cep,
                complement: item.complement
                };

                const api = await fetch("https://go-wash-api.onrender.com/api/auth/address", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify(copiaEndereco)
                });
                if (api.ok) {
                    alert("Endereço copiado com sucesso!");
                    window.location.href = "listagem.html";
                } else {
                    alert("Erro ao copiar endereço.");
                }
            });
        });
    }
}

window.onload = function () {
    listagem();
};
