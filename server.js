var fs = require('fs');

try {  
    var data = fs.readFileSync('customers.txt', 'utf8');
    const records = data.split('\n');
    return records;
} catch(e) {
    console.log('Error:', e.stack);
}