const ejs = require('ejs');
const fs = require('fs');


const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

const theme = process.argv.includes('--light') ? 'light' : 'dark';

data.theme = theme;

ejs.renderFile('template.ejs', data, {}, (err, str) => {
    if (err) throw err;
    fs.writeFileSync('index.html', str);
    console.log('CV généré');
});