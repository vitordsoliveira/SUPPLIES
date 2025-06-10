document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o input de senha e o botão
    const password = document.getElementById('IDpassword');
    const toggleButton = document.getElementById('togglePassword');

    // Função para alternar entre os tipos 'password' e 'text'
    toggleButton.addEventListener('click', function() {
        // Verifica o tipo atual e altera para o oposto
        if (password.type === 'password') {
            password.type = 'text';
            // Altera o conteúdo do botão para a imagem de "Ocultar"
            toggleButton.innerHTML = '<img class="block" src="IMG/blockView.png" alt="">';
        } else {
            password.type = 'password';
            // Altera o conteúdo do botão para a imagem de "Mostrar"
            toggleButton.innerHTML = '<img class="view" src="IMG/viewPass.png" alt="">';
        }
    });

    // Função para validar a senha
    document.getElementById('IDpassword').addEventListener('input', function () {
        var password = this.value;
        // Verificações individuais
        var isValidLength = password.length >= 8; // Verifica se tem pelo menos 8 caracteres
        var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password); // Verifica se há pelo menos um caractere especial
        var hasNumber = /\d/.test(password); // Verifica se há pelo menos um número
        var hasCharM = /[A-Z]/.test(password); // Verifica se há pelo menos uma letra maiúscula

        // Atualiza a cor e o status para cada requisito
        // Validação do comprimento
        if (isValidLength) {
            document.getElementById('charCount').style.color = 'green';
        } else {
            document.getElementById('charCount').style.color = 'red';
        }
        if (hasSpecialChar) {
            document.getElementById('specialChar').style.color = 'green';
        } else {
            document.getElementById('specialChar').style.color = 'red';
        }
        if (hasNumber) {
            document.getElementById('number').style.color = 'green';
        } else {
            document.getElementById('number').style.color = 'red';
        }
        if (hasCharM) {
            document.getElementById('hasCharM').style.color = 'green';
        } else {
            document.getElementById('hasCharM').style.color = 'red';
        }     
    });
});