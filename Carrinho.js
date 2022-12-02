let cep = document.getElementById("cep");

const mostrar = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", (evento) => {
    console.log("alerta")
    let cepConvertido = cep.value.replace("-", "")
    let options = {
        method: 'GET',
        mode: 'cors',
        chache: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cepConvertido}/json/`)
        .then(response => {
            response.json().then(data => mostrar(data))
        })
        .catch(e => console.log('erro:' + e.message))
})

//Finalizar Pedido
let zutman = [];
zutman = lerDados("Carrinho");

window.addEventListener("load", () => {
let echo = document.querySelector(".echo")
let listaprodutos = produtosIniciais();

echo.innerHTML = "";
for (let i = 0; i < zutman.length; i++) {
    echo.innerHTML += 
    `<ul id = "${zutman[i].id}" class = "item"> 
        <li>${zutman[i].id}</li>
        <ul>
            <li> Quantidade: ${zutman[i].qtde} <input class = "add" type = "button" value = "+"/> 
            <input class = "sub" type = "button" value = "-"/> </li>
            <li> Valor Total: ${valor(listaprodutos[i].valor*zutman[i].qtde)} </li>
        </ul>
    </ul>`        
    }
})

let contante = 0;
let fecharPedido = document.getElementById("fecharPedido");
let cpf = document.getElementById("CPF");
let campo = document.querySelectorAll(".col");

cpf.addEventListener("blur", () => {
    if(localStorage.getItem(cpf.value)){
        let delta = lerDados(cpf.value)
        for (let e = 0; e < campo.length; e++) {
            campo[e].value = delta[e] 
        }
    }
})

fecharPedido.addEventListener("click", () => {
    let conta = localStorage.getItem("NPedido");
    conta ++
    
    localStorage.setItem("NPedido", conta);
    gravaDados(("pedido" + conta), zutman); 
    
    let camposValor = []

    for (let i = 0; i < campo.length; i++) {
        camposValor[i] = campo[i].value;
    }
    gravaDados(camposValor[0], camposValor)
    gravaDados(("dados" + conta), camposValor)
    fecharPedido.href = "pedido-fechado.html"
})