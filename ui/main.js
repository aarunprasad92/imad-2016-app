console.log('Loaded!');
var mainElement = document.getElementById('main');
mainElement.innerHTML = 'New Value';

var img = document.getElementById('madi');
img.onClick = function(){
    img.style.leftMargin = '100px';
}