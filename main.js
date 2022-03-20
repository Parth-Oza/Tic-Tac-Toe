
var header = document.querySelector('table')
header.style.color = 'red'
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

setInterval("changeHeaderColor()",1000);


var restart = document.querySelector('#b')

var square = document.querySelectorAll('td');


function clearbox(){
    for (var i = 0; i < square.length; i++) {
        square[i].textContent = '';
   
    }
}


restart.addEventListener('click',clearbox);


function changemarker() {
    if (this.textContent === ''){
        this.textContent = 'X';
    }
    else if(this.textContent === 'X'){
        this.textContent = 'O';

    }
    else{
    this.textContent = '';
}
}

for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click',changemarker)
    
}
