const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/{{fyle-ui-page}}'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/{{fyle-ui-page}}/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
