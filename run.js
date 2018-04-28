var fs = require('fs');
var unified = require('unified');
var markdown = require('remark-parse');
var html = require('remark-html');
var highlight = require('remark-highlight.js');
var remark2rehype = require('remark-rehype');
var doc = require('rehype-document');
var stringify = require('rehype-stringify')

unified()
  .use(markdown)
  .use(highlight, ['sql'])
  .use(remark2rehype)
  .use(doc, { css: ['github.css', 'dracula.css']})
  .use(stringify)
  .process(fs.readFileSync('test.md'), function (err, file) {
    if (err) throw err;
    fs.writeFileSync('test.html', file);
    console.log(String(file));
  });