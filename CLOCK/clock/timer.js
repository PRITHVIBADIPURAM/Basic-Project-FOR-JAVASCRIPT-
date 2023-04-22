 var time = 10;
  var ch = null;
set = document.getElementById('set');
btn = document.getElementById('start');
reset = document.getElementById('reset')

//setInterval(function update(params){
  //   if (time>=0) {
   //       set.innerHTML =time;
 //    }
  //   time--;
     
//,1000)


function timer () {
     if (time>=0) {
      set.innerHTML =time;
      time--;
   }
 
}

btn.addEventListener('click',function(){
     function start(){
          starttimer= setInterval(function() {
               timer();
          }, 1000);
     }
     start();
})

function hello(){
     clearInterval(time=10);

}
reset.addEventListener('click',function(){
     function trigger(){
          hello();
         
     }
     trigger();
})
