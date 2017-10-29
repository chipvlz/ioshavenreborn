const fs = require('fs');
let file = '.nuxt/views/app.template.html'
fs.readFile(file, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  let replacement = `{{ HEAD }}
    <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
    <script>
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-4649450952406116",
      enable_page_level_ads: true
    });
    </script>
  `
  var result = data.replace(/{{ HEAD }}/g, replacement);

  fs.writeFile(file, result, 'utf8', function (err) {
     if (err) return console.log(err);
  });
});
