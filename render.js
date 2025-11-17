const ejs = require('ejs');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
ejs.renderFile('template.ejs', data, {}, (err, str) => {
    if (err) throw err;
    fs.writeFileSync('index.html', str);
    console.log('CV généré');
});