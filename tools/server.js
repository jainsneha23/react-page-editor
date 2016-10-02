import express from 'express';
import compression from 'compression';

/*eslint-disable no-console */

const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, ip, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server listening on port: ${ip}:${port}`);
  }
});
