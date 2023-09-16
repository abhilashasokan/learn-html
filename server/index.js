const express = require('express');
const path = require('path');

const app = express();
const distFolder = path.join(__dirname, "..", "dist");

// Serve only the static files form the dist directory
app.use(express.static(distFolder));

app.get('/*', function(req,res) {
  res.sendFile(path.join(distFolder, "index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
