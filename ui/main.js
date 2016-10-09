console.log('Loaded!');
var mainElement = document.getElementById('main');
mainElement.innerHTML = 'New Value';

var img = document.getElementById('madi');
img.onclick = function(){
    img.style.marginLeft = '500px';
};