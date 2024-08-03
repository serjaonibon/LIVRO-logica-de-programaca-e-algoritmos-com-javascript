function convertDuration() {
    // aqui criamos as referências aos elementos da página
    var inTitle = document.getElementById("inTitle");
    var inDuration = document.getElementById("inDuration");
    var outTitle = document.getElementById("outTitle");
    var outResponse = document.getElementById("outResponse");

    // obtém conteúdos dos campos de entrada
    var title = inTitle.value;
    var duration = Number(inDuration.value);

    //arredonda para baixo o resultado da divisão
    var hour = Math.floor(duration / 60);
    // obtém o resto da divisão entre os números
    var minutes = duration % 60;

    // alerta o conteúdo dos parágrafos de resposta
    outTitle.textContent = title;
    outResponse.textContent = hour + " hora(s) e " + minutes + " minuto(s)";
}

// cria uma referência ao elemento btConverter (botão)
var btConverter = document.getElementById("btConverter");
// registra um evento associado ao botão, para carregar uma função
btConverter.addEventListener("click", convertDuration)