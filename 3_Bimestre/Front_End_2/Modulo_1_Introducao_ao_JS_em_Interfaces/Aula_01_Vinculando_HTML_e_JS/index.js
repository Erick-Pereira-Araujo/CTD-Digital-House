const btn = document.querySelector("#send");
var numAdicioado;
let array = [];
var paragrafoFinal = document.querySelector('#valorFinal');
var paragrafoArray = document.querySelector('#array');
const finaliza = document.querySelector("#final");

btn.addEventListener("click", function(e){
    e.preventDefault();
    numAdicioado = document.querySelector("#adicionar").valueAsNumber;
    array.push(numAdicioado);
    paragrafoArray.innerHTML = 'Os valores do array são:'
    for(let i = 0; i<array.length; ++i){
        paragrafoArray.innerHTML += '<br/>' + 'Posição = ['+i+'] | Valor = ' +array[i];
    };
})

finaliza.addEventListener("click", function(e){
    e.preventDefault();
    let valorInicial = 0;
    paragrafoFinal.innerHTML = 'Os valores das somas são dados abaixo:';
    for(let i = 0; i<array.length; ++i){
        if(i==0){
            valorInicial = array[0] + array[1];
            paragrafoFinal.innerHTML += '<br/>' + 'Soma = '+(i+1)+' | Valor = '+valorInicial;
        }else if(i>1){
            valorInicial += array[i]
            paragrafoFinal.innerHTML += '<br/>' + 'Soma = '+i+' | Valor = '+valorInicial;
        }
    };
});


