
const classes = {
    score: document.getElementsByClassName('score'),
    level: document.getElementsByClassName('level'),
    play: document.getElementsByClassName('btn-play'),
    btn: document.getElementsByClassName('btn'),
    btnGreen: document.getElementsByClassName('green'),
    btnRed: document.getElementsByClassName('red'),
    btnBlue: document.getElementsByClassName('blue'),
    btnYellow: document.getElementsByClassName('yellow'),
    playAgain: document.getElementById('play-again')

}

let arrCores = ['red','yellow','red','blue']
let ordemCores = []
let ordemDosCliques = []



colorRandom = () => {
    let random = Math.floor(Math.random() * 4);
    //let corAtual = arrCores[random];
    ordemDosCliques.push(arrCores[random]);
}

animation = (btn,color) =>{
    btn.classList.add(`animacao${color}`)
    setTimeout(() =>{
        btn.classList.remove(`animacao${color}`)
    },1000)
}

animacaoDoButao = (btn,color) =>{
    setTimeout(() => {
        animation(btn,color)
    },2000);
}

comecarJogo = () =>{

    const play = document.getElementById('btn-play')
    play.addEventListener('click', jogadas)
}

jogadas = () =>{ 
    colorRandom();
    console.log('funcao jogada')
    
       
    for(let i = 0; i < ordemDosCliques.length; i++){
        mudaCor(ordemDosCliques[i]);
        console.log("mudaCor")
    }
}

mudaCor = () => {
    if(cor == 'verde'){
        botaoVerde.classList.add('muda-cor');
        setTimeout( () => (botaoVerde.classList.remove('muda-cor')), 3000);
        console.log('mudei de cor verde');
    }
    if(cor == 'amarelo'){
        botaoAmarelo.classList.add('muda-cor');
        setTimeout( () => (botaoAmarelo.classList.remove('muda-cor')), 3000);
        console.log('mudei de cor amarelo');
    }
    if(cor == 'vermelho'){
        botaoVermelho.classList.add('muda-cor');
        setTimeout( () => (botaoVermelho.classList.remove('muda-cor')), 3000);
        console.log('mudei de cor vermelho');
    }
    if(cor == 'azul'){
        botaoAzul.classList.add('muda-cor');
        setTimeout( () => (botaoAzul.classList.remove('muda-cor')), 3000)
        console.log('mudei de cor azul');
    }
}
 
eventosDosBotoes = () =>{
    const btns = [...document.getElementsByClassName('btn')]
    
    btns.forEach((elem) => {
        elem.addEventListener('click', (e) =>{
            const btn = e.target
            const btnColor = btn.classList[1]
            console.log(btnColor)
        })
    });
}
eventosDosBotoes()

