
redsphere_el = document.getElementById('redsphere');
greensphere_el = document.getElementById('greensphere');
bluesphere_el = document.getElementById('bluesphere');

var increaseSize = 1.2

redsphere_el.addEventListener('mouseenter', function(evnt){
    redsphere_el.setAttribute('material', 'color', 'yellow');
    var redsphereRadius = redsphere_el.getAttribute('radius')
    
    redsphere_el.setAttribute('radius', redsphereRadius*increaseSize);
})

redsphere_el.addEventListener('mouseleave', function(evnt){
    redsphere_el.setAttribute('material', 'color', 'red');
    var redsphereRadius = redsphere_el.getAttribute('radius')
    redsphere_el.setAttribute('radius', redsphereRadius/increaseSize);
    
})

greensphere_el.addEventListener('mouseenter', function(evnt){
    greensphere_el.setAttribute('material', 'color', 'yellow');
})

greensphere_el.addEventListener('mouseleave', function(evnt){
    greensphere_el.setAttribute('material', 'color', 'green');
})

bluesphere_el.addEventListener('mouseenter', function(evnt){
    bluesphere_el.setAttribute('material', 'color', 'yellow');
})

bluesphere_el.addEventListener('mouseleave', function(evnt){
    bluesphere_el.setAttribute('material', 'color', 'blue');
})




/*
box_span = document.getElementById('box')

var toggle = 0;

box_span.addEventListener('click', function (evt) {
    if(toggle == 0){
        box_span.setAttribute('material', 'color', 'green');
        toggle = 1;
    }
    else{
        box_span.setAttribute('material', 'color', 'red');
        toggle = 0;
    }
  });
*/