
function contagem(tag){
    if (tag == 'Dia')
        for (let i = 1;i <32; i++){
            Dia.innerHTML += `<option>${i}</option>`;
        }
    else if (tag == 'Mes')
        for (let i = 1;i <13; i++){
            Mes.innerHTML += `<option>${i}</option>`;
        }
}

contagem('Dia');
contagem('Mes');