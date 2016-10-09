console.log('Loaded!');

var button = document.getElementById('click');

button.onclick = function()
{
    //create a request
    var request = new XMLHttpRequest();

    //capture the response and do something
    request.onreadystatechange = function()
    {
      if (request.readyState === XMLHttpRequest.DONE)
      {
          if (request.status === 200)
          {
              var counter = request.responseText;
              var span = document.getElementById('count');
              span.innerHTML= counter.toString();
          }
      }
    };
    
     //make request
    request.open('GET','http://aarunprasad92.imad.hasura-app.io/counter',true);
    request.send(null);
};

//submit name
var nameInput = document.getElementById('name');
var nameVal = nameInput.value;

var submit = document.getElementById('submit_btn');

submit.onclick = function()
{
    
};