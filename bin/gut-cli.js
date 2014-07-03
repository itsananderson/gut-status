#!/usr/bin/env node

var gut = require('../');
var spawn = require('child_process').spawn;

if (process.argv.length > 2 && process.argv[2] === 'status') {
    console.log("\n\tGut status: %s", gut.getStatus());
    var child = spawn('git', Array.prototype.slice.call(process.argv, 2));
    child.stdout.pipe(process.stdout);
} else {
    console.log('\nI think you meant "git"');
}
