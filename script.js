function calc(operacao) {
    var n1 = parseFloat(document.getElementById("n1").value);
    var n2 = parseFloat(document.getElementById("n2").value);
    switch(operacao) {
    case "+":    var resultado = n1 + n2;   break;
    case "-":    var resultado = n1 - n2;   break;
    case "*":    var resultado = n1 * n2;   break;
    case "/":    var resultado = n1 / n2;   break;
    }
    document.getElementById("saida").value = resultado;
}