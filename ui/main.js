console.log('Loaded!');
var mainElement = document.getElementById('main');
mainElement.innerHTML = 'New Value';


var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    console.log('Image clicked..');
    var interval = setInterval(moveRight, 50);
};