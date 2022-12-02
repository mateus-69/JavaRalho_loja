let campo = document.querySelectorAll(".campos");
let divPedidos = document.querySelector(".pedidos");
let contador = lerDados("NPedido");
let divProdutos = document.querySelector(".produtos-fechados");
let listaprodutos = produtosIniciais();

console.log(contador)
for (let e = 0; e < contador; e++) {
    divPedidos.innerHTML += 
    `<a class="pedido">Pedido ${(e + 1)}:</a>
    <br>`
}

let pedido = document.querySelectorAll(".pedido");
let contagem = localStorage.getItem("NPedido");

console.log(contagem);

for (let i = 0; i < contagem; i++) {
    pedido[i].addEventListener("click", () => {
        divProdutos.innerHTML = "";
        for (let i = 0; i < contagem; i++) {
            pedido[i].id = ("pedido" + parseFloat(i+1))
            campo[i].id = ("dados" + parseFloat(i+1))  
        }
            let dadinhos = lerDados(campo[i].id)
            let tango = lerDados(pedido[i].id)
            console.log(tango[0])
            for (let e = 0; e < campo.length; e++) {
                campo[e].innerHTML = dadinhos[e]
                
            }
            for (let i = 0; i < tango.length; i++) {
                divProdutos.innerHTML += 
                `<ul id = "${tango[i].id}" class = "item"> 
                    <li>${tango[i].id}</li>
                    <ul>
                        <li> Quantidade: ${tango[i].qtde} <input class = "add" type = "button" value = "+"/> 
                        <input class = "sub" type = "button" value = "-"/> </li>
                        <li> Valor Total: ${valor(listaprodutos[i].valor*tango[i].qtde)} </li>
                    </ul>
                </ul>`
            }
        }
    )
}