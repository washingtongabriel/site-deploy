function exibirMensagem(event) {
    event.preventDefault(); // Prevent page reload

    document.getElementById("formulario").style.display = "none";
    document.getElementById("mensagem-obrigado").style.display = "block";

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    const dados = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    enviarParaWebhook(dados);
}