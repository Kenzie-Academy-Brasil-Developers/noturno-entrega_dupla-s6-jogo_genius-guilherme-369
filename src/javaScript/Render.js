
createNav = () =>{
    const main = document.getElementById('main')

    const h1 = document.createElement('h1')
    h1.innerHTML='genius'

    const section = document.createElement('section')
    section.classList.add('nav')
    section.innerHTML=`

        <input id="btn-play" class="btn-play" type="button" value="play">
        <input id="play-again" class="btn-play" type="button" value="play again">

        <h2>Level:</h2>
        <p>0</p>

        <h2>Score:</h2>
        <p>0</p>    
    `

    main.appendChild(h1)
    main.appendChild(section)

}
createNav()

createTabuleiro = () =>{
    const main = document.getElementById('main')

    const container = document.createElement('section')
    container.classList.add('container')

    container.innerHTML = `
        <div class="btn green"></div>
        <div class="btn red"></div>
        <div class="btn blue"></div>
        <div class="btn yellow"></div>
    `
    const instrucoes = document.createElement('section')
    instrucoes.classList.add('box-how-play')

    instrucoes.innerHTML=`
    <h2>Instruções</h2>
    <p>1.Clique em Jogar, o Genius já vai dar o seu primeiro sinal!</p>
    <p>2.Repita o sinal, selecionando a mesma area colorida.</p>
    <p>3.Genius repetirá o primeiro sinal e vai acrescentar mais um.</p>
    <p>4.Repita então esses dois sinais, selecionando as areas coloridas.</p>
    <p>5.Genius repetirá os dois primeiros sinais e, na mesma sequência, aumentará mais um.</p>
    <p>6.Continue desta forma, enquanto você conseguir repetir cada sequência de sinais corretamente.</p>
    `
    main.appendChild(container)
    main.appendChild(instrucoes)
     
}
createTabuleiro()



