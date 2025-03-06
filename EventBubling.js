console.log('Event Bubling');

var div = document.querySelector('div')
var btn = document.querySelector('button')

div.addEventListener('click',(event)=>{    
    console.dir(event.target.innerHTML);
})


