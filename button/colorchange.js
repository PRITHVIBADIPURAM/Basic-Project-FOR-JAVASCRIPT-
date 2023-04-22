color = ['red','yellow','orange','green','blue'];
var a = document.getElementById('hello');
var b = document.querySelector('.container');
a.addEventListener ('click', function() {
    var colorchange = color[Math.floor(Math.random()* color.length)]
    b.style.background = colorchange;
})
