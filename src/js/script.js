const encontrarValorEl = (valueEl) => {
    const el = document.querySelector(valueEl).value
    return el
}

const form = document.querySelector("form")
historico = []
historicoDiv = document.querySelector("#historico")

function calculadora(valor1, valor2, operacao) {
    operacao(valor1, valor2)
}
function enviarFormulario(ev) {
    ev.preventDefault()
    historicoDiv.innerHTML = " "
    let resultado = 0
    const v1 = encontrarValorEl("#v1")
    const operacao = encontrarValorEl("#operacao")
    const v2 = encontrarValorEl("#v2")
    switch (operacao) {
        case "+":
            calculadora(v1, v2, function (v1, v2) {
                resultado = Number(v1) + Number(v2)

            })
            break
        case "-":
            calculadora(v1, v2, function (v1, v2) {
                resultado = Number(v1) - Number(v2)
            })
            break
        case "/":
            calculadora(v1, v2, function (v1, v2) {
                resultado = Number(v1) / Number(v2)
            })
            break
        case "*":
            calculadora(v1, v2, function (v1, v2) {
                resultado = Number(v1) * Number(v2)
            })
            break
        default:
            resultado = "Operação inválida"
    }


    if (historico.length == 5) {
        historico.unshift(String(v1 + " " + operacao + " " + v2 + " = " + resultado))
        historico.pop();
        historico.map((item) => {
            const el = document.createElement("p")
            el.textContent = item
            historicoDiv.appendChild(el)
        })
        return
    }
    historico.push(String(v1 + " " + operacao + " " + v2 + " = " + resultado))
    historico.map((item) => {
        const el = document.createElement("p")
        el.textContent = item
        historicoDiv.appendChild(el)
    })
}

form.addEventListener("submit", enviarFormulario)

