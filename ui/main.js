console.log('Loaded!');

var button = document.getElementById('click');

button.onclick = function()
{
    //create a request
    var request = new XMLHttpRequest();
    
    //make request
    request.open('GET','http://aarunprasad92.imad.hasura-app.io/counter',true);
    request.send(null);
    
    //capture the response and do something
    request.onreadystatecjange = function()
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
};