let submit = document.getElementById("submit");
let fechar = document.getElementById("fechar");

if (localStorage.getItem("Cadastros") == null){
    localStorage.setItem("Cadastros", "[]");
}

submit.addEventListener("click", registra, () => {
    fechar.href = "index.html";
});

function testaCarrinho() {
    let tesla = lerDados("Carrinho");
    for(let i = 0; i < listaprodutos.length; i++){
        if (tesla.find(e => e.id == listaprodutos[i].id) && tesla.find(e => e.id == listaprodutos[i].id).qtde >= listaprodutos[i].qtde-1){
            add[i].disabled = true;
        }
    }
}

function registra() {
    var guarda = JSON.parse(localStorage.getItem("Cadastros"));
    // let nome = document.getElementById("nome").value;    
    // let sobrenome = document.getElementById("sobrenome").value;
    // let CPF = document.getElementById("CPF").value;
    // let email = document.getElementById("email").value;
    // let telefone = document.getElementById("telefone").value;
    // let cep = document.getElementById("cep").value;
    // let rua = document.getElementById("logradouro").value;
    // let bairro = document.getElementById("bairro").value;
    // let cidade = document.getElementById("cidade").value;
    // let estado = document.getElementById("estado").value;
    // let numero = document.getElementById("numero").value;
    // let complemento = document.getElementById("complemento").value;
    
    // CPF = CPF.replace(".","");
    // CPF = CPF.replace(".","");
    // CPF = CPF.replace("-","");
    // telefone = telefone.replace("(", "");
    // telefone = telefone.replace(")", "");
    // telefone = telefone.replace("-", "");
    
    let object = document.querySelectorAll(".col")
    
    for (let e = 0; e < object.length; e++) {
        if (nome == "" || sobrenome == "" || CPF == "" || email == "" || telefone == ""){
            alert("Preencha todos os campos antes de enviar");
        } else {
            localStorage.setItem("Cadastros", JSON.stringify([...guarda,object[e].value]));
            alert("Cadastro feito com sucesso!");
            break;
        }
    }
}

let ligma = document.querySelectorAll(".image");
let derbi = document.querySelectorAll(".desc");
let monye = document.querySelectorAll(".valor");
let qtde = document.querySelectorAll(".qtde");

//pegando e aparecer objetos produtos
let listaprodutos = produtosIniciais();
for (let i = 0; i < listaprodutos.length; i++) {
    for (let j = 0; j < listaprodutos.length; j++) {
        ligma[i].src = listaprodutos[i].url;
        derbi[i].innerHTML = listaprodutos[i].descricao;
        monye[i].innerHTML = listaprodutos[i].valor;
    }
}

//carrinho
let add = document.querySelectorAll(".somar");
let carrinho = [];

function escreverCarrinho(){
    divisao.innerHTML = "";
    pedido = lerDados("Carrinho");
    for (let i = 0; i < pedido.length; i++) {
        divisao.innerHTML += 
        `<ul id = "${pedido[i].id}" class = "item"> 
            <li>${pedido[i].id}</li>
            <ul>
                <li> Quantidade: ${pedido[i].qtde} <input class = "add" type = "button" value = "+"/> 
                <input class = "sub" type = "button" value = "-"/> </li>
                <li> Valor Total: ${valor(listaprodutos[i].valor*pedido[i].qtde)} </li>
            </ul>
        </ul>`        
    }
    let carrinho = lerDados("Carrinho");
    let itens = document.querySelectorAll(".item");

    itens.forEach(item => {
        item.querySelector(".add").addEventListener("click", ()=>{
            carrinho.find(e => e.id == item.id).qtde +=1;
            gravaDados("Carrinho", carrinho);
            escreverCarrinho()
        });

        item.querySelector(".sub").addEventListener("click", ()=>{
            carrinho.find(e => e.id == item.id).qtde -=1;
            if (carrinho.find(e => e.id == item.id).qtde == 0){
                carrinho = carrinho.filter(e => e.id != item.id)
            }
            gravaDados("Carrinho", carrinho);
            escreverCarrinho()
        });
    });
}


if (localStorage.getItem("Carrinho") == null){
    localStorage.setItem("Carrinho", "[]");
}

for (let i = 0; i < add.length; i++) {
    add[i].addEventListener("click", () => {
        carrinho = lerDados("Carrinho");
        
        if (carrinho.find(e => e.id == listaprodutos[i].id) === undefined){
            carrinho.push({id: listaprodutos[i].id, qtde: 1})
        } else {
            carrinho.find(e => e.id == listaprodutos[i].id).qtde += 1;
            testaCarrinho();
        }
        localStorage.setItem("Carrinho", JSON.stringify(carrinho));
    })
}

let fecha = document.getElementById("carrinho");
let divisao = document.getElementById("divisao");
let pedido = [];

if (localStorage.getItem("Pedido") == null){
    localStorage.setItem("Pedido", "[]");
}

//pegar os dados dentro do localStorage do carrinho e salvar dentro do localStorage de pedido como pedido n;
fecha.addEventListener("click", () => {
    escreverCarrinho()
})

escreverCarrinho();
testaCarrinho();