let submit = document.getElementById("submit");

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

    CPF = CPF.replace(".","");
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

//localStorage?
var testObject = { 'one': 1, 'two': 2, 'three': 3 };

// Put the object into storage
localStorage.setItem('testObject', JSON.stringify(testObject));

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('retrievedObject: ', JSON.parse(retrievedObject));

