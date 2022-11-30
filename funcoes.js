//função do carrinho
function valor(numero){
    // formata um valor no padrão da moeda do Brasil
    return new Intl.NumberFormat("pt-BR",
            {style:"currency",
             currency:"BRL"})
                 .format(numero);
         // R$
}

function relogio(){
    let tempo = new Date;
    let h = (tempo.getHours() < 10 ? "0": "" ) 
            + tempo.getHours() ;
    let m = (tempo.getMinutes() < 10 ? "0": "") 
            + tempo.getMinutes();
    let s = (tempo.getSeconds() < 10 ? "0":"")
            + tempo.getSeconds();
    return h +":"+m+":"+s;
}

function produtosIniciais(){
    let listaprodutos = [];
    let produto={id:"Calça Jeans masculina", 
                 descricao:"Calça Jeans Masculina azul escuro",
                 valor:55.87,
                 qtde:3,
                 url: "https://static.dafiti.com.br/p/KS-CASUAL-&-SPORT-Cal%C3%A7a-Jeans-Delav%C3%AA-Masculino-Azul-Claro-II-4440-1520368-1-zoom.jpg"};
    listaprodutos.push(produto);
    produto={id:"Calça Jeans feminina", 
                 descricao:"Calça Jeans feminina ciano",
                 valor:60.55,
                 qtde:20,
                 url:"https://images-americanas.b2w.io/produtos/01/00/img/107095/5/107095590_1GG.jpg"};
    listaprodutos.push(produto);
    produto={id:"Batedeira", 
                 descricao:"Batederira planetária",
                 valor:120.67,
                 qtde:20,
                 url: "./imagens/03868a5f80e6b886ea5805d9bac1a81e.jpg"};
    listaprodutos.push(produto);
    produto={id:"Mouse", 
                 descricao:"Mouse sem fio bluetooth",
                 valor:20.00,
                 qtde:1,
                 url:"https://img.ibxk.com.br/2020/05/21/21010449898023.jpg?w=1120&h=420&mode=crop&scale=both"};
    listaprodutos.push(produto);
    return listaprodutos;
    }


    
// function lerDados(nomeChave){
//     //localStorage.clear();
//     if  (window.localStorage){
//         let aux = JSON.parse(
//             localStorage.getItem(nomeChave));
//         let dados;
//         if (aux != null){
//            dados = aux;
//         }
//         else{
//             dados = [];
//         }
//         return dados;
//     }
//     else{
//         alert("operacao não disponível");        
//     }
//     return false;
// }