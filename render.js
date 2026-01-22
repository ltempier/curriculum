const ejs = require('ejs');
const fs = require('fs');


const theme = process.argv.includes('--light') ? 'light' : 'dark';

const dataFr = JSON.parse(fs.readFileSync('data.json', 'utf8'));

dataFr.theme = theme;
dataFr.lang = "FR";
ejs.renderFile('template.ejs', dataFr, {}, (err, str) => {
    if (err) throw err;
    fs.writeFileSync('index.html', str);
    console.log('CV généré');
});



const dataEn = JSON.parse(fs.readFileSync('data_en.json', 'utf8'));

dataEn.theme = theme;
dataEn.lang = "EN";
ejs.renderFile('template.ejs', dataEn, {}, (err, str) => {
    if (err) throw err;
    fs.writeFileSync('en.html', str);
    console.log('CV généré');
});