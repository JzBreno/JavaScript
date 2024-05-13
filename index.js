console.log('Meu nome nao é java script');

let primeironome = 'Breno';
let ultimonome = 'Jacauna';
let valor = 10;
const valorunico = 100;
let qu = 100.0;
console.log(primeironome);
console.log(ultimonome);
console.log(valor);
console.log(typeof valorunico);


let pen = {
    itemName: 'pen',
    itemPrice: 3,
    itemAvailabre: true,
    itemColor: 'red'
}

pen.itemColor = 'Blue' 


console.log(pen.itemName)

let friends = ['marcos',1,  'breno',3, 'jose',2, 'tuezin',8, 'jose',1]
console.log(friends)


salStatus('Aproved!', 100)

function salStatus(status, TOTAL){
    console.log('Transaction ' + status + TOTAL)
}