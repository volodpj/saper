'use strict';

const START = document.getElementById('bt_start');

START.addEventListener('click', function(){

    document.getElementById('field').innerHTML = '';
    createTable(document.getElementById('field'))

});



function createTable(element, row = 15, cell = 15){

    const table = document.createElement('table');
    element.append(table);

    for(let i = 0; i < row; i++){
        let tr = document.createElement('tr');
        for(let j = 0; j < cell; j++){
            let td = document.createElement('td');
            td.dataX = i;
            td.dataY = j;
            tr.classList.add('fog');
            tr.append(td);
        }
        table.append(tr);
    }

    const field = [...table.querySelectorAll('td')];
    stateMine(field);
    return table
};

//const field = [...createTable(document.getElementById('field')).querySelectorAll('td')];

  
function stateMine(field){
    
    for(let i = 0; i < 10; i++){

        let randomX = Math.floor(Math.random() * (14 - 0)) + 0;
        let randomY = Math.floor(Math.random() * (14 - 0)) + 0;
        let cell = findCell(field, randomX, randomY);
        if(!cell[0].classList.contains('mine')){
            cell[0].classList.add('mine');
        }else{
            i--;
        };

    };
};

function findCell(arrayFaild, x, y){
    
    let cell = arrayFaild.filter(function(elem){
        return elem.dataX === x && elem.dataY === y;
    });
    return cell
};


