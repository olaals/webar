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

