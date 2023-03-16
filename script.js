function executarTudo(){
    /*
        Todas as linhas aqui nessa função serão executadas ao clicar no botão.
        Incluindo chamar outras funções!
    */

    /* Exemplos de funções */
    // funcaoDeExemplo01()
    // funcaoDeExemplo02("oi", 10)
    // const retornoExemplo = funcaoDeExemplo03(20, 50)
    // console.log(`Aqui para quem chamou a função 03, foi retornoado ${retornoExemplo}`)

    /*
        Exemplos para exercício 01 - !Descomente linha 20 e 22 para ver funcionando!
        Por enquanto, não se apegue muito no melhor código possível,
        apenas tenha como objetivo deixar a função mais genérica possível.
        Isso possibilitará você utilizar ela em diversas situações
    */
    // Não tão generica
    // alterarCorDoBoxModel01ParaVermelho()
    // Um pouco mais genérica para receber qualquer id e qualquer cor por parâmetro
    // alterarBackgroundDeElemento("boxModel01", "red")

    /* !!! Adicione abaixo novas chamadas de funções criadas por você !!! */
    alterarBackgroundDeElemento("boxModel01", "red")
    alterarBorda("boxModel02", "pink")
    sumirBoxModel03("boxModel03")
    aparecerBoxModel04("boxModel04")
    // fazerTalCoisa()
}

// function funcaoDeExemplo01(){
//     console.log("Uma função que faz algo, mas não tem parâmetros nem retorno!")
// }

// function funcaoDeExemplo02(parametro01, parametro02){
//     console.log("Uma função que faz algo,tem parâmetros nem retorno!")
//     console.log(`Eu recebi ${parametro01} e ${parametro02}`)
// }

// function funcaoDeExemplo03(parametro01, parametro02){
//     console.log("Uma função que faz algo,tem parâmetros e retorna algo para a linha que chamou ela!")
//     console.log(`Eu recebi ${parametro01} e ${parametro02}`)
//     console.log("E vou retornar o que está indicado no return")
//     return parametro01 + parametro02
// }

// function alterarCorDoBoxModel01ParaVermelho(){
//     const elementoCapturado = document.getElementById("boxModel01")
//     elementoCapturado.style.backgroundColor = "red"
// }

function alterarBackgroundDeElemento(idElemento, corEscolhida){
    const elementoCapturado = document.getElementById(idElemento)
    elementoCapturado.style.backgroundColor = corEscolhida
}

function alterarBorda(idElemento, corEscolhida){
    const elementoBoxModel02 = document.getElementById(idElemento)
    elementoBoxModel02.style.borderColor = corEscolhida
}

function sumirBoxModel03(idElemento){
    const elementoBoxModel03 = document.getElementById(idElemento)
    elementoBoxModel03.style.display = "none"
}

function aparecerBoxModel04(idElemento){
    const elementoBoxModel04 = document.getElementById(idElemento)
    elementoBoxModel04.style.display = "block"
}
