var player = null
var winn = false
var players = 1
var playerSelect = document.getElementById(`playerSelect`)
var vencedor = document.getElementById(`playerWin`)
var quadrados = document.getElementsByClassName(`cel`)
var menu = document.getElementById(`menu`)
var game = document.getElementById(`game`)

function changePlayer(valor){
    player = valor
    playerSelect.innerHTML = `<h3>`+player+`</h3>`

    if(players == 1 && player == 'O'){
        let i = Math.floor(Math.random()*9)
        console.log(i)
        select(i+1)
    }
}
changePlayer(`X`)

function winner(quadrado1, quadrado2, quadrado3){
    if(quadrado1.innerHTML===quadrado2.innerHTML && 
    quadrado2.innerHTML===quadrado3.innerHTML){
        winn = true;
        quadrado1.style.background = '#0f0'
        quadrado2.style.background = '#0f0'
        quadrado3.style.background = '#0f0'
    }
    return winn
}

function chec(id){
    if(id == 1){
        if((winner(quadrados[0], quadrados[1], quadrados[2])||
            winner(quadrados[0], quadrados[4], quadrados[8])||
            winner(quadrados[0], quadrados[3], quadrados[6]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[0].innerHTML+`</h3>`
        }
    }else if(id == 2){
        if((winner(quadrados[0], quadrados[1], quadrados[2])||
            winner(quadrados[1], quadrados[4], quadrados[7]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[1].innerHTML+`</h3>`
        }
    }else if(id == 3){
        if((winner(quadrados[0], quadrados[1], quadrados[2])||
            winner(quadrados[2], quadrados[4], quadrados[6])||
            winner(quadrados[2], quadrados[5], quadrados[8]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[2].innerHTML+`</h3>`
        }
    }else if(id == 4){
        if((winner(quadrados[3], quadrados[4], quadrados[5])||
            winner(quadrados[0], quadrados[3], quadrados[6]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[3].innerHTML+`</h3>`
        }
    }else if(id == 5){
        if((winner(quadrados[3], quadrados[4], quadrados[5])||
            winner(quadrados[1], quadrados[4], quadrados[7])||
            winner(quadrados[0], quadrados[4], quadrados[8])||
            winner(quadrados[2], quadrados[4], quadrados[6]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[4].innerHTML+`</h3>`
        }
    }else if(id == 6){
        if((winner(quadrados[3], quadrados[4], quadrados[5])||
            winner(quadrados[2], quadrados[5], quadrados[8]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[5].innerHTML+`</h3>`
        }
    }else if(id == 7){
        if((winner(quadrados[6], quadrados[7], quadrados[8])||
            winner(quadrados[6], quadrados[4], quadrados[2])||
            winner(quadrados[6], quadrados[3], quadrados[0]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[6].innerHTML+`</h3>`
        }
    }else if(id == 8){
        if((winner(quadrados[6], quadrados[7], quadrados[8])||
            winner(quadrados[7], quadrados[4], quadrados[1]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[7].innerHTML+`</h3>`
        }
    }else if(id == 9){
        if((winner(quadrados[6], quadrados[7], quadrados[8])||
            winner(quadrados[0], quadrados[4], quadrados[8])||
            winner(quadrados[2], quadrados[5], quadrados[8]))==true){
                console.log('ganhou')
                vencedor.innerHTML = `<h3>`+quadrados[8].innerHTML+`</h3>`
        }
    }
}

function select(id){
    var quadrado = document.getElementById(id)

    if(winn == false){
        if(quadrado.innerHTML !== '-')
            return
        
        quadrado.innerHTML = player;
        quadrado.style.color = "#000"
    
        if(player === 'X')
            player = 'O'
        else
            player = 'X'
    
        chec(id)
        changePlayer(player)
    }
}

function reiniciar(){
    for(let quadrado of quadrados){
        quadrado.innerHTML = '-'
        quadrado.style.background = "#90cfba"
    }
    changePlayer(`X`)
    vencedor.innerHTML = ``
    winn = false
}

function play(){
    menu.style.display = 'none'
    game.style.display = 'flex'
    reiniciar()
}

function changePlayers(p){
    players = p
}

function stop(){
    menu.style.display = 'flex'
    game.style.display = 'none'
}