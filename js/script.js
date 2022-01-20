const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['blue','red','yellow','pink','violet']

body.style.backgroundColor = 'blue'
button.addEventListener('click',change)
 
function change(){
     const colorIndex = parseInt(Math.random()*colors.length)
     body.style.backgroundColor = colors[colorIndex]
}