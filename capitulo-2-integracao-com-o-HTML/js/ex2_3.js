function displayPromotion() {
    // criar referência aos elementos manipulados  pelo programa
    var inVehicle = document.getElementById("inVehicle")
    var inPrice = document.getElementById("inPrice")
    var outVehicle = document.getElementById("outVehicle")
    var outPrice = document.getElementById("outPrice")
    var outParcela = document.getElementById("outParcela")

    //  obtém conteúdo do campos de entada
    var vehicle = inVehicle.value
    var price = inPrice.value

    // calcula valor da entrada e das parcelas
    var entrada = price * 0.50
    var parcela = Number(inPrice.value)

    // altera o conteúdo dos parágrafos de resposta
    outVehicle.textContent = "Promoção: " + vehicle
    outPrice.textContent = "Entrada de R$: " + entrada.toFixed(2)
    outParcela.textContent = "12 Prestações de R$ " + parcela.toFixed(2)
}

// cria uma referência ao elemento btPromotion
var btPromotion = document.getElementById("btPromotion")
// registra um evento associado ao botão, para carregar uma função
btPromotion.addEventListener("click", displayPromotion)