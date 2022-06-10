
let num = 0;
const valorHTML = document.getElementById("valor");

function decremento(){
    num--;
    console.log(num);
    valorHTML.innerHTML = num;
    cambioColor(num);
}

function reset(){
    num = 0;
    console.log(num);
    valorHTML.innerHTML = num;
    cambioColor(num);
}

function incremento(){
    num++;
    console.log(num);
    valorHTML.innerHTML = num;
    cambioColor(num);
}

function cambioColor(valor){
    if(valor != 0){
        if(valor > 0){
            valorHTML.classList.remove("rojo", "negro");
            valorHTML.classList.add("verde");
        }else if(valor < 0){
            valorHTML.classList.remove("verde","negro");
            valorHTML.classList.add("rojo");
        }
    }else{
        valorHTML.classList.remove("verde", "rojo");
        valorHTML.classList.add("negro");
    }
}