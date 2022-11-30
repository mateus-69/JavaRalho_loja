let submit = document.getElementById("submit");
let fechar = document.getElementById("fehcar");

if (localStorage.getItem("Cadastros") == null){
    localStorage.setItem("Cadastros", "[]");
}

submit.addEventListener("click", registra, () => {
    fechar.href = "index.html";
});

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
    
    //verificar se cadastro já existe
    lerDados(CPF);
    
    if (nome == "" || sobrenome == "" || CPF == "" || email == "" || telefone == ""){
        alert("Preencha todos os campos antes de enviar");
    } else {
        localStorage.setItem("Cadastros", JSON.stringify([...guarda,object]));
        alert("Cadastro feito com sucesso!");
    }
}

function lerDados(nomeChave){
    //localStorage.clear();
    if  (window.localStorage){
        let aux = JSON.parse(
            localStorage.getItem(nomeChave));
        let dados;
        if (aux != null){
           dados = aux;
        }
        else{
            dados = [];
        }
        return dados;
    }
    else{
        alert("operacao não disponível");        
    }
    return false;
}

let ligma = document.querySelectorAll(".img");
let derbi = document.querySelectorAll(".desc");
let monye = document.querySelectorAll(".valor");
let qtde = document.querySelectorAll(".qtde");

//pegando objetos produtos
let listaprodutos = produtosIniciais();
for (let i = 0; i < produtosIniciais.length; i++) {
    ligma[i].src = produtosIniciais[i].url;
    derbi[i].innerHTML = produtosIniciais[i].id;
    console.log(produtosIniciais[i].url);

}