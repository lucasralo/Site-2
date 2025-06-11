const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
for (let i=0; i < botoes.length; i++){
    botoes [i] .onclick = function(){
        for (let j=0; j < botoes.length; j++){
            botoes [j] .classList.remove("ativo");
            textos [j] .classList.remove("ativo");
        }
        botoes [i].classList.add ("ativo");
        textos [i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoobjetivol = new Date ("2027-07-20T23:30:00");
const tempoobjetivo2 = new Date ("2028-03-15T22:12:00");
const tempoobjetivo3 = new Date ("2030-05-25T12:25:00");
const tempoobjetivo4 = new Date ("2029-02-10T23:37:00");
const tempos = [tempoObjetivol, tempoObjetivo2,tempoObjetivo3,tempoObjetivo4]
function atualizaCronometro (){
    for(let i = 0; i < contadores.length;i++){
       document.getElementById ("dias"+i).textContent = calculaTempo(tempos [i])[0]; 
       document.getElementById ("horas"+i).textContent = calculaTempo(tempos [i])[1];
       document.getElementById ("min"+i).textContent = calculaTempo(tempos [i])[2];
       document.getElementById ("seg"+i).textContent = calculaTempo(tempos [i])[3];
                    }
                    for (let i = 0; i < contadores.length; i++){
                        //contadores[i].textContext = calcuraTempo (tempos [i]);
                    }
}
function comecaCronometro (){
    atualizaCronometro ();
    setInterval (atualizaCronometro, 1000);
}
comecaCronometro();
function calculaTempo (tempoObjetivo){
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal/1000)
    let minutos = Math.floot(segundos/60);
    let horas = Math.fllor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %=60;
    minutos %=60;
    horas %=24;

    if (tempoFinal > 0){
        return [dias,horas,minutos,segundos];
    }else{
        return [0,0,0,0]
    }
}