import express from 'express';
import compression from 'compression';

/*eslint-disable no-console */

const port = 8080;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port: ${port}`);
  }
});
