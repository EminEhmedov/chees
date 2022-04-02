function secim(){
    document.getElementById('h3').innerHTML='Sizin Cedvel'
    document.getElementById('cedvel').style.display='table';
    let sec=document.getElementById('sec');
    let table='';
    for(let i=0; i<sec.value; i++){
        table+=`<tr>`
        for( let j=0; j<sec.value; j++){

let color= '';
if ( i==j || i+j==sec.value-1) {
    color='black';
}
else{
    color="";
}
table+= `<td style="background-color:${color}"> ${i} ${j}</td>`;
        }
        table+=`<tr/>`;

    }
    document.getElementById('cedvel').innerHTML=table;
  
}

