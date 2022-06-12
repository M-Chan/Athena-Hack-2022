
function changeColour(btn){
    btn.style.backgroundColor = '#febd26';
}

function changeColour2(btn){
    if(btn.style.backgroundColor == '#D9D9D9') {btn.style.backgroundColor = '#febd26';}
    else{btn.style.backgroundColor = '#D9D9D9';}
}

document.querySelectorAll(".clickySelecting").forEach(item => {item.addEventListener('click', function(){changeColour(item); })})