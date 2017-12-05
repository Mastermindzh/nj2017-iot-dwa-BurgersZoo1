var markdownpdf = require("markdown-pdf")
, split = require("split")
, through = require("through")
, duplexer = require("duplexer")
var through = require('through');
var cheerio = require('cheerio');

var imgBasePath = __dirname + "/deliverables/";
var preProcessHtml = function() {

  return through(function(data) {
      var $ = cheerio.load(data);

      $('img[src]').each(function(i, elem) {
          var path = $(this).attr('src');
          path = imgBasePath + path;
          $(this).attr('src', path);
      });

      this.queue($.html());
  });
};

let document = process.argv[2];

if(document != undefined){
  markdownpdf({preProcessHtml: preProcessHtml})
  .from(`deliverables/${document}.md`)
  .to(`deliverables/pdf/${document}.pdf`, function () { console.log(`Successfully converted ${document}`) })
}else{
  console.log('Please specify a source document')
}
