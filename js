function calcularImovel(metragemimovel, metragemlocal, quarto) {
    let precoFinal;

    switch(quarto) {
        case 1:
            precoFinal = metragemimovel * metragemlocal * 1;
            break;
        case 2:
            precoFinal = metragemimovel * metragemlocal * 1.2;
            break;
        case 3:
            precoFinal = metragemimovel * metragemlocal * 1.3;
            break;
        case 4:
            precoFinal = metragemimovel * metragemlocal * 1.4;
            break;
        default:
            document.getElementById('resultado').innerHTML = "Não permitido. O número de quartos deve ser abaixo de 4."
            return;
    }
    
    document.getElementById('resultado').innerHTML = "O valor final é de: R$" + precoFinal.toFixed(2);
}

document.getElementById("formImovel").addEventListener("submit", function(event) { 
    event.preventDefault();
    let metragemimovel = parseFloat(document.getElementById('metragemimovel').value);
    let metragemlocal = parseFloat(document.getElementById('metragemlocal').value);
    let quarto = parseInt(document.getElementById('quarto').value);
    calcularImovel(metragemimovel, metragemlocal, quarto);
});
