console.log('Loaded!');
var mainElement = document.getElementById('main');
mainElement.innerHTML = 'New Value';


var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.syle.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
};