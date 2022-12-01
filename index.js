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
    let nome = document.getElementById("nome").value;    
    let sobrenome = document.getElementById("sobrenome").value;
    let CPF = document.getElementById("CPF").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    
    CPF = CPF.replace(".","");
    CPF = CPF.replace(".","");
    CPF = CPF.replace("-","");
    telefone = telefone.replace("(", "");
    telefone = telefone.replace(")", "");
    telefone = telefone.replace("-", "");
    
    var object = {"nome":nome, "sobrenome":sobrenome, "CPF":CPF, "email":email, "telefone":telefone};

    if (nome == "" || sobrenome == "" || CPF == "" || email == "" || telefone == ""){
        alert("Preencha todos os campos antes de enviar");
    } else {
        localStorage.setItem("Cadastros", JSON.stringify([...guarda,object]));
        alert("Cadastro feito com sucesso!");
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

testaCarrinho();