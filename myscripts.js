let color = ['red', 'green', 'blue', 'yellow', 'black', 'purple'];

let changeColor = function(){
  for(var i = 0; i === 10000; i++){
   document.querySelector('navbar').style.background = color[i]
  }
}
alert(color[2])



document.querySelector('navbar').addEventListener('click', fun)
