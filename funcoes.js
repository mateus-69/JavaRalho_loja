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
                 descricao:"Calça Jeans Masculina Azul Escuro",
                 valor:55.87,
                 qtde:3,
                 url: "https://static.dafiti.com.br/p/KS-CASUAL-&-SPORT-Cal%C3%A7a-Jeans-Delav%C3%AA-Masculino-Azul-Claro-II-4440-1520368-1-zoom.jpg"};
    listaprodutos.push(produto);
    produto={id:"Calça Jeans Feminina", 
                 descricao:"Calça Jeans Feminina Ciano",
                 valor:60.55,
                 qtde:20,
                 url:"https://images-americanas.b2w.io/produtos/01/00/img/107095/5/107095590_1GG.jpg"};
    listaprodutos.push(produto);
    produto={id:"Mascara do Zelda", 
                 descricao:"A Máscara do Herói do Link",
                 valor:120.67,
                 qtde:20,
                 url: "https://s2.glbimg.com/7xtuvCGFaqzMAjlhurC2BMiIxK0=/0x0:589x382/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/c/C/AaABzLR2iOriDGeyTrCg/2016-01-21-mm-boss-majorasmask.jpg"};
    listaprodutos.push(produto);
    produto={id:"Mouse", 
                 descricao:"Mouse Sem Fio Bluetooth",
                 valor:20.00,
                 qtde:5,
                 url:"https://img.ibxk.com.br/2020/05/21/21010449898023.jpg?w=1120&h=420&mode=crop&scale=both"};
    listaprodutos.push(produto);
    return listaprodutos;
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
        alert("Operacao não disponível");        
    }
    return false;
}

function gravaDados(nomeChave, conteudo){
    if (window.localStorage){        
        let dados = JSON.stringify(conteudo);
        localStorage.setItem(nomeChave,dados);
    }
    else{
        alert("Operação não disponível.");
    }
}