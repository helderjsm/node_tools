'use strict';

let args = process.argv.slice(2);
if (args.length < 2) {

    console.error('Left Side Json File, Right Side Json File must be specified');
    console.info('Usage: node merge_json.js input.json input2.json output.json')
    return
    
}

const fs = require('fs');

if (!fs.existsSync(args[0])) {
    console.error("Left side Json file does not exist");
    return;
}


if (!fs.existsSync(args[1])) {
    console.error("Right side Json file does not exist");
    return;
}

let leftData = fs.readFileSync(args[0]);
let left = JSON.parse(leftData);

let rightData = fs.readFileSync(args[1]);
let right = JSON.parse(rightData);

for(const [key, value] of Object.entries(left)) {
    if (right[key] === undefined) {
        right[key] = value;
    }
};

let output = JSON.stringify(right);
if (args.length > 2) {
    fs.writeFileSync(args[3], output);
} else {
    fs.writeFileSync('output.json', output);
}