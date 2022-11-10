<<<<<<< HEAD
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    alert(document.getElementById("nome").value);
})

//localStorage?
var testObject = { 'one': 1, 'two': 2, 'three': 3 };
=======
let submit = document.getElementById("submit");
>>>>>>> f24e04133c2c74450c606ae1e7685e9a20412139

if (localStorage.getItem("Cadastros") == null){
    localStorage.setItem("Cadastros", "[]");
}


submit.addEventListener("click", () => {
    var guarda = JSON.parse(localStorage.getItem("Cadastros"));
    let nome = document.getElementById("nome").value;    
    let sobrenome = document.getElementById("sobrenome").value;
    let CPF = document.getElementById("CPF").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;

    CPF = CPF.replace("-","");
    telefone = telefone.replace("(", "");
    telefone = telefone.replace(")", "");
    telefone = telefone.replace("-", "");
    
    if (nome == "" || sobrenome == "" || CPF == "" || email == "" || telefone == ""){
        alert("Preencha todos os campos antes de enviar");
    } else {
        localStorage.setItem("Cadastros", JSON.stringify([...guarda,object]));
        alert("Cadastro feito com sucesso!");
    }
    
    var object = {"nome":nome, "sobrenome":sobrenome, "CPF":CPF, "email":email, "telefone":telefone};
})
