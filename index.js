/* eslint-disable  */
require('babel-register');
var argv = require('minimist')(process.argv.slice(2));
var cluster = require('cluster');
var numOfCPUs = require('os').cpus().length;
var numWorkers = 1;

if (argv.cluster && argv.cluster === 'true'){
  numWorkers = argv.len;
}

if (numWorkers <= 1)      // No clustering
{
  var server = require('./tools/server.js');
  module.exports = server;
} else {                 // clustering
  if(cluster.isMaster) {
    console.log('Master cluster setting up ' + numWorkers   + ' workers...');
    for(var i = 0; i < numWorkers; i++) {
      cluster.fork();
    }
    cluster.on('online', function(worker) {
      console.log('Worker ' + worker.process.pid + ' is online');
    });
    cluster.on('exit', function(worker, code, signal) {
      console.log('Worker ' + worker.process.pid + ' died with code: ' + code + ', and signal: ' + signal);
      console.log('Starting a new worker');
      cluster.fork();
    });
  } else {
    var server = require('./tools/server.js');
    module.exports = server;
  }
}
