console.log('Loaded!');
var mainElement = document.getElementById('main');
mainElement.innerHTML = 'New Value';

var marginLeft = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.syle.marginLeft = marginLeft + 'px';
}
var img = document.getElementById('madi');
img.onclick = function(){
    var interval = setInterval(moveRight, 100);
    //img.style.marginLeft = '500px';
};