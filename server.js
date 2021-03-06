var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config = {
    user : 'aarunprasad92',
    database : 'aarunprasad92',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : process.env.DB_PASSWORD
};

var articles = 
{
  'article-one' : {
      title : 'Article-One by Arun',
  heading : 'Article One',
  date : '25, sep, 2016',
  content : `<p>
                This is Article one. This is Article one. This is Article one. This is Article one. This is Article one.
            </p>
            <p>
                This is Article one. This is Article one. This is Article one. This is Article one. This is Article one.
            </p>
            <p>
                This is Article one. This is Article one. This is Article one. This is Article one. This is Article one.
            </p>`
  },
  'article-two' : {
      title : 'Article-Two by Arun',
  heading : 'Article Two',
  date : '25, sep, 2016',
  content : `<p>
                This is Article Two
            </p>`
  },
  'article-three' : {
      title : 'Article-Two by Arun',
  heading : 'Article Two',
  date : '25, sep, 2016',
  content : `<p>
                This is Article Two
            </p>`
  }
};

function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title>${title}</title>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        
        <body>
            <div class="container">
                <a href="/">home</a>
                <hr/>
                <div>
                    <h3>${heading}</h3>
                </div>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>
    `;
    
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var pool = new Pool(config);
app.get('/test-db', function (req, res) {
  pool.query('SELECT * FROM test', function(err, result){
      if (err)
      {
          res.status(500).send(err.toString());
      }
      else
      {
          res.send(JSON.stringify(result));
      }
  });
});

var counter = 0;
app.get('/counter', function (req, res) {
    counter = counter + 1;
  res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) {
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
