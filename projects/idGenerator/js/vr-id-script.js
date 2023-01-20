

var obj = {
    table: []
};

var fs = require('fs');
fs.readFile('IDs.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    obj = JSON.parse(data); //now it an object
    obj.table.push({id: 12345, alias: bamonm}); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('IDs.json', json, 'utf8', callback); // write it back 
}});