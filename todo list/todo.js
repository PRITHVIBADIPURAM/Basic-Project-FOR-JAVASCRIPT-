let input = document.querySelector('#todo');
let btn = document.querySelector('#btn');
let list = document.querySelector('#elementlist');
let ul = document.getElementsByTagName('li');

btn.addEventListener('click',(li) => 
{ let txt=input.value;

    if  (txt){

        const todoel= document.createElement("li");
        todoel.innerText = txt;
        elementlist.appendChild(todoel);
        input.value = "";
    }
    else{
      //  let text = document.createTextNode(todo).value;
      //  let item =document.createTextNode(text);
      //  let newtext = document.createElement("li");
      //  newtext.appendChild(item);
        //inputvalue ="";let li = document.createElement('li');
        //li.appendChild(txt);
        txt = "";
        alert('Type something');
       

      
        
    }
});




























