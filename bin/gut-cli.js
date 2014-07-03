#!/usr/bin/env node

var gut = require('../');

if (process.argv.length > 2 && process.argv[2] === 'status') {
    console.log("\n\tGut status: %s", gut.getStatus());
}

console.log('\nI think you meant "git"');
